import { expect } from "chai";
import { parseXML } from "../src/xmlParser.js";

describe("xmlParser tests", () => {
  it("should throw if XML is not valid", () => {
    const invalidXML = `<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx" Version="1.0">
    <edmx:DataServices xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" m:DataServiceVersion="3.0" m:MaxDataServiceVersion="3.0">
    <Schema xmlns="http://schemas.microsoft.com/ado/2009/11/edm" Namespace="ODataDemo">
    <EntityType Name="Product"`;

    expect(() => {
      parseXML(invalidXML);
    }).to.throw();
  });

  it("returns parsed XML", () => {
    const validXML = '<ns><some attr="aaaa"></some></ns>';

    expect(parseXML(validXML)).not.to.be.null;
  });
});
