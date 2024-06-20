[![Coverage Status](https://coveralls.io/repos/github/wozjac/omg-odata-mock-generator/badge.svg?branch=main)](https://coveralls.io/github/wozjac/omg-odata-mock-generator?branch=main)
![Build](https://github.com/wozjac/omg-odata-mock-generator/actions/workflows/build.yml/badge.svg)
![Coveralls](https://github.com/wozjac/omg-odata-mock-generator/actions/workflows/coveralls.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# OMG - OData Mock (data) Generator

## Overview

Generates random mock data for entities described in the OData metadata document.
Based on the code from [OpenUI5 Mock Server](https://openui5.hana.ondemand.com/api/sap.ui.core.util.MockServer),
but has additional features:

- use faker.js API methods for data generation
- generate specific number of entities for given entity sets
- skip generation of Entitiy Sets you don't need
- provide sets of values, which should be used instead of pure random values
- more meanigful and related data - values from one property can have a specific value based
  on a value from another property, which helps with building navigations
- force to have only distinct entries within an Entity Set (based on key properties)

## Installation

### Node

npm install omg-odata-mock-generator

#### ES modules

```javascript
import { ODataMockGenerator } from "omg-odata-mock-generator";
// ... prepare metadata and options
const generator = new ODataMockGenerator(metadata, options);
```

See [samples/node_usage_esm.js](./samples/node_usage_esm.js)

#### CommonJS

```javascript
const { ODataMockGenerator } = require("omg-odata-mock-generator/dist/cjs");
// prepare metadata and options
const generator = new ODataMockGenerator(metadata, options);
```

See [samples/node_usage_cjs.js](./samples/node_usage_cjs.js)

### Browser

Use dist/preset-env/bundle.umd.js; jQuery is required. See [samples/browser_usage.html](./samples/browser_usage.html)

## API

Check the [docs](https://wozjac.github.io/omg-odata-mock-generator/)

## Usage

The samples below are based on modules.

```javascript
import { ODataMockGenerator } from "omg-odata-mock-generator"; //or require("omg-odata-mock-generator")
const generator = new ODataMockGenerator(metadataAsString, options);
const mockData = generator.createMockData();
```

- _metadataAsString_ is an OData metadata XML document
- _options_ - an optional parameter for fine-tuning the generation process. If not provided, defaults are used.

Options parameter structure is as follows:

```javascript
{
  defaultLengthOfEntitySets: <number>, // default 30
  mockDataRootURI: <root uri for entity URIs>, // default ""
  rules: {
    predefined: { <configuration for predefined values> }, // default empty
    skipMockGeneration: ["EntitySet1", "EntitySet2", ...], // default empty
    distinctValues: [ "EntitySet1", "EntitySet2", ...], // default empty
    variables: { <variables for predefined values> }, // default empty
    faker: { configuration for faker.js }, // default empty
    lengthOf: { entities size config } // default empty
  }
}
```

Please also refer to [docs](https://wozjac.github.io/omg-odata-mock-generator/)

### Default generation

**Note**: assuming _metadata_ is <https://services.odata.org/V3/OData/OData.svc/$metadata>

```javascript
const generator = new ODataMockGenerator(metadata);
const mockData = generator.createMockData();
```

will generate 30 entries for each entity set

```javascript
{
  "Products": [
    {
      "ID": 9,
      "Name": "Name 1"
      // rest of properties
    }
   ],
  "ProductDetails": [
    {
    "ProductID": 6671,
    "Details": "Details 1"
    // rest of properties
  }
}
```

See [samples/generatedDataSample.json](./samples/generatedDataSample.json)

### Setting number of generated entities

_defaultLengthOfEntitySets_ sets the global, default number of generated entries; this can be overwritten
for specific entity sets using _rules.lengthOf_ option

```javascript
const options = {
  defaultLengthOfEntitySets: 3,
};

const generator = new ODataMockGenerator(metadata, options);
const mockData = generator.createMockData();
```

Each entity set will have 3 entries. Setting generation of 2 entries for Products, 12 for Categories:

```javascript
const options = {
  defaultLengthOfEntitySets: 3,
  rules: {
    lengthOf: {
      Products: 2,
      Categories: 12,
    },
  },
};
```

### Setting the root URI

```javascript
const options = {
  defaultLengthOfEntitySets: 3,
  mockDataRootURI: "my/path",
};

const generator = new ODataMockGenerator(metadata, options);
const mockData = generator.createMockData();
```

URI in _\_\_metadata_ will be prefixed:

```javascript
"ProductDetails": [{
    "ProductID": 6671,
    "Details": "Details 1",
    "__metadata": { "uri": "my/path/ProductDetails(6671)", "type": "ODataDemo.ProductDetail" },
    // ...
```

### Skipping mock data generation for entity sets

```javascript
{
  rules: {
    skipMockGeneration: ["EntitySet1", "EntitySet2"];
  }
}
```

For example:

```javascript
{
  rules: {
    skipMockGeneration: ["Persons", "Suppliers"];
  }
}
```

### Using faker.js

Faker.js (v8) [API methods](https://fakerjs.dev) can be provided and they will be used
instead of default logic for data generation. Alternatively, Mustache-like string with several values
can be also passed as described in the faker.js docs, for
example `{{name.lastName}}, {{name.firstName}} {{name.suffix}}`.
If the string property has \*MaxLength" attribute, generated value will be limited accordingly.

```javascript
{
  rules: {
    faker: {
      Entity: {
        Property1: "faker.method",
        Property2: "{{faker.method}}, {{faker.method}}"
      }
    }
  }
}
```

For example:

```javascript
const options = {
  rules: {
    faker: {
      Product: {
        Name: "commerce.productName",
        Description: "{{lorem.paragraph}}, {{commerce.productDescription}}",
      },
    },
  },
};
```

### Predefined values

If for some entities values should be randomly selected from a predefined set, it can be configured in the following way:

```javascript
{
  rules: {
    predefined: {
      Entity: {
        Property: [Value1, Value2, Value3];
      }
    }
  }
}
```

For example:

```javascript
const options = {
  rules: {
    predefined: {
      Product: {
        Rating: [1, 2, 3],
      },
    },
  },
};

const generator = new ODataMockGenerator(metadata, options);
const mockData = generator.createMockData();
```

_Rating_ will be a random value but from [1,2,3] set

```javascript
{
  "Products": [{
    "ID": 9,
    "Name": "Name 1",
    "Description": "Description 1",
    "ReleaseDate": "/Date(967811009000)/",
    "DiscontinuedDate": "/Date(1114259009000)/",
    "Rating": 1
    ...
```

### Predefined values based on other values

Some values can be dependent on other values. This can be achieved in the following way:

```javascript
{
  rules: {
    predefined: {
      Entity: {
        Property1: [Value1, Value2, Value2],
        Property2: {
          reference: "Property1",
            values: [{
              key: Value1,
              value: "Description for value 1"
            },{
              key: Value2,
              value: "Description for value 2"
            }]
          }
        }
      }
  }
}
```

For example:

```javascript
const options = {
  rules: {
    predefined: {
      Product: {
        Rating: [1, 2, 3],
        Description: {
          reference: "Rating",
          values: [
            {
              key: 1,
              value: "Custom description for rating 1",
            },
          ],
        },
      },
    },
  },
};

const generator = new ODataMockGenerator(metadata, options);
const mockData = generator.createMockData();
```

Now if Rating = 1, Description will by "Custom...", not the generated one.
Not all dependent values has to be provided - if it is not found in _values_ array, it will be generated as usual.

### Reusing predefined values

It easier to keep predefined values in one place, as they might be used in several places.
It can be done with help of special _variables_ property and special $ref:... handling:

```javascript
{
  rules: {
    variables: {
      myValues: [value1, value2, value3]
    },
    predefined: {
      Entity: {
        Property1: "$ref:myValues",
        Property2: {
          reference: "Property1",
          values: [{
            key: "value1",
            value: "Text1"
          }, {
            key: "value2",
            value: "Text2"
          }]
        }
      }
    }
  }
}
```

For example

```javascript
{
  rules: {
    variables: {
      categoryIds: [1, 2, 3]
    },
    predefined: {
      Category: {
        ID: "$ref:categoryIds",
        Name: {
          reference: "ID",
          values: [{
            key: 1,
            value: "Category1"
          }, {
            key: 2,
            value: "Category2"
          }, {
            key: 3,
            value: "Category3"
          }]
        }
      }
    }
  }
}

const generator = new ODataMockGenerator(metadata, options)
const mockData = generator.createMockData();
```

_Name_ will be based on _ID_, which takes values from _categoryIds_ variable.

### Distinct values

Having predefined values for entities and their key properties, duplicated entries will be present,
as the generator always produces the number of entries specified by the _mockDataEntitySize_.  
To have only distinct values (based on all key properties):

```javascript
{
  rules: {
    "distinctValues": ["EnitytSet1", "EntitySet2"]
  }
}
```

For example

```javascript
{
  rules: {
    distinctValues: ["Categories"],
    variables: {
      categoryIds: [1, 2, 3]
    },
    predefined: {
      Category: {
        ID: "$ref:categoryIds",
        Name: {
          reference: "ID",
          values: [{
            key: 1,
            value: "Category1"
          }, {
            key: 2,
            value: "Category2"
          }, {
            key: 3,
            value: "Category3"
          }]
        }
      }
    }
  }
}

const generator = new ODataMockGenerator(metadata, options)
const mockData = generator.createMockData();
```

There will be max 3 entries for _Categories_ entity set.

Please check the [samples/node_usage.mjs](./samples/node_usage.mjs) to see an example with all options.

## Changelog

See CHANGELOG.md

## License

This plugin is licensed under the [MIT license](http://opensource.org/licenses/MIT).

## Author

Feel free to contact me:

- <wozjac@zoho.com> | <https://jacekw.dev>
- Twitter (<https://twitter.com/jacekwoz>)
- LinkedIn (<https://www.linkedin.com/in/jacek-wznk>)
