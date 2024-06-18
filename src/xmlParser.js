import { DOMParser } from "xmldom";

export function parseXML(xml) {
  let hasErrors = false;

  const parsedXML = new DOMParser({
    errorHandler: {
      error: () => {
        hasErrors = true;
      },
    },
  }).parseFromString(xml);

  if (hasErrors) {
    throw new Error("Invalid XML");
  }

  return parsedXML;
}
