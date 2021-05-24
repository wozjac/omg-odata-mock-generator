import { expect } from "chai";
import { readFileSync } from "fs";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

const metadataXml = readFileSync("test/support/fixtures/metadataRefConstraints.xml").toString();

describe("ODataMockGenerator - generation based on metadata with referntial constraints", () => {
  it("creates correct IDs in properties, which are in referential constraints", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      numberOfEntitiesToGenerate: 10,
      skipMockGeneration: [
        "MainCategories",
        "SubCategories",
        "Reviews",
        "ReviewAggregates",
        "ShoppingCartItems",
        "ShoppingCarts",
        "Images"
      ]
    });

    const mockData = generator.createMockData();

    expect(mockData.Products).has.length(10);
    expect(mockData.Suppliers).has.length(10);

    const generatedSupplierIDs = [];

    for (const supplier of mockData.Suppliers) {
      expect(supplier.Id).to.be.a("number");
      generatedSupplierIDs.push(supplier.Id);
      expect(supplier.__metadata.uri).to.equal(`/Suppliers(${supplier.Id})`);
    }

    for (const product of mockData.Products) {
      expect(product.SupplierId).to.be.oneOf(generatedSupplierIDs);
      expect(product.__metadata.uri).to.equal("/" + encodeURIComponent(`Products('${product.Id}')`));
    }
  });

  it("creates data with predefined, distinct values; entity sets have correct IDs and URIs", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      numberOfEntitiesToGenerate: 10,
      skipMockGeneration: [
        "MainCategories",
        "SubCategories",
        "Reviews",
        "ReviewAggregates",
        "ShoppingCartItems",
        "ShoppingCarts",
        "Images"
      ],
      rules: {
        variables: {
          ids: [1, 2, 3, 4, 5]
        },
        distinctValues: ["Suppliers"],
        predefined: {
          Supplier: {
            Id: "$ref:ids"
          },
          Product: {
            SupplierId: "$ref:ids"
          }
        }
      }
    });

    const mockData = generator.createMockData();

    expect(mockData.Products).has.length(10);
    expect(mockData.Suppliers).has.length.at.most(5);

    const generatedSupplierIDs = [];

    for (const supplier of mockData.Suppliers) {
      expect(supplier.Id).to.be.a("number");
      expect(supplier.Id).to.be.oneOf([1, 2, 3, 4, 5]);
      generatedSupplierIDs.push(supplier.Id);
      expect(supplier.__metadata.uri).to.equal(`/Suppliers(${supplier.Id})`);
    }

    for (const product of mockData.Products) {
      expect(product.SupplierId).to.be.oneOf(generatedSupplierIDs);
      expect(product.SupplierId).to.be.oneOf([1, 2, 3, 4, 5]);
      expect(product.__metadata.uri).to.equal("/" + encodeURIComponent(`Products('${product.Id}')`));
    }
  });
});