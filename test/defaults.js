import { expect } from "chai";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

describe("ODataMockGenerator - defaults", () => {
  it("sets default values if not provided", () => {
    const sampleMetadataXml = "<xml><something></something></xml>";
    const generator = new ODataMockGenerator(sampleMetadataXml);

    expect(generator._predefinedValuesConfig).to.deep.equal({});
    expect(generator._skipMockGeneration).to.be.empty;
    expect(generator._distinctValues).to.be.empty;
    expect(generator._numberOfEntities).to.equal(30);
    expect(generator._rootUri).to.equal("/");
  });

  it("appends / to root URI if not provided", () => {
    const sampleMetadataXml = "<xml><something></something></xml>";
    const generator = new ODataMockGenerator(sampleMetadataXml, {
      mockDataRootURI: "my/path/uri",
    });

    expect(generator._rootUri).to.equal("my/path/uri/");
  });
});
