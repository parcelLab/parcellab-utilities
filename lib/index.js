"use strict";

var _logger = require("./logger");
var _geo = require("./geo");
function cov_2dldonyocw() {
  var path = "/Users/andres.monge/workspace/parcellab-utilities/src/index.js";
  var hash = "42381ea862f31126e2e438af2b7b844d52062405";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/andres.monge/workspace/parcellab-utilities/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 9,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42381ea862f31126e2e438af2b7b844d52062405"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dldonyocw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2dldonyocw();
cov_2dldonyocw().s[0]++;
module.exports = {
  logToConsole: _logger.logToConsole,
  Logger: _logger.Logger,
  resolveCountryToISO2: _geo.resolveCountryToISO2,
  resolveCountryToISO3: _geo.resolveCountryToISO3
};