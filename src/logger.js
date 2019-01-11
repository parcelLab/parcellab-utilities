const os = require('os')
const _ = require('underscore')
const graylog2 = require('graylog2')
const Graylog = graylog2.graylog

const logger = {
  settings: {
    level:          process.env.LOG_LEVEL || 'DEBUG',
    host:           process.env.LOG_HOST || '127.0.0.1',
    port:           process.env.LOG_PORT || null,
    saveLocal:      process.env.LOG_LOCAL || false,
    developer_mode: !process.env.PRODUCTION,
    defaultSender:  undefined,
    verboseLocal:   false,
  },
  graylogger: null,
}

// order is important! (severe ==> verbose)
const logLevels = ['ERROR', 'WARN', 'INFO', 'DEBUG']


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
    console.error('Error while trying to write to graylog2:', error)
  })
  logger.graylogger = graylogger
  logger.info('Connection to Graylog log Server initialized', null, 'logger.initGraylog')
  if (logger.settings.verboseLocal) console.log(logger)
}

function checkType(type) {
  if (logLevels.indexOf(type) !== -1) return true
  console.log('unknown logging type: "' + type + '"')
  console.log('known logging types are: ' + logLevels.join(','))
  return false
}

function logThis(type) {
  return logLevels.indexOf(logger.settings.level) >= logLevels.indexOf(type)
}

function logLocal(type, sender, msgShort, msgLong, extras) {
  let msg = (new Date()).toJSON() + ' ' + type + ': <' + sender + '> '
  msg += msgLong ? msgLong : msgShort
  if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg)
  else console.log(msg)
  if (logger.settings.verboseLocal && _.isObject(extras)) console.log(extras)
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

  if (_.isObject(msgShort)) msgShort = JSON.stringify(msgShort)

  // sender = sender.toUpperCase()

  let msgLong = ''
  if (extras.msgLong) {
    msgLong = extras.msgLong
    if (_.isObject(msgLong)) msgLong = JSON.stringify(msgLong)
    delete extras.msgLong
  }

  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog()
    extras.sender = sender
    extras.type = type
    try {
      logger.graylogger.log(msgShort, msgLong, extras)
    } catch (e) {
      logLocal('error', 'logger', 'trying to log something illegal? msgShort: ' + msgShort + ' msgLong: ' + msgLong + ' extras: ' + extras + ' orig msg: ' + e)
    }
  }

  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, msgLong, _extras)
  }
}

function loggerPassToConsole(type, sender, msg, extra) {
  sender = sender || logger.settings.defaultSender || 'unknown sender'
  logToConsole(type, sender, msg, extra)
}

logger.error = (msg, extra, sender) => loggerPassToConsole('ERROR', sender, msg, extra)
logger.warn = (msg, extra, sender) => loggerPassToConsole('WARN', sender, msg, extra)
logger.info = (msg, extra, sender) => loggerPassToConsole('INFO', sender, msg, extra)
logger.debug = (msg, extra, sender) => loggerPassToConsole('DEBUG', sender, msg, extra)


export { 
  logToConsole,
  logger,
}