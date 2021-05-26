export class DataGenerator {
  constructor() {
    this._randomSeed = {};
  }

  getPseudoRandomNumber(type) {
    //eslint-disable-next-line
    if (!this._randomSeed.hasOwnProperty(type)) {
      this._randomSeed[type] = 0;
    }
    this._randomSeed[type] = (this._randomSeed[type] + 11) * 25214903917 % 281474976710655;
    return this._randomSeed[type] / 281474976710655;
  }

  getDateTime(string) {
    if (!string) {
      return;
    }

    return "datetime'" + new Date(Number(string.replace("/Date(", "").replace(")/", ""))).toJSON().substring(0, 19) + "'";
  }

  generateValueForODataProperty(property, iIndex) {
    switch (property.type) {
      case "String": {
        let value = property.name + " " + iIndex;

        if (property.maxLength) {
          value = property.name.substring(0, property.maxLength - iIndex.toString().length - 1) + " " + iIndex;
        }

        return value;
      }
      case "DateTime": {
        const date = new Date();
        date.setFullYear(2000 + Math.floor(this.getPseudoRandomNumber("DateTime") * 20));
        date.setDate(Math.floor(this.getPseudoRandomNumber("DateTime") * 30));
        date.setMonth(Math.floor(this.getPseudoRandomNumber("DateTime") * 12));
        date.setMilliseconds(0);
        return "/Date(" + date.getTime() + ")/";
      }
      case "Int16":
      case "Int32":
      case "Int64":
        return Math.floor(this.getPseudoRandomNumber("Int") * 10000);
      case "Decimal":
        return Math.floor(this.getPseudoRandomNumber("Decimal") * 1000000) / 100;
      case "Boolean":
        return this.getPseudoRandomNumber("Boolean") < 0.5;
      case "Byte":
        return Math.floor(this.getPseudoRandomNumber("Byte") * 10);
      case "Double":
        return this.getPseudoRandomNumber("Double") * 10;
      case "Single":
        return this.getPseudoRandomNumber("Single") * 1000000000;
      case "SByte":
        return Math.floor(this.getPseudoRandomNumber("SByte") * 10);
      case "Time":
        // ODataModel expects ISO8601 duration format
        return "PT" + Math.floor(this.getPseudoRandomNumber("Time") * 23) + "H" + Math.floor(this.getPseudoRandomNumber("Time") * 59) + "M" + Math.floor(this.getPseudoRandomNumber("Time") * 59) + "S";
      case "Guid":
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          const r = this.getPseudoRandomNumber("Guid") * 16 | 0,
            v = c === "x" ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        }.bind(this));
      case "Binary": {
        const nMask = Math.floor(-2147483648 + this.getPseudoRandomNumber("Binary") * 4294967295);
        let sMask = "";
        /*eslint-disable */
        for (let nFlag = 0, nShifted = nMask; nFlag < 32; nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1)
        ;

        /*eslint-enable*/
        return sMask;
      }
      case "DateTimeOffset": {
        const date = new Date();
        date.setFullYear(2000 + Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 20));
        date.setDate(Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 30));
        date.setMonth(Math.floor(this.getPseudoRandomNumber("DateTimeOffset") * 12));
        date.setMilliseconds(0);
        return "/Date(" + date.getTime() + "+0000)/";
      }
      default:
        return null;
    }
  }
}