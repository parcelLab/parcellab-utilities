"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;
exports.logToConsole = logToConsole;
var _util = require("./util");
function cov_2tkpo65ys() {
  var path = "/Users/andres.monge/workspace/parcellab-utilities/src/logger.js";
  var hash = "805cf7227c393446c4cf9e0234bd65732d39a8ad";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/andres.monge/workspace/parcellab-utilities/src/logger.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 11
        },
        end: {
          line: 1,
          column: 24
        }
      },
      "1": {
        start: {
          line: 2,
          column: 29
        },
        end: {
          line: 2,
          column: 46
        }
      },
      "2": {
        start: {
          line: 3,
          column: 17
        },
        end: {
          line: 3,
          column: 36
        }
      },
      "3": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 38
        }
      },
      "4": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 6,
          column: 32
        }
      },
      "5": {
        start: {
          line: 10,
          column: 15
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "6": {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 28,
          column: 73
        }
      },
      "7": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 39
        }
      },
      "8": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 61
        }
      },
      "9": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 58
        }
      },
      "10": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 57
        }
      },
      "11": {
        start: {
          line: 46,
          column: 4
        },
        end: {
          line: 46,
          column: 57
        }
      },
      "12": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 58
        }
      },
      "13": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 58
        }
      },
      "14": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 60,
          column: 23
        }
      },
      "15": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 61,
          column: 43
        }
      },
      "16": {
        start: {
          line: 64,
          column: 22
        },
        end: {
          line: 64,
          column: 34
        }
      },
      "17": {
        start: {
          line: 66,
          column: 0
        },
        end: {
          line: 68,
          column: 2
        }
      },
      "18": {
        start: {
          line: 67,
          column: 2
        },
        end: {
          line: 67,
          column: 28
        }
      },
      "19": {
        start: {
          line: 69,
          column: 0
        },
        end: {
          line: 71,
          column: 2
        }
      },
      "20": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 70,
          column: 23
        }
      },
      "21": {
        start: {
          line: 73,
          column: 15
        },
        end: {
          line: 100,
          column: 1
        }
      },
      "22": {
        start: {
          line: 102,
          column: 18
        },
        end: {
          line: 115,
          column: 1
        }
      },
      "23": {
        start: {
          line: 118,
          column: 2
        },
        end: {
          line: 132,
          column: 3
        }
      },
      "24": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 123,
          column: 5
        }
      },
      "25": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 120,
          column: 32
        }
      },
      "26": {
        start: {
          line: 122,
          column: 6
        },
        end: {
          line: 122,
          column: 41
        }
      },
      "27": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 130,
          column: 6
        }
      },
      "28": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 40
        }
      },
      "29": {
        start: {
          line: 133,
          column: 2
        },
        end: {
          line: 133,
          column: 13
        }
      },
      "30": {
        start: {
          line: 136,
          column: 2
        },
        end: {
          line: 136,
          column: 41
        }
      },
      "31": {
        start: {
          line: 136,
          column: 30
        },
        end: {
          line: 136,
          column: 41
        }
      },
      "32": {
        start: {
          line: 137,
          column: 2
        },
        end: {
          line: 138,
          column: 65
        }
      },
      "33": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 65
        }
      },
      "34": {
        start: {
          line: 139,
          column: 2
        },
        end: {
          line: 139,
          column: 46
        }
      },
      "35": {
        start: {
          line: 143,
          column: 0
        },
        end: {
          line: 168,
          column: 2
        }
      },
      "36": {
        start: {
          line: 144,
          column: 16
        },
        end: {
          line: 147,
          column: 3
        }
      },
      "37": {
        start: {
          line: 148,
          column: 16
        },
        end: {
          line: 151,
          column: 3
        }
      },
      "38": {
        start: {
          line: 152,
          column: 2
        },
        end: {
          line: 152,
          column: 32
        }
      },
      "39": {
        start: {
          line: 154,
          column: 19
        },
        end: {
          line: 154,
          column: 39
        }
      },
      "40": {
        start: {
          line: 160,
          column: 2
        },
        end: {
          line: 160,
          column: 33
        }
      },
      "41": {
        start: {
          line: 161,
          column: 2
        },
        end: {
          line: 166,
          column: 4
        }
      },
      "42": {
        start: {
          line: 171,
          column: 2
        },
        end: {
          line: 171,
          column: 50
        }
      },
      "43": {
        start: {
          line: 171,
          column: 38
        },
        end: {
          line: 171,
          column: 50
        }
      },
      "44": {
        start: {
          line: 172,
          column: 2
        },
        end: {
          line: 172,
          column: 54
        }
      },
      "45": {
        start: {
          line: 173,
          column: 2
        },
        end: {
          line: 173,
          column: 65
        }
      },
      "46": {
        start: {
          line: 174,
          column: 2
        },
        end: {
          line: 174,
          column: 15
        }
      },
      "47": {
        start: {
          line: 178,
          column: 2
        },
        end: {
          line: 181,
          column: 4
        }
      },
      "48": {
        start: {
          line: 185,
          column: 2
        },
        end: {
          line: 185,
          column: 28
        }
      },
      "49": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 194,
          column: 9
        }
      },
      "50": {
        start: {
          line: 196,
          column: 2
        },
        end: {
          line: 196,
          column: 18
        }
      },
      "51": {
        start: {
          line: 199,
          column: 2
        },
        end: {
          line: 199,
          column: 19
        }
      },
      "52": {
        start: {
          line: 200,
          column: 2
        },
        end: {
          line: 202,
          column: 3
        }
      },
      "53": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 55
        }
      },
      "54": {
        start: {
          line: 213,
          column: 2
        },
        end: {
          line: 213,
          column: 28
        }
      },
      "55": {
        start: {
          line: 214,
          column: 2
        },
        end: {
          line: 214,
          column: 31
        }
      },
      "56": {
        start: {
          line: 214,
          column: 24
        },
        end: {
          line: 214,
          column: 31
        }
      },
      "57": {
        start: {
          line: 215,
          column: 2
        },
        end: {
          line: 215,
          column: 31
        }
      },
      "58": {
        start: {
          line: 215,
          column: 24
        },
        end: {
          line: 215,
          column: 31
        }
      },
      "59": {
        start: {
          line: 216,
          column: 2
        },
        end: {
          line: 216,
          column: 29
        }
      },
      "60": {
        start: {
          line: 216,
          column: 22
        },
        end: {
          line: 216,
          column: 29
        }
      },
      "61": {
        start: {
          line: 218,
          column: 15
        },
        end: {
          line: 220,
          column: 3
        }
      },
      "62": {
        start: {
          line: 221,
          column: 2
        },
        end: {
          line: 221,
          column: 51
        }
      },
      "63": {
        start: {
          line: 221,
          column: 15
        },
        end: {
          line: 221,
          column: 51
        }
      },
      "64": {
        start: {
          line: 223,
          column: 2
        },
        end: {
          line: 223,
          column: 59
        }
      },
      "65": {
        start: {
          line: 223,
          column: 26
        },
        end: {
          line: 223,
          column: 59
        }
      },
      "66": {
        start: {
          line: 227,
          column: 16
        },
        end: {
          line: 227,
          column: 41
        }
      },
      "67": {
        start: {
          line: 228,
          column: 2
        },
        end: {
          line: 228,
          column: 56
        }
      },
      "68": {
        start: {
          line: 228,
          column: 25
        },
        end: {
          line: 228,
          column: 56
        }
      },
      "69": {
        start: {
          line: 230,
          column: 2
        },
        end: {
          line: 264,
          column: 3
        }
      },
      "70": {
        start: {
          line: 231,
          column: 4
        },
        end: {
          line: 231,
          column: 57
        }
      },
      "71": {
        start: {
          line: 231,
          column: 36
        },
        end: {
          line: 231,
          column: 57
        }
      },
      "72": {
        start: {
          line: 234,
          column: 22
        },
        end: {
          line: 237,
          column: 5
        }
      },
      "73": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 238,
          column: 61
        }
      },
      "74": {
        start: {
          line: 238,
          column: 24
        },
        end: {
          line: 238,
          column: 61
        }
      },
      "75": {
        start: {
          line: 239,
          column: 4
        },
        end: {
          line: 239,
          column: 64
        }
      },
      "76": {
        start: {
          line: 239,
          column: 25
        },
        end: {
          line: 239,
          column: 64
        }
      },
      "77": {
        start: {
          line: 244,
          column: 6
        },
        end: {
          line: 244,
          column: 70
        }
      },
      "78": {
        start: {
          line: 246,
          column: 4
        },
        end: {
          line: 263,
          column: 5
        }
      },
      "79": {
        start: {
          line: 247,
          column: 6
        },
        end: {
          line: 247,
          column: 64
        }
      },
      "80": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 262,
          column: 8
        }
      },
      "81": {
        start: {
          line: 266,
          column: 2
        },
        end: {
          line: 268,
          column: 3
        }
      },
      "82": {
        start: {
          line: 267,
          column: 4
        },
        end: {
          line: 267,
          column: 55
        }
      },
      "83": {
        start: {
          line: 272,
          column: 21
        },
        end: {
          line: 272,
          column: 43
        }
      },
      "84": {
        start: {
          line: 273,
          column: 19
        },
        end: {
          line: 273,
          column: 74
        }
      },
      "85": {
        start: {
          line: 274,
          column: 24
        },
        end: {
          line: 276,
          column: 15
        }
      },
      "86": {
        start: {
          line: 278,
          column: 26
        },
        end: {
          line: 280,
          column: 15
        }
      },
      "87": {
        start: {
          line: 282,
          column: 2
        },
        end: {
          line: 285,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        loc: {
          start: {
            line: 32,
            column: 29
          },
          end: {
            line: 34,
            column: 3
          }
        },
        line: 32
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 31
          },
          end: {
            line: 38,
            column: 3
          }
        },
        line: 36
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 39
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 27
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 42
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 45,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        loc: {
          start: {
            line: 45,
            column: 27
          },
          end: {
            line: 47,
            column: 3
          }
        },
        line: 45
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 48,
            column: 3
          }
        },
        loc: {
          start: {
            line: 48,
            column: 28
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 48
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 51,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        loc: {
          start: {
            line: 51,
            column: 28
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 51
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 55,
            column: 2
          },
          end: {
            line: 55,
            column: 3
          }
        },
        loc: {
          start: {
            line: 55,
            column: 48
          },
          end: {
            line: 62,
            column: 3
          }
        },
        line: 55
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 66,
            column: 13
          },
          end: {
            line: 66,
            column: 14
          }
        },
        loc: {
          start: {
            line: 66,
            column: 25
          },
          end: {
            line: 68,
            column: 1
          }
        },
        line: 66
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 69,
            column: 13
          },
          end: {
            line: 69,
            column: 14
          }
        },
        loc: {
          start: {
            line: 69,
            column: 19
          },
          end: {
            line: 71,
            column: 1
          }
        },
        line: 69
      },
      "10": {
        name: "objToString",
        decl: {
          start: {
            line: 116,
            column: 9
          },
          end: {
            line: 116,
            column: 20
          }
        },
        loc: {
          start: {
            line: 116,
            column: 26
          },
          end: {
            line: 134,
            column: 1
          }
        },
        line: 116
      },
      "11": {
        name: "colorize",
        decl: {
          start: {
            line: 135,
            column: 9
          },
          end: {
            line: 135,
            column: 17
          }
        },
        loc: {
          start: {
            line: 135,
            column: 29
          },
          end: {
            line: 140,
            column: 1
          }
        },
        line: 135
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 143,
            column: 21
          },
          end: {
            line: 143,
            column: 22
          }
        },
        loc: {
          start: {
            line: 143,
            column: 33
          },
          end: {
            line: 168,
            column: 1
          }
        },
        line: 143
      },
      "13": {
        name: "checkType",
        decl: {
          start: {
            line: 170,
            column: 9
          },
          end: {
            line: 170,
            column: 18
          }
        },
        loc: {
          start: {
            line: 170,
            column: 25
          },
          end: {
            line: 175,
            column: 1
          }
        },
        line: 170
      },
      "14": {
        name: "logThis",
        decl: {
          start: {
            line: 177,
            column: 9
          },
          end: {
            line: 177,
            column: 16
          }
        },
        loc: {
          start: {
            line: 177,
            column: 23
          },
          end: {
            line: 182,
            column: 1
          }
        },
        line: 177
      },
      "15": {
        name: "logLocal",
        decl: {
          start: {
            line: 184,
            column: 9
          },
          end: {
            line: 184,
            column: 17
          }
        },
        loc: {
          start: {
            line: 184,
            column: 59
          },
          end: {
            line: 203,
            column: 1
          }
        },
        line: 184
      },
      "16": {
        name: "logToConsole",
        decl: {
          start: {
            line: 212,
            column: 9
          },
          end: {
            line: 212,
            column: 21
          }
        },
        loc: {
          start: {
            line: 212,
            column: 55
          },
          end: {
            line: 269,
            column: 1
          }
        },
        line: 212
      },
      "17": {
        name: "getSentryExtras",
        decl: {
          start: {
            line: 271,
            column: 9
          },
          end: {
            line: 271,
            column: 24
          }
        },
        loc: {
          start: {
            line: 271,
            column: 27
          },
          end: {
            line: 286,
            column: 1
          }
        },
        line: 271
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 43
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 11
          },
          end: {
            line: 12,
            column: 32
          }
        }, {
          start: {
            line: 12,
            column: 36
          },
          end: {
            line: 12,
            column: 43
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 13,
            column: 10
          },
          end: {
            line: 13,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 13,
            column: 10
          },
          end: {
            line: 13,
            column: 30
          }
        }, {
          start: {
            line: 13,
            column: 34
          },
          end: {
            line: 13,
            column: 45
          }
        }],
        line: 13
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 14,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 14,
            column: 30
          }
        }, {
          start: {
            line: 14,
            column: 34
          },
          end: {
            line: 14,
            column: 39
          }
        }],
        line: 14
      },
      "3": {
        loc: {
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 22,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 22,
            column: 15
          },
          end: {
            line: 22,
            column: 41
          }
        }, {
          start: {
            line: 22,
            column: 45
          },
          end: {
            line: 22,
            column: 49
          }
        }],
        line: 22
      },
      "4": {
        loc: {
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 60,
            column: 22
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 57,
            column: 12
          }
        }, {
          start: {
            line: 58,
            column: 6
          },
          end: {
            line: 58,
            column: 24
          }
        }, {
          start: {
            line: 59,
            column: 6
          },
          end: {
            line: 59,
            column: 35
          }
        }, {
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 60,
            column: 22
          }
        }],
        line: 57
      },
      "5": {
        loc: {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 123,
            column: 5
          }
        }, {
          start: {
            line: 121,
            column: 11
          },
          end: {
            line: 123,
            column: 5
          }
        }],
        line: 119
      },
      "6": {
        loc: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 41
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 41
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
        line: 136
      },
      "7": {
        loc: {
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 138,
            column: 65
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 138,
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
        line: 137
      },
      "8": {
        loc: {
          start: {
            line: 171,
            column: 2
          },
          end: {
            line: 171,
            column: 50
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 171,
            column: 2
          },
          end: {
            line: 171,
            column: 50
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
        line: 171
      },
      "9": {
        loc: {
          start: {
            line: 187,
            column: 5
          },
          end: {
            line: 187,
            column: 46
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 187,
            column: 29
          },
          end: {
            line: 187,
            column: 41
          }
        }, {
          start: {
            line: 187,
            column: 44
          },
          end: {
            line: 187,
            column: 46
          }
        }],
        line: 187
      },
      "10": {
        loc: {
          start: {
            line: 188,
            column: 5
          },
          end: {
            line: 190,
            column: 10
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 189,
            column: 8
          },
          end: {
            line: 189,
            column: 56
          }
        }, {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 190,
            column: 10
          }
        }],
        line: 188
      },
      "11": {
        loc: {
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 202,
            column: 3
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
        line: 200
      },
      "12": {
        loc: {
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 200,
            column: 6
          },
          end: {
            line: 200,
            column: 34
          }
        }, {
          start: {
            line: 200,
            column: 38
          },
          end: {
            line: 200,
            column: 54
          }
        }],
        line: 200
      },
      "13": {
        loc: {
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 214,
            column: 2
          },
          end: {
            line: 214,
            column: 31
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
        line: 214
      },
      "14": {
        loc: {
          start: {
            line: 215,
            column: 2
          },
          end: {
            line: 215,
            column: 31
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 215,
            column: 2
          },
          end: {
            line: 215,
            column: 31
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
        line: 215
      },
      "15": {
        loc: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 216,
            column: 29
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 216,
            column: 29
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
        line: 216
      },
      "16": {
        loc: {
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 221,
            column: 51
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 221,
            column: 51
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
        line: 221
      },
      "17": {
        loc: {
          start: {
            line: 223,
            column: 2
          },
          end: {
            line: 223,
            column: 59
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 223,
            column: 2
          },
          end: {
            line: 223,
            column: 59
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
        line: 223
      },
      "18": {
        loc: {
          start: {
            line: 227,
            column: 16
          },
          end: {
            line: 227,
            column: 41
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 227,
            column: 16
          },
          end: {
            line: 227,
            column: 30
          }
        }, {
          start: {
            line: 227,
            column: 34
          },
          end: {
            line: 227,
            column: 41
          }
        }],
        line: 227
      },
      "19": {
        loc: {
          start: {
            line: 228,
            column: 2
          },
          end: {
            line: 228,
            column: 56
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 228,
            column: 2
          },
          end: {
            line: 228,
            column: 56
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
        line: 228
      },
      "20": {
        loc: {
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 264,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 230,
            column: 2
          },
          end: {
            line: 264,
            column: 3
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
        line: 230
      },
      "21": {
        loc: {
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 57
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 231,
            column: 4
          },
          end: {
            line: 231,
            column: 57
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
        line: 231
      },
      "22": {
        loc: {
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 238,
            column: 4
          },
          end: {
            line: 238,
            column: 61
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
        line: 238
      },
      "23": {
        loc: {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 239,
            column: 64
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 239,
            column: 64
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
        line: 239
      },
      "24": {
        loc: {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 244,
            column: 70
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 244,
            column: 36
          },
          end: {
            line: 244,
            column: 63
          }
        }, {
          start: {
            line: 244,
            column: 66
          },
          end: {
            line: 244,
            column: 70
          }
        }],
        line: 244
      },
      "25": {
        loc: {
          start: {
            line: 266,
            column: 2
          },
          end: {
            line: 268,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 266,
            column: 2
          },
          end: {
            line: 268,
            column: 3
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
        line: 266
      },
      "26": {
        loc: {
          start: {
            line: 266,
            column: 6
          },
          end: {
            line: 266,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 266,
            column: 6
          },
          end: {
            line: 266,
            column: 36
          }
        }, {
          start: {
            line: 266,
            column: 40
          },
          end: {
            line: 266,
            column: 65
          }
        }],
        line: 266
      },
      "27": {
        loc: {
          start: {
            line: 273,
            column: 19
          },
          end: {
            line: 273,
            column: 74
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 273,
            column: 32
          },
          end: {
            line: 273,
            column: 62
          }
        }, {
          start: {
            line: 273,
            column: 65
          },
          end: {
            line: 273,
            column: 74
          }
        }],
        line: 273
      },
      "28": {
        loc: {
          start: {
            line: 274,
            column: 24
          },
          end: {
            line: 276,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 275,
            column: 40
          }
        }, {
          start: {
            line: 276,
            column: 6
          },
          end: {
            line: 276,
            column: 15
          }
        }],
        line: 274
      },
      "29": {
        loc: {
          start: {
            line: 278,
            column: 26
          },
          end: {
            line: 280,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 279,
            column: 42
          }
        }, {
          start: {
            line: 280,
            column: 6
          },
          end: {
            line: 280,
            column: 15
          }
        }],
        line: 278
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
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0
    },
    f: {
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
      "17": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0, 0],
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
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "805cf7227c393446c4cf9e0234bd65732d39a8ad"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2tkpo65ys = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2tkpo65ys();
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var os = (cov_2tkpo65ys().s[0]++, require("os"));
var _ref = (cov_2tkpo65ys().s[1]++, require("lodash")),
  isNull = _ref.isNull,
  isObject = _ref.isObject;
var graylog2 = (cov_2tkpo65ys().s[2]++, require("graylog2"));
var Sentry = (cov_2tkpo65ys().s[3]++, require("@sentry/node"));
var Graylog = (cov_2tkpo65ys().s[4]++, graylog2.graylog);
var logger = exports.Logger = (cov_2tkpo65ys().s[5]++, {
  settings: {
    level: (cov_2tkpo65ys().b[0][0]++, process.env.LOG_LEVEL) || (cov_2tkpo65ys().b[0][1]++, "DEBUG"),
    host: (cov_2tkpo65ys().b[1][0]++, process.env.LOG_HOST) || (cov_2tkpo65ys().b[1][1]++, "127.0.0.1"),
    port: (cov_2tkpo65ys().b[2][0]++, process.env.LOG_PORT) || (cov_2tkpo65ys().b[2][1]++, 54321),
    saveLocal: (0, _util.isTrue)(process.env.LOG_LOCAL),
    timestampLocal: (0, _util.isTrue)(process.env.LOG_TIMESTAMP),
    verboseLocal: (0, _util.isTrue)(process.env.LOG_EXTRA),
    color: (0, _util.isTrue)(process.env.LOG_COLOR),
    prettyPrint: (0, _util.isTrue)(process.env.LOG_PRETTY),
    developer_mode: !(0, _util.isProductionEnv)(),
    // defaultSender:  undefined,
    slackHook: (cov_2tkpo65ys().b[3][0]++, process.env.LOG_SLACK_HOOK) || (cov_2tkpo65ys().b[3][1]++, null)
  },
  graylogger: null
});

// order is important! (severe ==> verbose)
var logLevels = (cov_2tkpo65ys().s[6]++, ["CRITICAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"]);

//to enable logger instances have a default sender - shit's mainly singletonic otherwise
var Logger = /*#__PURE__*/function () {
  function Logger(defaultSender) {
    _classCallCheck(this, Logger);
    cov_2tkpo65ys().f[0]++;
    cov_2tkpo65ys().s[7]++;
    this.defaultSender = defaultSender;
  }
  return _createClass(Logger, [{
    key: "critical",
    value: function critical(msg, extra, sender) {
      cov_2tkpo65ys().f[1]++;
      cov_2tkpo65ys().s[8]++;
      this.loggerPassToConsole("CRITICAL", sender, msg, extra);
    }
  }, {
    key: "error",
    value: function error(msg, extra, sender) {
      cov_2tkpo65ys().f[2]++;
      cov_2tkpo65ys().s[9]++;
      this.loggerPassToConsole("ERROR", sender, msg, extra);
    }
  }, {
    key: "warn",
    value: function warn(msg, extra, sender) {
      cov_2tkpo65ys().f[3]++;
      cov_2tkpo65ys().s[10]++;
      this.loggerPassToConsole("WARN", sender, msg, extra);
    }
  }, {
    key: "info",
    value: function info(msg, extra, sender) {
      cov_2tkpo65ys().f[4]++;
      cov_2tkpo65ys().s[11]++;
      this.loggerPassToConsole("INFO", sender, msg, extra);
    }
  }, {
    key: "debug",
    value: function debug(msg, extra, sender) {
      cov_2tkpo65ys().f[5]++;
      cov_2tkpo65ys().s[12]++;
      this.loggerPassToConsole("DEBUG", sender, msg, extra);
    }
  }, {
    key: "trace",
    value: function trace(msg, extra, sender) {
      cov_2tkpo65ys().f[6]++;
      cov_2tkpo65ys().s[13]++;
      this.loggerPassToConsole("TRACE", sender, msg, extra);
    }
  }, {
    key: "loggerPassToConsole",
    value: function loggerPassToConsole(type, sender, msg, extra) {
      cov_2tkpo65ys().f[7]++;
      cov_2tkpo65ys().s[14]++;
      sender = (cov_2tkpo65ys().b[4][0]++, sender) || (cov_2tkpo65ys().b[4][1]++, this.defaultSender) || (cov_2tkpo65ys().b[4][2]++, logger.settings.defaultSender) || (cov_2tkpo65ys().b[4][3]++, "unknown sender");
      cov_2tkpo65ys().s[15]++;
      logToConsole(type, sender, msg, extra);
    }
  }]);
}();
var defaultLogger = (cov_2tkpo65ys().s[16]++, new Logger());
cov_2tkpo65ys().s[17]++;
logger["for"] = function (sender) {
  cov_2tkpo65ys().f[8]++;
  cov_2tkpo65ys().s[18]++;
  return new Logger(sender);
};
cov_2tkpo65ys().s[19]++;
logger.get = function () {
  cov_2tkpo65ys().f[9]++;
  cov_2tkpo65ys().s[20]++;
  return defaultLogger;
};
var colors = (cov_2tkpo65ys().s[21]++, {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgLightBlue: "\x1b[1;34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m"
});
var colorconf = (cov_2tkpo65ys().s[22]++, {
  timestamp: colors.Dim + colors.FgBlack + colors.BgWhite,
  level: {
    TRACE: colors.Dim + colors.BgMagenta + colors.FgBlack,
    DEBUG: colors.Dim + colors.FgBlack + colors.BgGreen,
    INFO: colors.FgBlue + colors.BgCyan,
    WARN: colors.Bright + colors.FgYellow + colors.BgBlack + " ⚠️ ",
    ERROR: colors.Bright + colors.FgRed + colors.BgBlack + " ❌",
    CRITICAL: colors.Bright + colors.BgRed + colors.FgYellow + colors.Blink + " ☠️ "
  },
  sender: colors.Underscore + colors.FgCyan,
  extra: colors.FgWhite + colors.BgBlue
});
function objToString(obj) {
  cov_2tkpo65ys().f[10]++;
  var str;
  cov_2tkpo65ys().s[23]++;
  try {
    cov_2tkpo65ys().s[24]++;
    if (!logger.settings.prettyPrint) {
      cov_2tkpo65ys().b[5][0]++;
      cov_2tkpo65ys().s[25]++;
      str = JSON.stringify(obj);
    } else {
      cov_2tkpo65ys().b[5][1]++;
      cov_2tkpo65ys().s[26]++;
      str = JSON.stringify(obj, null, 4);
    }
  } catch (err) {
    cov_2tkpo65ys().s[27]++;
    logToConsole("WARN", "logger-module", "stringification of object failed", err);
    cov_2tkpo65ys().s[28]++;
    str = "~(Obj)~[un-stringifiable]~~";
  }
  cov_2tkpo65ys().s[29]++;
  return str;
}
function colorize(part, str) {
  cov_2tkpo65ys().f[11]++;
  cov_2tkpo65ys().s[30]++;
  if (!logger.settings.color) {
    cov_2tkpo65ys().b[6][0]++;
    cov_2tkpo65ys().s[31]++;
    return str;
  } else {
    cov_2tkpo65ys().b[6][1]++;
  }
  cov_2tkpo65ys().s[32]++;
  if (part === "level") {
    cov_2tkpo65ys().b[7][0]++;
    cov_2tkpo65ys().s[33]++;
    return colorconf.level[str] + " " + str + " " + colors.Reset;
  } else {
    cov_2tkpo65ys().b[7][1]++;
  }
  cov_2tkpo65ys().s[34]++;
  return colorconf[part] + str + colors.Reset;
}

// initialize the remote logger
cov_2tkpo65ys().s[35]++;
logger.initGraylog = function () {
  cov_2tkpo65ys().f[12]++;
  var server1 = (cov_2tkpo65ys().s[36]++, {
    host: logger.settings.host,
    port: logger.settings.port
  });
  var options = (cov_2tkpo65ys().s[37]++, {
    servers: [],
    hostname: os.hostname()
  });
  cov_2tkpo65ys().s[38]++;
  options.servers.push(server1);
  var graylogger = (cov_2tkpo65ys().s[39]++, new Graylog(options));

  /* istanbul ignore next */
  graylogger.on("error", function (error) {
    console.log(" 👾 !ERROR! while trying to write to graylog2:", error);
  });
  cov_2tkpo65ys().s[40]++;
  logger.graylogger = graylogger;
  cov_2tkpo65ys().s[41]++;
  logToConsole("INFO", "logger.initGraylog", "Connection to Graylog log Server initialized", options);
  //if (logger.settings.verboseLocal) console.log(logger)
};
function checkType(type) {
  cov_2tkpo65ys().f[13]++;
  cov_2tkpo65ys().s[42]++;
  if (logLevels.indexOf(type) !== -1) {
    cov_2tkpo65ys().b[8][0]++;
    cov_2tkpo65ys().s[43]++;
    return true;
  } else {
    cov_2tkpo65ys().b[8][1]++;
  }
  cov_2tkpo65ys().s[44]++;
  console.log('unknown logging type: "' + type + '"');
  cov_2tkpo65ys().s[45]++;
  console.log("known logging types are: " + logLevels.join(","));
  cov_2tkpo65ys().s[46]++;
  return false;
}
function logThis(type) {
  cov_2tkpo65ys().f[14]++;
  cov_2tkpo65ys().s[47]++;
  return logLevels.indexOf(logger.settings.level.toUpperCase()) >= logLevels.indexOf(type);
}
function logLocal(type, sender, msgShort, msgLong, extras) {
  cov_2tkpo65ys().f[15]++;
  cov_2tkpo65ys().s[48]++;
  type = type.toUpperCase();
  var msg = (cov_2tkpo65ys().s[49]++, (logger.settings.color ? (cov_2tkpo65ys().b[9][0]++, colors.Reset) : (cov_2tkpo65ys().b[9][1]++, "")) + (logger.settings.timestampLocal ? (cov_2tkpo65ys().b[10][0]++, colorize("timestamp", new Date().toJSON()) + " ") : (cov_2tkpo65ys().b[10][1]++, "")) + colorize("level", type) + "<" + colorize("sender", sender) + ">: ");
  // msg += msgLong ? msgLong : msgShort // nope, msgLong will usually be == extras
  cov_2tkpo65ys().s[50]++;
  msg += msgShort;
  //if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg)
  //else
  cov_2tkpo65ys().s[51]++;
  console.log(msg);
  cov_2tkpo65ys().s[52]++;
  if ((cov_2tkpo65ys().b[12][0]++, logger.settings.verboseLocal) && (cov_2tkpo65ys().b[12][1]++, isObject(extras))) {
    cov_2tkpo65ys().b[11][0]++;
    cov_2tkpo65ys().s[53]++;
    console.log(colorize("extra", "↳extras:"), extras);
  } else {
    cov_2tkpo65ys().b[11][1]++;
  }
}

/**
 * logs to console with timestamp
 * @param  {String} type type of message
 * @param  {String} sender sender of the message
 * @param  {String} msgShort short msg
 * @param  {Object} [extras] some extras e.g. job id
 */
function logToConsole(type, sender, msgShort, _extras) {
  cov_2tkpo65ys().f[16]++;
  cov_2tkpo65ys().s[54]++;
  type = type.toUpperCase();
  cov_2tkpo65ys().s[55]++;
  if (isNull(msgShort)) {
    cov_2tkpo65ys().b[13][0]++;
    cov_2tkpo65ys().s[56]++;
    return;
  } else {
    cov_2tkpo65ys().b[13][1]++;
  }
  cov_2tkpo65ys().s[57]++;
  if (!checkType(type)) {
    cov_2tkpo65ys().b[14][0]++;
    cov_2tkpo65ys().s[58]++;
    return;
  } else {
    cov_2tkpo65ys().b[14][1]++;
  }
  cov_2tkpo65ys().s[59]++;
  if (!logThis(type)) {
    cov_2tkpo65ys().b[15][0]++;
    cov_2tkpo65ys().s[60]++;
    return;
  } else {
    cov_2tkpo65ys().b[15][1]++;
  }
  var extras = (cov_2tkpo65ys().s[61]++, _objectSpread({}, getSentryExtras()));
  cov_2tkpo65ys().s[62]++;
  if (_extras) {
    cov_2tkpo65ys().b[16][0]++;
    cov_2tkpo65ys().s[63]++;
    extras = Object.assign({}, _extras);
  } else {
    cov_2tkpo65ys().b[16][1]++;
  }
  cov_2tkpo65ys().s[64]++;
  if (isObject(msgShort)) {
    cov_2tkpo65ys().b[17][0]++;
    cov_2tkpo65ys().s[65]++;
    msgShort = objToString(msgShort);
  } else {
    cov_2tkpo65ys().b[17][1]++;
  }

  // sender = sender.toUpperCase()

  var msgLong = (cov_2tkpo65ys().s[66]++, (cov_2tkpo65ys().b[18][0]++, extras.msgLong) || (cov_2tkpo65ys().b[18][1]++, _extras));
  cov_2tkpo65ys().s[67]++;
  if (isObject(msgLong)) {
    cov_2tkpo65ys().b[19][0]++;
    cov_2tkpo65ys().s[68]++;
    msgLong = objToString(msgLong);
  } else {
    cov_2tkpo65ys().b[19][1]++;
  }
  // in production mode send the message to graylog as well.
  cov_2tkpo65ys().s[69]++;
  if (!logger.settings.developer_mode) {
    cov_2tkpo65ys().b[20][0]++;
    cov_2tkpo65ys().s[70]++;
    if (logger.graylogger === null) {
      cov_2tkpo65ys().b[21][0]++;
      cov_2tkpo65ys().s[71]++;
      logger.initGraylog();
    } else {
      cov_2tkpo65ys().b[21][1]++;
    }

    // smallExtras added because just sending the extras json can lead to trouble with indexing on the graylog server if it's not consistent
    var smallExtras = (cov_2tkpo65ys().s[72]++, {
      sender: sender,
      type: type
    });
    cov_2tkpo65ys().s[73]++;
    if (extras.user_id) {
      cov_2tkpo65ys().b[22][0]++;
      cov_2tkpo65ys().s[74]++;
      smallExtras.user_id = extras.user_id;
    } else {
      cov_2tkpo65ys().b[22][1]++;
    }
    cov_2tkpo65ys().s[75]++;
    if (extras.filename) {
      cov_2tkpo65ys().b[23][0]++;
      cov_2tkpo65ys().s[76]++;
      smallExtras.filename = extras.filename;
    } else {
      cov_2tkpo65ys().b[23][1]++;
    }

    // limit size of msgLong to avoid excessive storage consumtion and failures
    // (up to 32766 byte strings should be possible, but 10k characters is already plenty for reasonable logging output)
    var msgLongGray = (cov_2tkpo65ys().s[77]++, typeof msgLong === "string" ? (cov_2tkpo65ys().b[24][0]++, msgLong.substring(0, 10000)) : (cov_2tkpo65ys().b[24][1]++, null));
    cov_2tkpo65ys().s[78]++;
    try {
      cov_2tkpo65ys().s[79]++;
      logger.graylogger.log(msgShort, msgLongGray, smallExtras);
    } catch (e) {
      cov_2tkpo65ys().s[80]++;
      logLocal("error", "logger", "trying to log something illegal? msgShort: " + msgShort + " msgLong: " + msgLong + " extras: " + extras + " orig msg: " + e, false, {
        extras: extras,
        error: e
      });
    }
  } else {
    cov_2tkpo65ys().b[20][1]++;
  }
  cov_2tkpo65ys().s[81]++;
  if ((cov_2tkpo65ys().b[26][0]++, logger.settings.developer_mode) || (cov_2tkpo65ys().b[26][1]++, logger.settings.saveLocal)) {
    cov_2tkpo65ys().b[25][0]++;
    cov_2tkpo65ys().s[82]++;
    logLocal(type, sender, msgShort, msgLong, _extras);
  } else {
    cov_2tkpo65ys().b[25][1]++;
  }
}
function getSentryExtras() {
  cov_2tkpo65ys().f[17]++;
  var activeSpan = (cov_2tkpo65ys().s[83]++, Sentry.getActiveSpan());
  var rootSpan = (cov_2tkpo65ys().s[84]++, activeSpan ? (cov_2tkpo65ys().b[27][0]++, Sentry.getRootSpan(activeSpan)) : (cov_2tkpo65ys().b[27][1]++, undefined));
  var sentryTraceId = (cov_2tkpo65ys().s[85]++, rootSpan ? (cov_2tkpo65ys().b[28][0]++, Sentry.spanToTraceHeader(rootSpan)) : (cov_2tkpo65ys().b[28][1]++, undefined));
  var sentryBaggageId = (cov_2tkpo65ys().s[86]++, rootSpan ? (cov_2tkpo65ys().b[29][0]++, Sentry.spanToBaggageHeader(rootSpan)) : (cov_2tkpo65ys().b[29][1]++, undefined));
  cov_2tkpo65ys().s[87]++;
  return {
    trace: sentryTraceId,
    sentryBaggage: sentryBaggageId
  };
}