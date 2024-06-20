import { expect } from "chai";
import { readFileSync } from "fs";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

const metadataXml = readFileSync(
  "test/support/fixtures/metadataRefConstraints.xml"
).toString();

describe("ODataMockGenerator - generating with faker", () => {
  it("throws an error if faker method could not be called", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 5,
      rules: {
        faker: {
          Supplier: {
            Name: "some.wrong.path",
          },
        },
      },
    });

    expect(() => {
      generator.createMockData();
    }).to.throw("faker.js call error, check the config for Supplier/Name");
  });

  it("generates faker data for given properties; limits the values if MaxLength is present", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 5,
      rules: {
        faker: {
          Supplier: {
            Name: "system.semver",
            ContactPhone2: "lorem.paragraph",
          },
        },
      },
    });

    const mockData = generator.createMockData();

    for (const supplier of mockData.Suppliers) {
      expect(supplier.Name).to.match(/\d*\.\d*\.\d*/);
      expect(supplier.ContactPhone2).to.have.lengthOf(10);
    }
  });

  it("generates faker data using Mustache template style", () => {
    const generator = new ODataMockGenerator(metadataXml, {
      defaultLengthOfEntitySets: 5,
      rules: {
        faker: {
          Supplier: {
            Name: "{{system.semver}} --- {{number.int}}",
          },
        },
      },
    });

    const mockData = generator.createMockData();

    for (const supplier of mockData.Suppliers) {
      expect(supplier.Name).to.match(/\d*\.\d*\.\d* --- \d*/);
    }
  });
});
