const os = require('os')
const _ = require('underscore')
const request = require('request')
const graylog2 = require('graylog2')
const Graylog = graylog2.graylog

import { isTrue, isProductionEnv } from './util'

const logger = {
  settings: {
    level:          process.env.LOG_LEVEL || 'DEBUG',
    host:           process.env.LOG_HOST || '127.0.0.1',
    port:           process.env.LOG_PORT || 54321,
    saveLocal:      isTrue(process.env.LOG_LOCAL),
    timestampLocal: isTrue(process.env.LOG_TIMESTAMP),
    verboseLocal:   isTrue(process.env.LOG_EXTRA),
    color:          isTrue(process.env.LOG_COLOR),
    prettyPrint:    isTrue(process.env.LOG_PRETTY),
    developer_mode: !isProductionEnv(),
    // defaultSender:  undefined,
    slackHook:      process.env.LOG_SLACK_HOOK || null,
  },
  graylogger: null,
}

const logLevel = {
  TRACE: 'TRACE',
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL',
}

// order is important! (severe ==> verbose)
const logLevelsSorted = [
  logLevel.CRITICAL,
  logLevel.ERROR,
  logLevel.WARN,
  logLevel.INFO,
  logLevel.DEBUG,
  logLevel.TRACE,
]


//to enable logger instances have a default sender - shit's mainly singletonic otherwise
class Logger { 
  constructor(defaultSender) {
    this.defaultSender = defaultSender
  }

  critical(msg, extra, sender) { this.loggerPassToConsole(logLevel.CRITICAL, sender, msg, extra) }
  error(msg, extra, sender) { this.loggerPassToConsole(logLevel.ERROR, sender, msg, extra) }
  warn(msg, extra, sender) { this.loggerPassToConsole(logLevel.WARN, sender, msg, extra) }
  info(msg, extra, sender) { this.loggerPassToConsole(logLevel.INFO, sender, msg, extra) }
  debug(msg, extra, sender) { this.loggerPassToConsole(logLevel.DEBUG, sender, msg, extra) }
  trace(msg, extra, sender) { this.loggerPassToConsole(logLevel.TRACE, sender, msg, extra) }

  loggerPassToConsole(type, sender, msg, extra) {
    sender = sender || this.defaultSender || logger.settings.defaultSender || 'unknown sender'
    logToConsole(type, sender, msg, extra)
  }
}
const defaultLogger = new Logger()

logger.for = (sender) => {
  return new Logger(sender)
}
logger.get = () => {
  return defaultLogger
}


const colors = {
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
  BgWhite: '\x1b[47m',
}

const colorconf = {
  'timestamp': colors.Dim + colors.FgBlack + colors.BgWhite,
  'level': {
    [logLevel.TRACE]: colors.Dim + colors.BgMagenta + colors.FgBlack,
    [logLevel.DEBUG]: colors.Dim + colors.FgBlack + colors.BgGreen,
    [logLevel.INFO]: colors.FgBlue + colors.BgCyan,
    [logLevel.WARN]: colors.Bright + colors.FgYellow + colors.BgBlack + ' ⚠️ ',
    [logLevel.ERROR]: colors.Bright + colors.FgRed + colors.BgBlack + ' ❌',
    [logLevel.CRITICAL]: colors.Bright + colors.BgRed + colors.FgYellow + colors.Blink + ' ☠️ ',
  },
  'sender': colors.Underscore + colors.FgCyan,
  'extra': colors.FgWhite + colors.BgBlue,
}
function objToString(obj) {
  let str
  try {
    if (!logger.settings.prettyPrint) { str = JSON.stringify(obj) }
    else { str = JSON.stringify(obj, null, 4) }
  } catch (err) {
    logToConsole(logLevel.WARN, 'logger-module', 'stringification of object failed', err)
    str = '~(Obj)~[un-stringifiable]~~'
  }
  return str
}
function colorize(part, str) {
  if (!logger.settings.color) return str
  if (part === 'level') return colorconf.level[str] + ' ' + str + ' ' + colors.Reset
  return colorconf[part] + str + colors.Reset
}

// initialize the remote logger
logger.initGraylog = function () {
  
  let server1 = {
    host: logger.settings.host,
    port: logger.settings.port,
  }
  let options = {
    servers: [],
    hostname: os.hostname(),
  }
  options.servers.push(server1)

  let graylogger = new Graylog(options)

  /* istanbul ignore next */
  graylogger.on('error', function (error) {
    console.log(' 👾 !ERROR! while trying to write to graylog2:', error)
  })
  logger.graylogger = graylogger
  logToConsole(logLevel.INFO, 'logger.initGraylog', 'Connection to Graylog log Server initialized', options)
  //if (logger.settings.verboseLocal) console.log(logger)
}

function checkType(type) {
  if (logLevelsSorted.indexOf(type) !== -1) return true
  console.log('unknown logging type: "' + type + '"')
  console.log('known logging types are: ' + logLevelsSorted.join(','))
  return false
}

function logThis(type) {
  return logLevelsSorted.indexOf(logger.settings.level.toUpperCase()) >= logLevelsSorted.indexOf(type)
}

function logLocal(type, sender, msgShort, msgLong, extras) {
  type = type.toUpperCase()
  let msg = (logger.settings.color ? colors.Reset : '') +
            (logger.settings.timestampLocal ? colorize('timestamp', (new Date()).toJSON()) + ' ' : '') + 
            colorize('level', type) + '<' + colorize('sender', sender) + '>: '
  // msg += msgLong ? msgLong : msgShort // nope, msgLong will usually be == extras 
  msg += msgShort
  //if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg)
  //else 
  console.log(msg)
  if (logger.settings.verboseLocal && _.isObject(extras)) {
    console.log(colorize('extra', '↳extras:'), extras)
  } 
}

function slackPost(sender, msgShort) {
  if (!logger.settings.slackHook) {
    logToConsole(logLevel.ERROR, 'slackIntegration', ' 🧨🧨🧨 Cannot post CRITICAL to slack!! No haz webhook!!🧨🧨🧨 ')
    return false
  }
  let msg = os.hostname() + ': <' + sender + '> ' + msgShort
  request.post(
    logger.settings.slackHook, {
      form: `{"text": "${msg}",}`,
    }, 
    function (err, response, body) {
      /* istanbul ignore else */ // testing that spams the slack channel..
      if (err) logToConsole(logLevel.ERROR, 'slackIntegration', ' 🧨🧨🧨 posting to slack failed! 🧨🧨🧨', err)
      else if (!err) { logToConsole(logLevel.INFO, 'slackIntegration', 'response from webhook: ', { response: response, body: body }) }
    })
}

/**
 * logs to console with timestamp
 * @param  {String} type type of message
 * @param  {String} sender sender of the message
 * @param  {String} msgShort short msg
 * @param  {Object} [extras] some extras e.g. job id
 */
function logToConsole(type, sender, msgShort, _extras) {
  type = type.toUpperCase()
  if (_.isNull(msgShort)) return
  if (!checkType(type)) return
  if (!logThis(type)) return

  let extras = {}
  if (_extras) extras = Object.assign({}, _extras)

  if (_.isObject(msgShort)) msgShort = objToString(msgShort)

  // sender = sender.toUpperCase()

  let msgLong = extras.msgLong || _extras
  if (_.isObject(msgLong)) msgLong = objToString(msgLong)

  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog()

    // smallExtras added because just sending the extras json can lead to trouble with indexing on the graylog server if it's not consistent
    let smallExtras = {
      sender: sender,
      type: type,
    }
    if (extras.user_id) smallExtras.user_id = extras.user_id
    if (extras.filename) smallExtras.filename = extras.filename

    // limit size of msgLong to avoid excessive storage consumtion and failures
    // (up to 32766 byte strings should be possible, but 10k characters is already plenty for reasonable logging output)
    const msgLongGray = (typeof msgLong === 'string' ? msgLong.substring(0,10000) : null)

    try {
      logger.graylogger.log(msgShort, msgLongGray, smallExtras)
    } catch (e) {
      logLocal('error', 'logger', 'trying to log something illegal? msgShort: ' + msgShort + ' msgLong: ' + msgLong + ' extras: ' + extras + ' orig msg: ' + e, false, { extras: extras, error: e })
    }
    if (type === logLevel.CRITICAL) {
      slackPost(sender, msgShort)
    }
  }

  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, msgLong, _extras)
  }
}

logToConsole.TRACE = logLevel.TRACE
logToConsole.DEBUG = logLevel.DEBUG
logToConsole.INFO = logLevel.INFO
logToConsole.WARN = logLevel.WARN
logToConsole.ERROR = logLevel.ERROR
logToConsole.CRITICAL = logLevel.CRITICAL

export { 
  logToConsole,
  logger as Logger,
  logLevel,
}
