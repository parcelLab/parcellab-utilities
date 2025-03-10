"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logLevel = exports.Logger = void 0;
exports.logToConsole = logToConsole;
var _util = require("./util");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var os = require('os');
var _require = require('lodash'),
  isNull = _require.isNull,
  isObject = _require.isObject;
var graylog2 = require('graylog2');
var Graylog2 = graylog2.graylog;
var logger = exports.Logger = {
  settings: {
    level: process.env.LOG_LEVEL || 'DEBUG',
    host: process.env.LOG_HOST || '127.0.0.1',
    port: process.env.LOG_PORT || 54321,
    saveLocal: (0, _util.isTrue)(process.env.LOG_LOCAL),
    timestampLocal: (0, _util.isTrue)(process.env.LOG_TIMESTAMP),
    verboseLocal: (0, _util.isTrue)(process.env.LOG_EXTRA),
    color: (0, _util.isTrue)(process.env.LOG_COLOR),
    prettyPrint: (0, _util.isTrue)(process.env.LOG_PRETTY),
    developer_mode: !(0, _util.isProductionEnv)()
    // defaultSender:  undefined,
  },
  /** @type {import('graylog2').graylog}*/
  graylogger: null
};
var logLevel = exports.logLevel = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

// order is important! (severe ==> verbose)
var logLevelsSorted = [logLevel.CRITICAL, logLevel.ERROR, logLevel.WARN, logLevel.INFO, logLevel.DEBUG, logLevel.TRACE];

//to enable logger instances have a default sender - shit's mainly singletonic otherwise
var Logger = /*#__PURE__*/function () {
  function Logger(defaultSender) {
    _classCallCheck(this, Logger);
    this.defaultSender = defaultSender;
  }
  return _createClass(Logger, [{
    key: "critical",
    value: function critical(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.CRITICAL, sender, msg, extra);
    }
  }, {
    key: "error",
    value: function error(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.ERROR, sender, msg, extra);
    }
  }, {
    key: "warn",
    value: function warn(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.WARN, sender, msg, extra);
    }
  }, {
    key: "info",
    value: function info(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.INFO, sender, msg, extra);
    }
  }, {
    key: "debug",
    value: function debug(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.DEBUG, sender, msg, extra);
    }
  }, {
    key: "trace",
    value: function trace(msg, extra, sender) {
      this.loggerPassToConsole(logLevel.TRACE, sender, msg, extra);
    }
  }, {
    key: "loggerPassToConsole",
    value: function loggerPassToConsole(type, sender, msg, extra) {
      sender = sender || this.defaultSender || logger.settings.defaultSender || 'unknown sender';
      logToConsole(type, sender, msg, extra);
    }
  }]);
}();
var defaultLogger = new Logger();
logger["for"] = function (sender) {
  return new Logger(sender);
};
logger.get = function () {
  return defaultLogger;
};
var colors = {
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',
  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgLightBlue: '\x1b[1;34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',
  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m'
};
var colorConf = {
  'timestamp': colors.Dim + colors.FgBlack + colors.BgWhite,
  'level': _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, logLevel.TRACE, colors.Dim + colors.BgMagenta + colors.FgBlack), logLevel.DEBUG, colors.Dim + colors.FgBlack + colors.BgGreen), logLevel.INFO, colors.FgBlue + colors.BgCyan), logLevel.WARN, colors.Bright + colors.FgYellow + colors.BgBlack + ' ⚠️ '), logLevel.ERROR, colors.Bright + colors.FgRed + colors.BgBlack + ' ❌'), logLevel.CRITICAL, colors.Bright + colors.BgRed + colors.FgYellow + colors.Blink + ' ☠️ '),
  'sender': colors.Underscore + colors.FgCyan,
  'extra': colors.FgWhite + colors.BgBlue
};
function objToString(obj) {
  var str;
  try {
    if (!logger.settings.prettyPrint) {
      str = JSON.stringify(obj);
    } else {
      str = JSON.stringify(obj, null, 4);
    }
  } catch (err) {
    logToConsole(logLevel.WARN, 'logger-module', 'stringification of object failed', err);
    str = '~(Obj)~[un-stringifiable]~~';
  }
  return str;
}
function colorize(part, str) {
  if (!logger.settings.color) return str;
  if (part === 'level') return "".concat(colorConf.level[str], " ").concat(str, " ").concat(colors.Reset);
  return colorConf[part] + str + colors.Reset;
}
function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (e) {
    return String(value);
  }
}

// initialize the remote logger
logger.initGraylog = function () {
  var server1 = {
    host: logger.settings.host,
    port: logger.settings.port
  };
  var options = {
    servers: [],
    hostname: os.hostname()
  };
  options.servers.push(server1);
  var graylogger = new Graylog2(options);

  /* istanbul ignore next */
  graylogger.on('error', function (error) {
    console.error(' 👾 !ERROR! while trying to write to graylog2:', error);
  });
  logger.graylogger = graylogger;
  logToConsole(logLevel.INFO, 'logger.initGraylog', 'Connection to Graylog log Server initialized', options);
  //if (logger.settings.verboseLocal) console.log(logger)
};
function checkType(type) {
  if (logLevelsSorted.indexOf(type) !== -1) return true;
  console.error("unknown logging type: \"".concat(type, "\""));
  console.info("known logging types are: ".concat(logLevelsSorted.join(', ')));
  return false;
}
function logThis(type) {
  return logLevelsSorted.indexOf(logger.settings.level.toUpperCase()) >= logLevelsSorted.indexOf(type);
}
function logLocal(type, sender, msgShort, extras) {
  type = type.toUpperCase();
  var msg = (logger.settings.color ? colors.Reset : '') + (logger.settings.timestampLocal ? colorize('timestamp', new Date().toJSON()) : '') + colorize('level', type) + '<' + colorize('sender', sender) + '>: ';
  console.log(msg + msgShort);
  if (logger.settings.verboseLocal && isObject(extras)) {
    console.log(colorize('extra', '↳extras:'), extras);
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
  type = type.toUpperCase();
  if (isNull(msgShort)) return;
  if (!checkType(type)) return;
  if (!logThis(type)) return;
  var extras = _extras ? Object.assign({}, _extras) : {};
  if (isObject(msgShort)) msgShort = objToString(msgShort);

  // sender = sender.toUpperCase()

  var msgLong = extras.msgLong || _extras;
  if (isObject(msgLong)) msgLong = objToString(msgLong);

  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog();

    // smallExtras added because just sending the extras json can lead to trouble with indexing on the graylog server if it's not consistent
    var smallExtras = {
      sender: sender,
      type: type
    };
    if (extras.user_id) smallExtras.user_id = Number(extras.user_id) || 0;
    if (extras.userId && !smallExtras.user_id) smallExtras.user_id = Number(extras.userId) || 0;
    if (extras.filename) smallExtras.filename = extras.filename;
    if (extras.trace_id) smallExtras.trace_id = String(extras.trace_id);
    if (extras.database_id) smallExtras.database_id = String(extras.database_id);

    // limit size of msgLong to avoid excessive storage consumtion and failures
    // (up to 32766 byte strings should be possible, but 10k characters is already plenty for reasonable logging output)
    var msgLongGray = typeof msgLong === 'string' ? msgLong.substring(0, 10000) : null;
    try {
      var leveledLogFunction = logger.graylogger[type.toLowerCase()] || logger.graylogger.info;
      var bindedLogFunction = leveledLogFunction.bind(logger.graylogger);
      bindedLogFunction(msgShort, msgLongGray, smallExtras);
    } catch (e) {
      logLocal('error', 'logger', "Failed to log to Graylog, falling back to local.\nmsgShort: ".concat(msgShort, " | msgLong: ").concat(msgLong, " | extras: ").concat(stringify(extras), " | orig msg: ").concat(e), {
        extras: extras,
        error: e
      });
    }
  }
  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, _extras);
  }
}
logToConsole.TRACE = logLevel.TRACE;
logToConsole.DEBUG = logLevel.DEBUG;
logToConsole.INFO = logLevel.INFO;
logToConsole.WARN = logLevel.WARN;
logToConsole.ERROR = logLevel.ERROR;
logToConsole.CRITICAL = logLevel.CRITICAL;