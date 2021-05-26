export function findEntityTypes(metdataXMLDocument) {
  const result = {};
  const entityTypes = metdataXMLDocument.getElementsByTagName("EntityType");

  for (let i = 0; i < entityTypes.length; i++) {
    const entityTypeItem = entityTypes.item(i);

    result[entityTypeItem.getAttribute("Name")] = {
      "name": entityTypeItem.getAttribute("Name"),
      "properties": [],
      "keys": []
    };

    const properties = entityTypeItem.getElementsByTagName("Property");

    for (let i = 0; i < properties.length; i++) {
      const oProperty = properties.item(i);
      const type = oProperty.getAttribute("Type");

      result[entityTypeItem.getAttribute("Name")].properties.push({
        "schema": type.substring(0, type.lastIndexOf(".")),
        "type": type.substring(type.lastIndexOf(".") + 1),
        "name": oProperty.getAttribute("Name"),
        "precision": oProperty.getAttribute("Precision"),
        "scale": oProperty.getAttribute("Scale"),
        "maxLength": oProperty.getAttribute("MaxLength") ? Number.parseInt(oProperty.getAttribute("MaxLength")) : undefined
      });
    }

    const propertyRefs = entityTypeItem.getElementsByTagName("PropertyRef");

    for (let i = 0; i < propertyRefs.length; i++) {
      const propertyRefItem = propertyRefs.item(i);
      const propertyName = propertyRefItem.getAttribute("Name");
      result[entityTypeItem.getAttribute("Name")].keys.push(propertyName);
    }
  }

  return result;
}

export function findComplexTypes(metdataXMLDocument) {
  const result = {};
  const complexTypes = metdataXMLDocument.getElementsByTagName("ComplexType");

  for (let i = 0; i < complexTypes.length; i++) {
    const complexTypeItem = complexTypes.item(i);
    result[complexTypeItem.getAttribute("Name")] = {
      "name": complexTypeItem.getAttribute("Name"),
      "properties": []
    };

    const properties = complexTypeItem.getElementsByTagName("Property");

    for (let i = 0; i < properties.length; i++) {
      const propertyItem = properties.item(i);
      const type = propertyItem.getAttribute("Type");

      result[complexTypeItem.getAttribute("Name")].properties.push({
        "schema": type.substring(0, type.lastIndexOf(".")),
        "type": type.substring(type.lastIndexOf(".") + 1),
        "name": propertyItem.getAttribute("Name"),
        "precision": propertyItem.getAttribute("Precision"),
        "scale": propertyItem.getAttribute("Scale")
      });
    }
  }

  return result;
}

export function findEntitySets(metdataXMLDocument) {
  const result = {};
  const principals = metdataXMLDocument.getElementsByTagName("Principal");
  const dependents = metdataXMLDocument.getElementsByTagName("Dependent");
  const entitySets = metdataXMLDocument.getElementsByTagName("EntitySet");
  const entityTypes = metdataXMLDocument.getElementsByTagName("EntityType");

  for (let i = 0; i < entitySets.length; i++) {
    const entitySet = entitySets.item(i);
    // split the namespace and the name of the entity type (namespace could have dots inside)
    const entityTypeParts = /((.*)\.)?(.*)/.exec(entitySet.getAttribute("EntityType"));

    result[entitySet.getAttribute("Name")] = {
      "name": entitySet.getAttribute("Name"),
      "schema": entityTypeParts[2],
      "type": entityTypeParts[3],
      "keys": [],
      "keysType": {},
      "navprops": {}
    };
  }

  // helper function to find the entity set and property reference
  // for the given role name
  const fnResolveNavProp = function(sRole, aAssociation, aAssociationSet, bFrom) {
    let entitySet,
      multiplicity;

    for (let i = 0; i < aAssociationSet.length; i++) {
      const element = aAssociationSet[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        const childElement = element.childNodes[j];

        if (childElement.tagName === "End" && childElement.getAttribute("Role") === sRole) {
          entitySet = childElement.getAttribute("EntitySet");
          break;
        }
      }
    }

    for (let i = 0; i < aAssociation.length; i++) {
      const element = aAssociation[i];

      for (let j = 0; j < element.childNodes.length; j++) {
        const childElement = element.childNodes[j];

        if (childElement.tagName === "End" && childElement.getAttribute("Role") === sRole) {
          multiplicity = childElement.getAttribute("Multiplicity");
          break;
        }
      }
    }

    const foundPropertyRefs = [];
    const constraints = [];

    for (let i = 0; i < aAssociation.length; i++) {
      const association = aAssociation[i];

      for (let j = 0; j < association.childNodes.length; j++) {
        if (association.childNodes[j].tagName === "ReferentialConstraint") {
          constraints.push(association.childNodes[j]);
        }
      }
    }

    const foundConstraints = [];

    for (let i = 0; i < constraints.length; i++) {
      const oConstraint = constraints[i];
      const children = oConstraint.childNodes;

      for (let j = 0; j < children.length; j++) {
        const child = children[j];

        if (child.getAttribute && child.getAttribute("Role") === sRole) {
          foundConstraints.push(child);
        }
      }
    }

    if (foundConstraints && foundConstraints.length > 0) {
      const propertyRefs = foundConstraints[0].childNodes;

      for (let i = 0; i < propertyRefs.length; i++) {
        const propertyRef = propertyRefs[i];

        if (propertyRef.tagName === "PropertyRef") {
          foundPropertyRefs.push(propertyRef.getAttribute("Name"));
        }
      }
    } else {
      const principalDeps = (bFrom) ? principals : dependents;

      for (let i = 0; i < principalDeps.length; i++) {
        const oPrinDep = principalDeps.item(i);

        if (sRole === oPrinDep.getAttribute("Role")) {
          const children = oPrinDep.childNodes;

          for (let k = 0; k < children.length; k++) {
            const propertyRef = children[k];

            if (propertyRef.name === "PropertyRef") {
              foundPropertyRefs.push(propertyRef.getAttribute("Name"));
            }
          }

          return false;
        }
      }
    }

    return {
      "role": sRole,
      "entitySet": entitySet,
      "propRef": foundPropertyRefs,
      "multiplicity": multiplicity
    };
  };

  // find the keys and the navigation properties of the entity types
  for (const entitySetName in result) {
    const entitySet = result[entitySetName];
    // find the keys
    let foundEntityType;

    for (let t = 0; t < entityTypes.length; t++) {
      const entityType = entityTypes.item(t);

      if (entityType.getAttribute("Name") === entitySet.type) {
        foundEntityType = entityType;
        break;
      }
    }

    const keys = foundEntityType.getElementsByTagName("PropertyRef");

    for (let i = 0; i < keys.length; i++) {
      const propertyRefItem = keys.item(i);
      const keyName = propertyRefItem.getAttribute("Name");
      entitySet.keys.push(keyName);
      const properties = foundEntityType.getElementsByTagName("Property");

      for (let m = 0; m < properties.length; m++) {
        const propertyItem = properties.item(m);

        if (propertyItem.getAttribute("Name") === keyName) {
          entitySet.keysType[keyName] = propertyItem.getAttribute("Type");
        }
      }
    }

    // resolve the navigation properties
    let navigationProperties;

    for (let i = 0; i < entityTypes.length; i++) {
      const entityTypeItem = entityTypes.item(i);

      if (entityTypeItem.getAttribute("Name") === entitySet.type) {
        navigationProperties = entityTypeItem.getElementsByTagName("NavigationProperty");
      }
    }

    for (let w = 0; w < navigationProperties.length; w++) {
      const navigationProperty = navigationProperties.item(w);
      const relationshipParts = navigationProperty.getAttribute("Relationship").split(".");
      const associationsSet = metdataXMLDocument.getElementsByTagName("AssociationSet");
      const foundAssociationSet = [];

      for (let f = 0; f < associationsSet.length; f++) {
        const associationSetItem = associationsSet.item(f);

        if (associationSetItem.getAttribute("Association") === relationshipParts.join(".")) {
          foundAssociationSet.push(associationSetItem);
        }
      }

      const relationshipName = relationshipParts.pop();
      const foundAssociations = [];
      const associations = metdataXMLDocument.getElementsByTagName("Association");

      for (let k = 0; k < associations.length; k++) {
        const associationItem = associations.item(k);

        if (associationItem.getAttribute("Name") === relationshipName) {
          foundAssociations.push(associationItem);
        }
      }

      entitySet.navprops[navigationProperty.getAttribute("Name")] = {
        "name": navigationProperty.getAttribute("Name"),
        "from": fnResolveNavProp(navigationProperty.getAttribute("FromRole"), foundAssociations, foundAssociationSet, true),
        "to": fnResolveNavProp(navigationProperty.getAttribute("ToRole"), foundAssociations, foundAssociationSet, false)
      };
    }
  }

  return result;
}