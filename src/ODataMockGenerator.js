//! Copyright (c) 2021 Jacek Woźniczak

//! Permission is hereby granted, free of charge, to any person obtaining a copy
//! of this software and associated documentation files (the "Software"), to deal
//! in the Software without restriction, including without limitation the rights
//! to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//! copies of the Software, and to permit persons to whom the Software is
//! furnished to do so, subject to the following conditions:

//! The above copyright notice and this permission notice shall be included in all
//! copies or substantial portions of the Software.

//! THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//! IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//! FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//! AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//! LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//! OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//! SOFTWARE.

//! This file has been modified by Q-Prod Jacek Woźniczak to add additional features.
//! The original version is https://github.com/SAP/openui5/blob/master/src/sap.ui.core/src/sap/ui/core/util/MockServer.js
//! with the license:
//! OpenUI5
//! (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
//! Licensed under the Apache License, Version 2.0 - see https://github.com/SAP/openui5/blob/master/LICENSE.txt.

import { faker } from "@faker-js/faker";
import { parseXML } from "./xmlParser.js";
import { DataGenerator } from "./DataGenerator.js";
import * as metadataExtract from "./metadataExtract.js";

/**
 * OData Mock Data Generator
 *
 */
export class ODataMockGenerator {
  /**
   * @constructor
   * @param {string} metadata OData metadata XML
   * @param {Object} [options={}] Generation options and rules
   * @param {number} [options.defaultLengthOfEntitySets=30] Number of entities to generate for each entity set
   * @param {string} [options.mockDataRootURI=""] Root URI which prefixes __metadata.uri property in the generated entities
   * @param {Object} [options.rules={}] Additional rules
   * @param {string[]} [options.rules.skipMockGeneration=[]] Do not generate data for the given entity sets
   * @param {string[]} [options.rules.distinctValues=[]] Generate only distinct entries (based on the key properties) for the given entity sets
   * @param {Object} [options.rules.predefined={}] Predefined values for the given entities, see README
   * @param {Object} [options.rules.variables={}] Variables to use in "predefined" rules, see README
   * @param {Object} [options.rules.faker={}] Faker.js methods used to generate data for given properties, see README
   * @param {Object} [options.rules.lengthOf={}] Number of entities to generate for given entity sets, see README
   */
  constructor(metadata, options = {}) {
    if (!metadata) {
      throw new Error("metadata not provided");
    }

    if (!options.rules) {
      options.rules = {};
    }

    this._predefinedValuesConfig = options.rules.predefined || {};
    this._skipMockGeneration = options.rules.skipMockGeneration || [];
    this._distinctValues = options.rules.distinctValues || [];
    this._variables = options.rules.variables || {};
    this._fakerConfig = options.rules.faker || {};
    this._customNumberOfEntities = options.rules.lengthOf || {};
    this._numberOfEntities = options.defaultLengthOfEntitySets || 30;
    this._rootUri = options.mockDataRootURI || "";

    if (this._rootUri.substr(this._rootUri.length - 1) !== "/") {
      this._rootUri = `${this._rootUri}/`;
    }

    this._predefinedChosenValues = {};
    this._dataGenerator = new DataGenerator();

    this._relationships = options.rules.relationships || {};
    this._includeTypeAttribute =
      options.includeTypeAttribute !== undefined
        ? options.includeTypeAttribute
        : true;

    try {
      this._metdataXMLDocument = parseXML(metadata);
    } catch (error) {
      throw new Error(
        "Metadata XML parsing error - is the document correct? --> " + error
      );
    }
  }

  /**
   *
   * Generates relationships between entities mentioned in the configuration
   *
   * @param {Object} oMockData incoming data
   */
  _applyRelationships(oMockData) {
    console.log("_applyRelationships", this._relationships);
    for (const [entity, relations] of Object.entries(this._relationships)) {
      if (oMockData[entity]) {
        oMockData[entity].forEach((entityData) => {
          for (const [property, relation] of Object.entries(relations)) {
            const relatedData = oMockData[relation.reference];
            if (relatedData) {
              const relatedEntity =
                relatedData[Math.floor(Math.random() * relatedData.length)];
              entityData[property] = relatedEntity[relation.key];
            }
          }
        });
      }
    }
  }

  /**
   * Generates mock data based on the metadata and options passed to the constructor
   *
   * @returns {Object} Generated data in form { EntitySet1: [{ ..properties.. }], EntitySet2: [{ .. properties.. }] }
   */
  createMockData() {
    const entitySets = metadataExtract.findEntitySets(this._metdataXMLDocument);
    const entitySetNames = Object.keys(entitySets);

    //exclude adjustments
    this._skipMockGeneration.forEach((element) => {
      if (
        entitySetNames.find((name) => {
          return name === element;
        })
      ) {
        delete entitySets[element];
      }
    });

    this._mEntityTypes = metadataExtract.findEntityTypes(
      this._metdataXMLDocument
    );
    this._mComplexTypes = metadataExtract.findComplexTypes(
      this._metdataXMLDocument
    );
    this._generateMockdata(entitySets);

    return this._oMockdata;
  }

  _generateMockdata(mEntitySets) {
    const oMockData = {};
    const sRootUri = this._getRootUri();

    for (const sEntitySetName in mEntitySets) {
      const mEntitySet = {};
      const oEntitySet = mEntitySets[sEntitySetName];
      mEntitySet[oEntitySet.name] = oEntitySet;
      oMockData[sEntitySetName] =
        this._generateODataMockdataForEntitySet(mEntitySet)[sEntitySetName];
    }

    this._applyRelationships(oMockData);

    // changing the values if there is a referential constraint
    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      for (const navprop in oEntitySet.navprops) {
        const oNavProp = oEntitySet.navprops[navprop];
        let iPropRefLength;
        try {
          iPropRefLength = oNavProp.from.propRef.length;
        } catch (error) {
          console.log(error);
        }
        for (let j = 0; j < iPropRefLength; j++) {
          for (let i = 0; i < oMockData[sEntitySetName].length; i++) {
            // copy the value from the principle to the dependant;
            const oEntity = oMockData[sEntitySetName][i];

            if (
              this._predefinedValuesConfig[oNavProp.name] &&
              this._predefinedValuesConfig[oNavProp.name][
                oNavProp.to.propRef[j]
              ]
            ) {
              const chosenValues =
                this._predefinedChosenValues[oNavProp.name][
                  oNavProp.to.propRef[j]
                ];
              oEntity[oNavProp.from.propRef[j]] =
                chosenValues[Math.floor(Math.random() * chosenValues.length)];
            } else {
              try {
                oMockData[oNavProp.to.entitySet][i][oNavProp.to.propRef[j]] =
                  oEntity[oNavProp.from.propRef[j]];
                // eslint-disable-next-line no-unused-vars
              } catch (error) {
                throw new Error(
                  `Could not find a respective entry in ${oNavProp.to.entitySet} ` +
                    `to update its value from a navigation related property ${oNavProp.from.propRef} ` +
                    `in ${sEntitySetName}. Check it the target entity set generation is not limited or skipped`
                );
              }
            }
          }
        }
      }
    }

    // set URIs
    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      oMockData[sEntitySetName].forEach((oEntry) => {
        // add the metadata for the entry
        oEntry.__metadata = {
          uri:
            sRootUri +
            sEntitySetName +
            "(" +
            this._createKeysString(oEntitySet, oEntry) +
            ")",
          type: oEntitySet.schema + "." + oEntitySet.type,
        };
        // add the navigation properties
        if (this._includeTypeAttribute) {
          for (const sKey in oEntitySet.navprops) {
            oEntry[sKey] = {
              __deferred: {
                uri:
                  sRootUri +
                  sEntitySetName +
                  "(" +
                  this._createKeysString(oEntitySet, oEntry) +
                  ")/" +
                  sKey,
              },
            };
          }
        } else {
          // remove the type attribute
          delete oEntry.type;
        }
      });
    }

    this._oMockdata = oMockData;
  }

  _generateODataMockdataForEntitySet(mEntitySets) {
    const oMockData = {};

    for (const sEntitySetName in mEntitySets) {
      const oEntitySet = mEntitySets[sEntitySetName];
      oMockData[sEntitySetName] = this._generateDataFromEntitySet(oEntitySet);
    }

    return oMockData;
  }

  _generateDataFromEntitySet(oEntitySet) {
    const oEntityType = this._mEntityTypes[oEntitySet.type];
    let aMockedEntries = [];

    let numberOfEntities;

    if (this._customNumberOfEntities[oEntitySet.name]) {
      numberOfEntities = this._customNumberOfEntities[oEntitySet.name];
    } else {
      numberOfEntities = this._numberOfEntities;
    }

    for (let i = 0; i < numberOfEntities; i++) {
      aMockedEntries.push(this._generateDataFromEntity(oEntityType, i + 1));
    }

    if (this._distinctValues.includes(oEntitySet.name)) {
      aMockedEntries = this._removeDuplicates(aMockedEntries, oEntityType.keys);
    }

    return aMockedEntries;
  }

  _removeDuplicates(generatedData, keyFields) {
    const unique = [];
    const keys = "x".repeat(keyFields.length);
    let insert = true;

    generatedData.forEach((element) => {
      for (let i = 0; i < unique.length; i++) {
        let keyMatch = "";

        keyFields.forEach((key) => {
          if (unique[i][key] === element[key]) {
            keyMatch += "x";
          }
        });

        if (keyMatch === keys) {
          insert = false;
          break;
        }
      }

      if (insert) {
        unique.push(element);
      }

      insert = true;
    });

    return unique;
  }

  _generateDataFromEntity(oEntityType, iIndex) {
    const oEntity = {};

    if (!oEntityType) {
      return oEntity;
    }

    for (let i = 0; i < oEntityType.properties.length; i++) {
      const oProperty = oEntityType.properties[i];
      oEntity[oProperty.name] = this._generatePropertyValue(
        oProperty,
        iIndex,
        oEntityType,
        oEntity
      );
    }

    return oEntity;
  }

  _generatePropertyValue(property, iIndexParameter, entityType, entity) {
    //already created?
    if (entity[property.name]) {
      return entity[property.name];
    }

    //predefined?
    if (
      this._predefinedValuesConfig[entityType.name] &&
      this._predefinedValuesConfig[entityType.name][property.name]
    ) {
      if (!this._predefinedChosenValues[entityType.name]) {
        this._predefinedChosenValues[entityType.name] = {};
      }

      if (!this._predefinedChosenValues[entityType.name][property.name]) {
        this._predefinedChosenValues[entityType.name][property.name] = [];
      }

      const propertyConfig =
        this._predefinedValuesConfig[entityType.name][property.name];
      let chosenValue;

      if (Array.isArray(propertyConfig)) {
        //array of values
        chosenValue =
          propertyConfig[Math.floor(Math.random() * propertyConfig.length)];
        this._predefinedChosenValues[entityType.name][property.name].push(
          chosenValue
        );
        return chosenValue;
      } else if (
        typeof propertyConfig === "string" &&
        propertyConfig.indexOf("$ref") !== -1
      ) {
        const variableName = propertyConfig.split(":")[1];

        if (this._variables && this._variables[variableName]) {
          const variable = this._variables[variableName];

          if (Array.isArray(variable)) {
            chosenValue = variable[Math.floor(Math.random() * variable.length)];
            this._predefinedChosenValues[entityType.name][property.name].push(
              chosenValue
            );
            return chosenValue;
          } else {
            return variable;
          }
        } else {
          throw new Error(`
                    Variable $ { propertyConfig } not found `);
        }
      } else {
        //dependent?
        if (propertyConfig.reference) {
          if (entity[propertyConfig.reference]) {
            //already created - get its value
            const referencedValue = entity[propertyConfig.reference];
            //get assigned value
            if (propertyConfig.values) {
              for (const el of propertyConfig.values) {
                if (el.key && el.key === referencedValue) {
                  return el.value ? el.value : "missing value";
                }
              }
            }
          } else {
            //not yet
            //get missing property value
            for (const i in entityType.properties) {
              if (entityType.properties[i].name === propertyConfig.reference) {
                const emptyProperty = entityType.properties[i];
                entity[emptyProperty.name] = this._generatePropertyValue(
                  emptyProperty,
                  iIndexParameter,
                  entityType,
                  entity
                );
                //and run again for current
                return this._generatePropertyValue(
                  property,
                  iIndexParameter,
                  entityType,
                  entity
                );
              }
            }
          }
        }
      }
    }

    // faker?
    if (
      this._fakerConfig[entityType.name] &&
      this._fakerConfig[entityType.name][property.name]
    ) {
      const fakerCall = this._fakerConfig[entityType.name][property.name];
      let generatedValue;

      // Mustache template?
      try {
        if (fakerCall.indexOf("{{") !== -1) {
          generatedValue = faker.helpers.fake(fakerCall);
        } else {
          const fakerCallParts = fakerCall.split(".");
          generatedValue = faker[fakerCallParts[0]][fakerCallParts[1]].call();
        }

        if (property.maxLength) {
          generatedValue = generatedValue.substring(0, property.maxLength);
        }

        return generatedValue;
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        throw new Error(
          `faker.js call error, check the config for ${entityType.name}/${property.name}`
        );
      }
    }

    //standard way - random values
    let index = iIndexParameter;

    if (!index) {
      index =
        Math.floor(
          this._dataGenerator.getPseudoRandomNumber("String") * 10000
        ) + 101;
    }

    let value = this._dataGenerator.generateValueForODataProperty(
      property,
      index
    );

    if (value === null) {
      value = this._generateDataFromEntity(
        this._mComplexTypes[property.type],
        index
      );
    }

    return value;
  }

  _createKeysString(oEntitySet, oEntry) {
    // creates the key string for an entity
    let sKeys = "";
    if (oEntry) {
      oEntitySet.keys.forEach((sKey) => {
        if (sKeys) {
          sKeys += ",";
        }
        let oKeyValue = oEntry[sKey];
        if (oEntitySet.keysType[sKey] === "Edm.String") {
          oKeyValue = encodeURIComponent("'" + oKeyValue + "'");
        } else if (oEntitySet.keysType[sKey] === "Edm.DateTime") {
          oKeyValue = this._dataGenerator.getDateTime(oKeyValue);
          oKeyValue = encodeURIComponent(oKeyValue);
        } else if (oEntitySet.keysType[sKey] === "Edm.Guid") {
          oKeyValue = "guid'" + oKeyValue + "'";
        }
        if (oEntitySet.keys.length === 1) {
          sKeys += oKeyValue;
          return sKeys;
        }
        sKeys += sKey + "=" + oKeyValue;
      });
    }
    return sKeys;
  }

  _getRootUri() {
    let sUri = this._rootUri;
    sUri = sUri && /([^?#]*)([?#].*)?/.exec(sUri)[1]; // remove URL parameters or anchors
    return sUri;
  }
}
