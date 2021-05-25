import { expect } from "chai";
import { readFileSync } from "fs";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

const metadataXml = readFileSync("test/support/fixtures/metadata.xml").toString();

describe("ODataMockGenerator - generating without rules", () => {
  it("creates expected number of entites", () => {
    const generator = new ODataMockGenerator(metadataXml, { defaultLengthOfEntitySets: 5 });
    const mockData = generator.createMockData();

    expect(mockData).not.to.be.null;
    expect(mockData.Products).has.length(5);
    expect(mockData.ProductDetails).has.length(5);
    expect(mockData.Categories).has.length(5);
    expect(mockData.Persons).has.length(5);
    expect(mockData.PersonDetails).has.length(5);
    expect(mockData.Advertisements).has.length(5);
  });

  it("fills entity properties and navigation links", () => {
    const generator = new ODataMockGenerator(metadataXml, { defaultLengthOfEntitySets: 1 });
    const mockData = generator.createMockData();
    expect(mockData.Products).has.length(1);

    const product = mockData.Products[0];
    expect(product.ID).to.be.a("number").and.is.greaterThan(0);
    expect(product.Name).to.be.a("string").and.is.not.empty;
    expect(product.Description).to.be.a("string").and.is.not.empty;
    expect(product.ReleaseDate).to.be.a("string").and.is.not.empty;
    expect(product.DiscontinuedDate).to.be.a("string").and.is.not.empty;
    expect(product.Rating).to.be.a("number").and.is.greaterThan(0);
    expect(product.Price).to.be.a("number").and.is.greaterThan(0);
    expect(product.Single).to.be.a("number").and.is.greaterThan(0);
    expect(product.Decimal).to.be.a("number").and.is.greaterThan(0);
    expect(product.SByte).to.be.a("number");
    expect(product.Time).to.be.a("string").and.matches(/PT.\d*H\d*M\d*S\d*/);
    expect(product.__metadata.uri).to.equal(`/Products(${product.ID})`);
    expect(product.__metadata.type).to.equal("ODataDemo.Product");

    expect(product.Categories).to.deep.equal({
      __deferred: {
        uri: `/Products(${product.ID})/Categories`
      }
    });

    expect(product.Supplier).to.deep.equal({
      __deferred: {
        uri: `/Products(${product.ID})/Supplier`
      }
    });

    expect(product.ProductDetail).to.deep.equal({
      __deferred: {
        uri: `/Products(${product.ID})/ProductDetail`
      }
    });
  });

  it("sets the correct root URI in the paths", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 1,
      mockDataRootURI: "my/path"
    });

    const mockData = generator.createMockData();
    expect(mockData.Products).has.length(1);
    const product = mockData.Products[0];
    expect(product.__metadata.uri).to.equal(`my/path/Products(${product.ID})`);
    expect(product.__metadata.type).to.equal("ODataDemo.Product");

    expect(product.Categories).to.deep.equal({
      __deferred: {
        uri: `my/path/Products(${product.ID})/Categories`
      }
    });

    expect(product.Supplier).to.deep.equal({
      __deferred: {
        uri: `my/path/Products(${product.ID})/Supplier`
      }
    });

    expect(product.ProductDetail).to.deep.equal({
      __deferred: {
        uri: `my/path/Products(${product.ID})/ProductDetail`
      }
    });
  });

  it("limits the data if MaxLength property is present; leaves standard one if not", () => {
    const generator = new ODataMockGenerator(metadataXml);
    const mockData = generator.createMockData();

    expect(mockData.Products).to.have.lengthOf(30);

    for (let i = 0; i <= mockData.Products.length - 1; i++) {
      if (i < 9) {
        expect(mockData.Products[i].Code).to.match(/Co \d{1}/);
        expect(mockData.Products[i].Description).to.match(/Description \d{1}/);
      } else {
        expect(mockData.Products[i].Code).to.match(/C \d{2}/);
        expect(mockData.Products[i].Description).to.match(/Description \d{2}/);
      }
    }
  });
});