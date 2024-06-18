import { expect } from "chai";
import { readFileSync } from "fs";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

const metadataXml = readFileSync(
  "test/support/fixtures/metadata.xml"
).toString();

describe("ODataMockGenerator - generating with rules", () => {
  it("skips creation of entity sets, which are passed in the option", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 5,
      rules: {
        skipMockGeneration: ["ProductDetails", "Advertisements"],
      },
    });

    const mockData = generator.createMockData();

    expect(mockData).not.to.be.null;
    expect(mockData.Products).has.length(5);
    expect(mockData.Categories).has.length(5);
    expect(mockData.Persons).has.length(5);
    expect(mockData.PersonDetails).has.length(5);

    expect(mockData).not.to.have.property("ProductDetails");
    expect(mockData).not.to.have.property("Advertisements");
  });

  it("creates different number of entities for configured entity sets", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 5,
      rules: {
        lengthOf: {
          Products: 2,
          Categories: 12,
        },
      },
    });

    const mockData = generator.createMockData();

    expect(mockData).not.to.be.null;
    expect(mockData.Products).has.length(2);
    expect(mockData.ProductDetails).has.length(5);
    expect(mockData.Categories).has.length(12);
    expect(mockData.Persons).has.length(5);
    expect(mockData.PersonDetails).has.length(5);
    expect(mockData.Advertisements).has.length(5);
  });

  it("creates data with predefined values", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 40,
      skipMockGeneration: [
        "ProductDetails",
        "Advertisements",
        "Categories",
        "Persons",
        "PersonDetails",
      ],
      rules: {
        predefined: {
          Product: {
            Rating: [1, 2, 3],
          },
        },
      },
    });

    const mockData = generator.createMockData();
    expect(mockData.Products).has.length(40);

    for (const product of mockData.Products) {
      expect(product.Rating).to.be.a("number");
      expect(product.Rating).to.be.oneOf([1, 2, 3]);
      expect(product.__metadata.uri).to.equal(`/Products(${product.ID})`);
    }
  });

  it("creates data with predefined and related values for properties", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 40,
      rules: {
        skipMockGeneration: [
          "ProductDetails",
          "Advertisements",
          "Categories",
          "Persons",
          "PersonDetails",
          "Suppliers",
        ],
        predefined: {
          Product: {
            Rating: [1, 2, 3],
            Description: {
              reference: "Rating",
              values: [
                {
                  key: 1,
                  value: "Description for rating 1",
                },
              ],
            },
          },
        },
      },
    });

    const mockData = generator.createMockData();
    expect(mockData.Products).has.length(40);

    for (const product of mockData.Products) {
      expect(product.Rating).to.be.a("number");
      expect(product.Rating).to.be.oneOf([1, 2, 3]);
      expect(product.Description).to.be.a("string");
      expect(product.__metadata.uri).to.equal(`/Products(${product.ID})`);

      // for Rating 1 description is predefined
      if (product.Rating === 1) {
        expect(product.Description).to.equal("Description for rating 1");
      }
    }
  });

  it("creates data with predefined and related values using variables", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 40,
      rules: {
        skipMockGeneration: [
          "ProductDetails",
          "Advertisements",
          "Products",
          "Persons",
          "PersonDetails",
          "Suppliers",
        ],
        variables: {
          categoryIds: [1, 2, 3],
        },
        predefined: {
          Category: {
            ID: "$ref:categoryIds",
            Name: {
              reference: "ID",
              values: [
                {
                  key: 1,
                  value: "My Category1",
                },
                {
                  key: 2,
                  value: "My Category2",
                },
                {
                  key: 3,
                  value: "My Category3",
                },
              ],
            },
          },
        },
      },
    });

    const mockData = generator.createMockData();
    expect(mockData.Categories).has.length(40);

    for (const category of mockData.Categories) {
      expect(category.ID).to.be.a("number");
      expect(category.ID).to.be.oneOf([1, 2, 3]);
      expect(category.Name).to.be.a("string");
      expect(category.Name).to.equal(`My Category${category.ID}`);
      expect(category.__metadata.uri).to.equal(`/Categories(${category.ID})`);
    }
  });

  it("creates distinct values for given entity sets", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 40,
      rules: {
        distinctValues: ["Categories"],
        skipMockGeneration: [
          "ProductDetails",
          "Advertisements",
          "Persons",
          "PersonDetails",
          "Suppliers",
        ],
        variables: {
          categoryIds: [1, 2, 3],
        },
        predefined: {
          Category: {
            ID: "$ref:categoryIds",
          },
        },
      },
    });

    const mockData = generator.createMockData();
    expect(mockData.Products).has.length(40);
    expect(mockData.Categories).has.length(3);

    for (const category of mockData.Categories) {
      expect(category.ID).to.be.oneOf([1, 2, 3]);
      expect(category.__metadata.uri).to.equal(`/Categories(${category.ID})`);
    }
  });
});
