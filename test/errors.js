import { expect } from "chai";
import { ODataMockGenerator } from "../src/ODataMockGenerator.js";

describe("ODataMockGenerator errors", () => {
  it("throws an error if metadata is not provided", () => {
    expect((() => { new ODataMockGenerator(); })).to.throw("metadata not provided");
  });

  it("throws an error if metadata XML could not be parsed", () => {
    const invalidXml = `<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" Version="1.0">
    <edmx:DataServices xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:DataServiceVersion="3.0" m:MaxDataServiceVersion="3.0">
    <Schema xmlns="http://schemas.microsoft.com/ado/2009/11/edm" Namespace="ODataDemo">
    <EntityType Name="Product"`;

    expect((() => { new ODataMockGenerator(invalidXml); })).to.throw("Metadata XML parsing error - is the document correct?");
  });
});