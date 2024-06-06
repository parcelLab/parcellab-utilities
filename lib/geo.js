"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveCountryToISO2 = resolveCountryToISO2;
exports.resolveCountryToISO3 = resolveCountryToISO3;
var Country = _interopRequireWildcard(require("countryjs"));
var _lodash = require("lodash");
var _logger = require("./logger");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function cov_n0kbs44p1() {
  var path = "/Users/andres.monge/workspace/parcellab-utilities/src/geo.js";
  var hash = "4249890d96e1e6ac7d7927b1181e767b7b7cf91b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/andres.monge/workspace/parcellab-utilities/src/geo.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 65
        }
      },
      "1": {
        start: {
          line: 13,
          column: 53
        },
        end: {
          line: 13,
          column: 65
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 77
        }
      },
      "3": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "4": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "5": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 73
        }
      },
      "6": {
        start: {
          line: 21,
          column: 11
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "7": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 65
        }
      },
      "8": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "9": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "10": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "11": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 44
        }
      },
      "12": {
        start: {
          line: 35,
          column: 11
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "13": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 60
        }
      },
      "14": {
        start: {
          line: 36,
          column: 24
        },
        end: {
          line: 36,
          column: 60
        }
      },
      "15": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 60
        }
      },
      "16": {
        start: {
          line: 37,
          column: 24
        },
        end: {
          line: 37,
          column: 60
        }
      },
      "17": {
        start: {
          line: 38,
          column: 13
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "18": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 44
        }
      },
      "19": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 22
        }
      },
      "20": {
        start: {
          line: 47,
          column: 10
        },
        end: {
          line: 47,
          column: 22
        }
      },
      "21": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 48,
          column: 36
        }
      },
      "22": {
        start: {
          line: 48,
          column: 20
        },
        end: {
          line: 48,
          column: 36
        }
      },
      "23": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 18
        }
      },
      "24": {
        start: {
          line: 58,
          column: 2
        },
        end: {
          line: 58,
          column: 45
        }
      },
      "25": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 67,
          column: 45
        }
      }
    },
    fnMap: {
      "0": {
        name: "resolveCountryToISO",
        decl: {
          start: {
            line: 12,
            column: 9
          },
          end: {
            line: 12,
            column: 28
          }
        },
        loc: {
          start: {
            line: 12,
            column: 50
          },
          end: {
            line: 50,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "resolveCountryToISO2",
        decl: {
          start: {
            line: 57,
            column: 9
          },
          end: {
            line: 57,
            column: 29
          }
        },
        loc: {
          start: {
            line: 57,
            column: 43
          },
          end: {
            line: 59,
            column: 1
          }
        },
        line: 57
      },
      "2": {
        name: "resolveCountryToISO3",
        decl: {
          start: {
            line: 66,
            column: 9
          },
          end: {
            line: 66,
            column: 29
          }
        },
        loc: {
          start: {
            line: 66,
            column: 43
          },
          end: {
            line: 68,
            column: 1
          }
        },
        line: 66
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 65
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 13,
            column: 65
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 13
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 13,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 6
          },
          end: {
            line: 13,
            column: 18
          }
        }, {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 51
          }
        }],
        line: 13
      },
      "2": {
        loc: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 77
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 15,
            column: 45
          },
          end: {
            line: 15,
            column: 63
          }
        }, {
          start: {
            line: 15,
            column: 66
          },
          end: {
            line: 15,
            column: 77
          }
        }],
        line: 15
      },
      "3": {
        loc: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        }, {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 25,
            column: 5
          }
        }],
        line: 19
      },
      "4": {
        loc: {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 20,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 20,
            column: 42
          },
          end: {
            line: 20,
            column: 58
          }
        }, {
          start: {
            line: 20,
            column: 61
          },
          end: {
            line: 20,
            column: 63
          }
        }],
        line: 20
      },
      "5": {
        loc: {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 25,
            column: 5
          }
        }, {
          start: {
            line: 23,
            column: 11
          },
          end: {
            line: 25,
            column: 5
          }
        }],
        line: 21
      },
      "6": {
        loc: {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 42
          },
          end: {
            line: 22,
            column: 58
          }
        }, {
          start: {
            line: 22,
            column: 61
          },
          end: {
            line: 22,
            column: 63
          }
        }],
        line: 22
      },
      "7": {
        loc: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 28
      },
      "8": {
        loc: {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 10
          }
        }, {
          start: {
            line: 28,
            column: 14
          },
          end: {
            line: 28,
            column: 26
          }
        }],
        line: 28
      },
      "9": {
        loc: {
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 39,
            column: 44
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 30,
            column: 6
          },
          end: {
            line: 39,
            column: 44
          }
        }, {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 39,
            column: 44
          }
        }],
        line: 30
      },
      "10": {
        loc: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 32,
            column: 38
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 59
          }
        }, {
          start: {
            line: 32,
            column: 8
          },
          end: {
            line: 32,
            column: 38
          }
        }],
        line: 31
      },
      "11": {
        loc: {
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 39,
            column: 44
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 11
          },
          end: {
            line: 39,
            column: 44
          }
        }, {
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 39,
            column: 44
          }
        }],
        line: 35
      },
      "12": {
        loc: {
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 36,
            column: 60
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 8
          },
          end: {
            line: 36,
            column: 60
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 36
      },
      "13": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 37,
            column: 60
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 37,
            column: 60
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 37
      },
      "14": {
        loc: {
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 39,
            column: 44
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 13
          },
          end: {
            line: 39,
            column: 44
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 38
      },
      "15": {
        loc: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 22
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 47,
            column: 22
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 47
      },
      "16": {
        loc: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 36
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 36
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 48
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4249890d96e1e6ac7d7927b1181e767b7b7cf91b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_n0kbs44p1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_n0kbs44p1();
/**
 * takes unidentified country info and tries to get the ISO2/ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @param  {integer} digits     2 or 3 digit response
 * @return {string}             ISO2/ISO3 code
 */
function resolveCountryToISO(countryInfo, digits) {
  cov_n0kbs44p1().f[0]++;
  cov_n0kbs44p1().s[0]++;
  if ((cov_n0kbs44p1().b[1][0]++, !countryInfo) || (cov_n0kbs44p1().b[1][1]++, [2, 3].indexOf(digits) === -1)) {
    cov_n0kbs44p1().b[0][0]++;
    cov_n0kbs44p1().s[1]++;
    return null;
  } else {
    cov_n0kbs44p1().b[0][1]++;
  }
  var ci = (cov_n0kbs44p1().s[2]++, typeof countryInfo.trim === "function" ? (cov_n0kbs44p1().b[2][0]++, countryInfo.trim()) : (cov_n0kbs44p1().b[2][1]++, countryInfo));
  var c;
  cov_n0kbs44p1().s[3]++;
  try {
    cov_n0kbs44p1().s[4]++;
    if (ci.length === 3) {
      cov_n0kbs44p1().b[3][0]++;
      cov_n0kbs44p1().s[5]++;
      c = Country.ISOcodes((0, _lodash.isString)(ci) ? (cov_n0kbs44p1().b[4][0]++, ci.toUpperCase()) : (cov_n0kbs44p1().b[4][1]++, ci), "ISO3");
    } else {
      cov_n0kbs44p1().b[3][1]++;
      cov_n0kbs44p1().s[6]++;
      if (ci.length === 2) {
        cov_n0kbs44p1().b[5][0]++;
        cov_n0kbs44p1().s[7]++;
        c = Country.ISOcodes((0, _lodash.isString)(ci) ? (cov_n0kbs44p1().b[6][0]++, ci.toUpperCase()) : (cov_n0kbs44p1().b[6][1]++, ci));
      } else {
        cov_n0kbs44p1().b[5][1]++;
        cov_n0kbs44p1().s[8]++;
        c = Country.ISOcodes(ci, "name");
      }
    }

    // check for special cases
    cov_n0kbs44p1().s[9]++;
    if ((cov_n0kbs44p1().b[8][0]++, !c) && (cov_n0kbs44p1().b[8][1]++, (0, _lodash.isString)(ci))) {
      cov_n0kbs44p1().b[7][0]++;
      cov_n0kbs44p1().s[10]++;
      // make it great again
      if ((cov_n0kbs44p1().b[10][0]++, ci.toUpperCase() === "THE UNITED STATES OF AMERICA") || (cov_n0kbs44p1().b[10][1]++, ci.toUpperCase() === "AMERICA")) {
        cov_n0kbs44p1().b[9][0]++;
        cov_n0kbs44p1().s[11]++;
        c = Country.ISOcodes("USA", "ISO3");
      } else {
        cov_n0kbs44p1().b[9][1]++;
        cov_n0kbs44p1().s[12]++;
        if (ci.length === 1) {
          cov_n0kbs44p1().b[11][0]++;
          cov_n0kbs44p1().s[13]++;
          if (ci === "D") {
            cov_n0kbs44p1().b[12][0]++;
            cov_n0kbs44p1().s[14]++;
            c = Country.ISOcodes("DEU", "ISO3");
          } else {
            cov_n0kbs44p1().b[12][1]++;
          }
          cov_n0kbs44p1().s[15]++;
          if (ci === "A") {
            cov_n0kbs44p1().b[13][0]++;
            cov_n0kbs44p1().s[16]++;
            c = Country.ISOcodes("AUT", "ISO3");
          } else {
            cov_n0kbs44p1().b[13][1]++;
          }
        } else {
          cov_n0kbs44p1().b[11][1]++;
          cov_n0kbs44p1().s[17]++;
          if (ci.toUpperCase() === "REPUBLIK BULGARIEN") {
            cov_n0kbs44p1().b[14][0]++;
            cov_n0kbs44p1().s[18]++;
            c = Country.ISOcodes("BGR", "ISO3");
          } else {
            cov_n0kbs44p1().b[14][1]++;
          }
        }
      }
    } else {
      cov_n0kbs44p1().b[7][1]++;
    }
  } catch (e) {
    // actually could not find a way to make it throw...
    /* istanbul ignore next */
    _logger.logger.warn("caught exception", e, "resolveCountryToISO");
  }
  cov_n0kbs44p1().s[19]++;
  if (!c) {
    cov_n0kbs44p1().b[15][0]++;
    cov_n0kbs44p1().s[20]++;
    return null;
  } else {
    cov_n0kbs44p1().b[15][1]++;
  }
  cov_n0kbs44p1().s[21]++;
  if (digits === 2) {
    cov_n0kbs44p1().b[16][0]++;
    cov_n0kbs44p1().s[22]++;
    return c.alpha2;
  } else {
    cov_n0kbs44p1().b[16][1]++;
  }
  cov_n0kbs44p1().s[23]++;
  return c.alpha3;
}

/**
 * takes unidentified country info and tries to get the ISO2 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO2 code
 */
function resolveCountryToISO2(countryInfo) {
  cov_n0kbs44p1().f[1]++;
  cov_n0kbs44p1().s[24]++;
  return resolveCountryToISO(countryInfo, 2);
}

/**
 * takes unidentified country info and tries to get the ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO3 code
 */
function resolveCountryToISO3(countryInfo) {
  cov_n0kbs44p1().f[2]++;
  cov_n0kbs44p1().s[25]++;
  return resolveCountryToISO(countryInfo, 3);
}