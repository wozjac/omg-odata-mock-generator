import { DOMParser } from "@xmldom/xmldom";

export function parseXML(xml) {
  const parsedXML = new DOMParser().parseFromString(xml, "text/xml");
  return parsedXML;
}
