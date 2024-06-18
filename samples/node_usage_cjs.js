// const { ODataMockGenerator } = require("omg-odata-mock-generator/dist/cjs") in your code after npm install
const { ODataMockGenerator } = require("../dist/cjs");
const fs = require("fs");

function getMetadata() {
  // using metadata from https://services.odata.org/V3/OData/OData.svc/$metadata
  return fs.readFileSync("./samples/metadata.xml", "utf-8");
}

function run() {
  const metadata = getMetadata();

  const options = {
    defaultLengthOfEntitySets: 3,
    mockDataRootURI: "my/path",
    rules: {
      skipMockGeneration: ["Persons", "Suppliers"],
      variables: {
        categoryIds: [1, 2, 3],
      },
      faker: {
        Product: {
          Name: "commerce.productName",
        },
      },
      distinctValues: ["Categories"],
      predefined: {
        Category: {
          ID: "$ref:categoryIds",
          Name: {
            reference: "ID",
            values: [
              {
                key: 1,
                value: "Category1",
              },
              {
                key: 2,
                value: "Category2",
              },
              {
                key: 3,
                value: "Category3",
              },
            ],
          },
        },
      },
    },
  };

  const generator = new ODataMockGenerator(metadata, options);
  const mockData = generator.createMockData();
  console.log(JSON.stringify(mockData));
}

run();
