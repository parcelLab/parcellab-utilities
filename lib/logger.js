'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var os = require('os');
var _ = require('underscore');
var graylog2 = require('graylog2');
var Graylog = graylog2.graylog;

var logger = {
  settings: {
    level: process.env.LOG_LEVEL || 'DEBUG',
    host: process.env.LOG_HOST || '127.0.0.1',
    port: process.env.LOG_PORT || null,
    saveLocal: process.env.LOG_LOCAL || false,
    color: process.env.LOG_COLOR || false,
    developer_mode: !process.env.PRODUCTION,
    defaultSender: undefined,
    verboseLocal: false
  },
  graylogger: null

  // order is important! (severe ==> verbose)
};var logLevels = ['ERROR', 'WARN', 'INFO', 'DEBUG'];

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
    'DEBUG': colors.Dim + colors.FgBlack + colors.BgWhite,
    'INFO': colors.FgBlue + colors.BgCyan,
    'WARN': colors.Bright + colors.FgYellow + colors.BgBlack + ' ⚠️ ',
    'ERROR': colors.Bright + colors.FgRed + colors.BgBlack + ' ❌'
  },
  'sender': colors.Underscore + colors.FgCyan,
  'extra': colors.FgWhite + colors.BgBlue
};
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
    console.error('Error while trying to write to graylog2:', error);
  });
  logger.graylogger = graylogger;
  logger.info('Connection to Graylog log Server initialized', null, 'logger.initGraylog');
  if (logger.settings.verboseLocal) console.log(logger);
};

function checkType(type) {
  if (logLevels.indexOf(type) !== -1) return true;
  console.log('unknown logging type: "' + type + '"');
  console.log('known logging types are: ' + logLevels.join(','));
  return false;
}

function logThis(type) {
  return logLevels.indexOf(logger.settings.level) >= logLevels.indexOf(type);
}

function logLocal(type, sender, msgShort, msgLong, extras) {
  type = type.toUpperCase();
  var msg = colorize('timestamp', new Date().toJSON()) + ' ' + colorize('level', type) + '<' + colorize('sender', sender) + '>: ';
  msg += msgLong ? msgLong : msgShort;
  if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg);else console.log(msg);
  if (logger.settings.verboseLocal && _.isObject(extras)) {
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
  if (_.isNull(msgShort)) return;
  if (!checkType(type)) return;
  if (!logThis(type)) return;

  var extras = {};
  if (_extras) extras = Object.assign({}, _extras);

  if (_.isObject(msgShort)) msgShort = JSON.stringify(msgShort);

  // sender = sender.toUpperCase()

  var msgLong = '';
  if (extras.msgLong) {
    msgLong = extras.msgLong;
    if (_.isObject(msgLong)) msgLong = JSON.stringify(msgLong);
    delete extras.msgLong;
  }

  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog();
    extras.sender = sender;
    extras.type = type;
    try {
      logger.graylogger.log(msgShort, msgLong, extras);
    } catch (e) {
      logLocal('error', 'logger', 'trying to log something illegal? msgShort: ' + msgShort + ' msgLong: ' + msgLong + ' extras: ' + extras + ' orig msg: ' + e, false, { extras: extras, error: e });
    }
  }

  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, msgLong, _extras);
  }
}

function loggerPassToConsole(type, sender, msg, extra) {
  sender = sender || logger.settings.defaultSender || 'unknown sender';
  logToConsole(type, sender, msg, extra);
}

logger.error = function (msg, extra, sender) {
  return loggerPassToConsole('ERROR', sender, msg, extra);
};
logger.warn = function (msg, extra, sender) {
  return loggerPassToConsole('WARN', sender, msg, extra);
};
logger.info = function (msg, extra, sender) {
  return loggerPassToConsole('INFO', sender, msg, extra);
};
logger.debug = function (msg, extra, sender) {
  return loggerPassToConsole('DEBUG', sender, msg, extra);
};

exports.logToConsole = logToConsole;
exports.logger = logger;