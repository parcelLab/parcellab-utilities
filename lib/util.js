"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFalse = isFalse;
exports.isProductionEnv = isProductionEnv;
exports.isTrue = isTrue;
/**
 * check environment variables that indicate production use
 */
function isProductionEnv() {
  // this is the standard var that should be used
  if (isTrue(process.env.PRODUCTION)) return true;
  if (isFalse(process.env.PRODUCTION)) return false;

  // maybe
  //if(process.env.NODE_ENV )

  // also assume production mode if none of the common dev vars are set
  if (!isTrue(process.env.DEV) && !isTrue(process.env.DEVELOPMENT) && !isTrue(process.env.DEBUG) && !isTrue(process.env.TESTMODE)) {
    return true;
  }
  return false;
}

/**
 * truth checker for strings and more
 * @param {any} v
 */
function isTrue(v) {
  if (v === true) {
    return true;
  }
  if (typeof v === "string") {
    switch (v.toLowerCase()) {
      case "true":
      case "yes":
      case "on":
      case "enable":
      case "enabled":
      case "1":
        return true;
    }
  }
  if (typeof v === "number") {
    return v > 0;
  }
  return false;
}
function isFalse(v) {
  if (v === false) return true;
  if (typeof v === "string") {
    switch (v.toLowerCase()) {
      case "false":
      case "no":
      case "off":
      case "disable":
      case "disabled":
      case "0":
        return true;
    }
  }
  if (typeof v === "number") {
    return v <= 0;
  }
  return false;
}
//# sourceMappingURL=util.js.map