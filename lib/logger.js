'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = exports.logToConsole = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var os = require('os');
var _ = require('underscore');
var request = require('request');
var graylog2 = require('graylog2');
var Graylog = graylog2.graylog;

sentry = {
  dsn: isProd ? process.env.SENTRY_DNS : undefined,
  integrations: [new Dedupe()], // dedupe based on fingerprint and stack trace
  tracesSampleRate: 1, // 100% of all errors will be reported
  environment: isProd ? 'production' : 'testing',
  serverName: require('os').hostname()
}
const Sentry = require('@sentry/node')
Sentry.init({ dsn: sentry.dsn })

var logger = {
  settings: {
    level: process.env.LOG_LEVEL || 'DEBUG',
    host: process.env.LOG_HOST || '127.0.0.1',
    port: process.env.LOG_PORT || 54321,
    saveLocal: (0, _util.isTrue)(process.env.LOG_LOCAL),
    timestampLocal: (0, _util.isTrue)(process.env.LOG_TIMESTAMP),
    verboseLocal: (0, _util.isTrue)(process.env.LOG_EXTRA),
    color: (0, _util.isTrue)(process.env.LOG_COLOR),
    prettyPrint: (0, _util.isTrue)(process.env.LOG_PRETTY),
    developer_mode: !(0, _util.isProductionEnv)(),
    // defaultSender:  undefined,
    slackHook: process.env.LOG_SLACK_HOOK || null
  },
  graylogger: null

  // order is important! (severe ==> verbose)
};var logLevels = ['CRITICAL', 'ERROR', 'WARN', 'INFO', 'DEBUG', 'TRACE'];

//to enable logger instances have a default sender - shit's mainly singletonic otherwise

var Logger = function () {
  function Logger(defaultSender) {
    _classCallCheck(this, Logger);

    this.defaultSender = defaultSender;
  }

  _createClass(Logger, [{
    key: 'critical',
    value: function critical(msg, extra, sender) {
      this.loggerPassToConsole('CRITICAL', sender, msg, extra);
    }
  }, {
    key: 'error',
    value: function error(msg, extra, sender) {
      this.loggerPassToConsole('ERROR', sender, msg, extra);
    }
  }, {
    key: 'warn',
    value: function warn(msg, extra, sender) {
      this.loggerPassToConsole('WARN', sender, msg, extra);
    }
  }, {
    key: 'info',
    value: function info(msg, extra, sender) {
      this.loggerPassToConsole('INFO', sender, msg, extra);
    }
  }, {
    key: 'debug',
    value: function debug(msg, extra, sender) {
      this.loggerPassToConsole('DEBUG', sender, msg, extra);
    }
  }, {
    key: 'trace',
    value: function trace(msg, extra, sender) {
      this.loggerPassToConsole('TRACE', sender, msg, extra);
    }
  }, {
    key: 'loggerPassToConsole',
    value: function loggerPassToConsole(type, sender, msg, extra) {
      sender = sender || this.defaultSender || logger.settings.defaultSender || 'unknown sender';
      logToConsole(type, sender, msg, extra);
    }
  }]);

  return Logger;
}();

var defaultLogger = new Logger();

logger.for = function (sender) {
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

var colorconf = {
  'timestamp': colors.Dim + colors.FgBlack + colors.BgWhite,
  'level': {
    'TRACE': colors.Dim + colors.BgMagenta + colors.FgBlack,
    'DEBUG': colors.Dim + colors.FgBlack + colors.BgGreen,
    'INFO': colors.FgBlue + colors.BgCyan,
    'WARN': colors.Bright + colors.FgYellow + colors.BgBlack + ' ⚠️ ',
    'ERROR': colors.Bright + colors.FgRed + colors.BgBlack + ' ❌',
    'CRITICAL': colors.Bright + colors.BgRed + colors.FgYellow + colors.Blink + ' ☠️ '
  },
  'sender': colors.Underscore + colors.FgCyan,
  'extra': colors.FgWhite + colors.BgBlue
};
function objToString(obj) {
  var str = void 0;
  try {
    if (!logger.settings.prettyPrint) {
      str = JSON.stringify(obj);
    } else {
      str = JSON.stringify(obj, null, 4);
    }
  } catch (err) {
    logToConsole('WARN', 'logger-module', 'stringification of object failed', err);
    str = '~(Obj)~[un-stringifiable]~~';
  }
  return str;
}
function colorize(part, str) {
  if (!logger.settings.color) return str;
  if (part === 'level') return colorconf.level[str] + ' ' + str + ' ' + colors.Reset;
  return colorconf[part] + str + colors.Reset;
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

  var graylogger = new Graylog(options);

  /* istanbul ignore next */
  graylogger.on('error', function (error) {
    console.log(' 👾 !ERROR! while trying to write to graylog2:', error);
  });
  logger.graylogger = graylogger;
  logToConsole('INFO', 'logger.initGraylog', 'Connection to Graylog log Server initialized', options);
  //if (logger.settings.verboseLocal) console.log(logger)
};

function checkType(type) {
  if (logLevels.indexOf(type) !== -1) return true;
  console.log('unknown logging type: "' + type + '"');
  console.log('known logging types are: ' + logLevels.join(','));
  return false;
}

function logThis(type) {
  return logLevels.indexOf(logger.settings.level.toUpperCase()) >= logLevels.indexOf(type);
}

function logLocal(type, sender, msgShort, msgLong, extras) {
  type = type.toUpperCase();
  var msg = (logger.settings.color ? colors.Reset : '') + (logger.settings.timestampLocal ? colorize('timestamp', new Date().toJSON()) + ' ' : '') + colorize('level', type) + '<' + colorize('sender', sender) + '>: ';
  // msg += msgLong ? msgLong : msgShort // nope, msgLong will usually be == extras 
  msg += msgShort;
  //if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg)
  //else 
  console.log(msg);
  if (logger.settings.verboseLocal && _.isObject(extras)) {
    console.log(colorize('extra', '↳extras:'), extras);
  }
}

function slackPost(sender, msgShort) {
  if (!logger.settings.slackHook) {
    logToConsole('ERROR', 'slackIntegration', ' 🧨🧨🧨 Cannot post CRITICAL to slack!! No haz webhook!!🧨🧨🧨 ');
    return false;
  }
  var msg = os.hostname() + ': <' + sender + '> ' + msgShort;
  request.post(logger.settings.slackHook, {
    form: '{"text": "' + msg + '",}'
  }, function (err, response, body) {
    /* istanbul ignore else */ // testing that spams the slack channel..
    if (err) logToConsole('ERROR', 'slackIntegration', ' 🧨🧨🧨 posting to slack failed! 🧨🧨🧨', err);else if (!err) {
      logToConsole('INFO', 'slackIntegration', 'response from webhook: ', { response: response, body: body });
    }
  });
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
  if (_.isNull(msgShort)) return;
  if (!checkType(type)) return;
  if (!logThis(type)) return;

  if (_extras instanceof Error) {
    Sentry.captureException(_extras)
  }

  var extras = {};
  if (_extras) extras = Object.assign({}, _extras);

  if (_.isObject(msgShort)) msgShort = objToString(msgShort);

  // sender = sender.toUpperCase()

  var msgLong = extras.msgLong || _extras;
  if (_.isObject(msgLong)) msgLong = objToString(msgLong);

  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog();

    // smallExtras added because just sending the extras json can lead to trouble with indexing on the graylog server if it's not consistent
    var smallExtras = {
      sender: sender,
      type: type
    };
    if (extras.user_id) smallExtras.user_id = extras.user_id;
    if (extras.filename) smallExtras.filename = extras.filename;

    // limit size of msgLong to avoid excessive storage consumtion and failures
    // (up to 32766 byte strings should be possible, but 10k characters is already plenty for reasonable logging output)
    var msgLongGray = typeof msgLong === 'string' ? msgLong.substring(0, 10000) : null;

    try {
      logger.graylogger.log(msgShort, msgLongGray, smallExtras);
    } catch (e) {
      logLocal('error', 'logger', 'trying to log something illegal? msgShort: ' + msgShort + ' msgLong: ' + msgLong + ' extras: ' + extras + ' orig msg: ' + e, false, { extras: extras, error: e });
    }
  }

  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, msgLong, _extras);
  }
}

exports.logToConsole = logToConsole;
exports.Logger = logger;
