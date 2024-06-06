const os = require("os");
const { isNull, isObject } = require("lodash");
const graylog2 = require("graylog2");
const Sentry = require("@sentry/node");

const Graylog = graylog2.graylog;

import { isTrue, isProductionEnv } from "./util";

const logger = {
  settings: {
    level: process.env.LOG_LEVEL || "DEBUG",
    host: process.env.LOG_HOST || "127.0.0.1",
    port: process.env.LOG_PORT || 54321,
    saveLocal: isTrue(process.env.LOG_LOCAL),
    timestampLocal: isTrue(process.env.LOG_TIMESTAMP),
    verboseLocal: isTrue(process.env.LOG_EXTRA),
    color: isTrue(process.env.LOG_COLOR),
    prettyPrint: isTrue(process.env.LOG_PRETTY),
    developer_mode: !isProductionEnv(),
    // defaultSender:  undefined,
    slackHook: process.env.LOG_SLACK_HOOK || null,
  },
  graylogger: null,
};

// order is important! (severe ==> verbose)
const logLevels = ["CRITICAL", "ERROR", "WARN", "INFO", "DEBUG", "TRACE"];

//to enable logger instances have a default sender - shit's mainly singletonic otherwise
class Logger {
  constructor(defaultSender) {
    this.defaultSender = defaultSender;
  }

  critical(msg, extra, sender) {
    this.loggerPassToConsole("CRITICAL", sender, msg, extra);
  }
  error(msg, extra, sender) {
    this.loggerPassToConsole("ERROR", sender, msg, extra);
  }
  warn(msg, extra, sender) {
    this.loggerPassToConsole("WARN", sender, msg, extra);
  }
  info(msg, extra, sender) {
    this.loggerPassToConsole("INFO", sender, msg, extra);
  }
  debug(msg, extra, sender) {
    this.loggerPassToConsole("DEBUG", sender, msg, extra);
  }
  trace(msg, extra, sender) {
    this.loggerPassToConsole("TRACE", sender, msg, extra);
  }

  loggerPassToConsole(type, sender, msg, extra) {
    sender =
      sender ||
      this.defaultSender ||
      logger.settings.defaultSender ||
      "unknown sender";
    logToConsole(type, sender, msg, extra);
  }
}
const defaultLogger = new Logger();

logger.for = (sender) => {
  return new Logger(sender);
};
logger.get = () => {
  return defaultLogger;
};

const colors = {
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
  BgWhite: "\x1b[47m",
};

const colorconf = {
  timestamp: colors.Dim + colors.FgBlack + colors.BgWhite,
  level: {
    TRACE: colors.Dim + colors.BgMagenta + colors.FgBlack,
    DEBUG: colors.Dim + colors.FgBlack + colors.BgGreen,
    INFO: colors.FgBlue + colors.BgCyan,
    WARN: colors.Bright + colors.FgYellow + colors.BgBlack + " ⚠️ ",
    ERROR: colors.Bright + colors.FgRed + colors.BgBlack + " ❌",
    CRITICAL:
      colors.Bright + colors.BgRed + colors.FgYellow + colors.Blink + " ☠️ ",
  },
  sender: colors.Underscore + colors.FgCyan,
  extra: colors.FgWhite + colors.BgBlue,
};
function objToString(obj) {
  let str;
  try {
    if (!logger.settings.prettyPrint) {
      str = JSON.stringify(obj);
    } else {
      str = JSON.stringify(obj, null, 4);
    }
  } catch (err) {
    logToConsole(
      "WARN",
      "logger-module",
      "stringification of object failed",
      err,
    );
    str = "~(Obj)~[un-stringifiable]~~";
  }
  return str;
}
function colorize(part, str) {
  if (!logger.settings.color) return str;
  if (part === "level")
    return colorconf.level[str] + " " + str + " " + colors.Reset;
  return colorconf[part] + str + colors.Reset;
}

// initialize the remote logger
logger.initGraylog = function () {
  let server1 = {
    host: logger.settings.host,
    port: logger.settings.port,
  };
  let options = {
    servers: [],
    hostname: os.hostname(),
  };
  options.servers.push(server1);

  let graylogger = new Graylog(options);

  /* istanbul ignore next */
  graylogger.on("error", function (error) {
    console.log(" 👾 !ERROR! while trying to write to graylog2:", error);
  });
  logger.graylogger = graylogger;
  logToConsole(
    "INFO",
    "logger.initGraylog",
    "Connection to Graylog log Server initialized",
    options,
  );
  //if (logger.settings.verboseLocal) console.log(logger)
};

function checkType(type) {
  if (logLevels.indexOf(type) !== -1) return true;
  console.log('unknown logging type: "' + type + '"');
  console.log("known logging types are: " + logLevels.join(","));
  return false;
}

function logThis(type) {
  return (
    logLevels.indexOf(logger.settings.level.toUpperCase()) >=
    logLevels.indexOf(type)
  );
}

function logLocal(type, sender, msgShort, msgLong, extras) {
  type = type.toUpperCase();
  let msg =
    (logger.settings.color ? colors.Reset : "") +
    (logger.settings.timestampLocal
      ? colorize("timestamp", new Date().toJSON()) + " "
      : "") +
    colorize("level", type) +
    "<" +
    colorize("sender", sender) +
    ">: ";
  // msg += msgLong ? msgLong : msgShort // nope, msgLong will usually be == extras
  msg += msgShort;
  //if (['ERROR', 'WARN'].indexOf(type) !== -1) console.error(msg)
  //else
  console.log(msg);
  if (logger.settings.verboseLocal && isObject(extras)) {
    console.log(colorize("extra", "↳extras:"), extras);
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

  let extras = {
    ...getSentryExtras(),
  };
  if (_extras) extras = Object.assign({}, _extras);

  if (isObject(msgShort)) msgShort = objToString(msgShort);

  // sender = sender.toUpperCase()

  let msgLong = extras.msgLong || _extras;
  if (isObject(msgLong)) msgLong = objToString(msgLong);
  // in production mode send the message to graylog as well.
  if (!logger.settings.developer_mode) {
    if (logger.graylogger === null) logger.initGraylog();

    // smallExtras added because just sending the extras json can lead to trouble with indexing on the graylog server if it's not consistent
    let smallExtras = {
      sender: sender,
      type: type,
    };
    if (extras.user_id) smallExtras.user_id = extras.user_id;
    if (extras.filename) smallExtras.filename = extras.filename;

    // limit size of msgLong to avoid excessive storage consumtion and failures
    // (up to 32766 byte strings should be possible, but 10k characters is already plenty for reasonable logging output)
    const msgLongGray =
      typeof msgLong === "string" ? msgLong.substring(0, 10000) : null;

    try {
      logger.graylogger.log(msgShort, msgLongGray, smallExtras);
    } catch (e) {
      logLocal(
        "error",
        "logger",
        "trying to log something illegal? msgShort: " +
          msgShort +
          " msgLong: " +
          msgLong +
          " extras: " +
          extras +
          " orig msg: " +
          e,
        false,
        { extras: extras, error: e },
      );
    }
  }

  if (logger.settings.developer_mode || logger.settings.saveLocal) {
    logLocal(type, sender, msgShort, msgLong, _extras);
  }
}

function getSentryExtras() {
  const activeSpan = Sentry.getActiveSpan();
  const rootSpan = activeSpan ? Sentry.getRootSpan(activeSpan) : undefined;
  const sentryTraceId = rootSpan
    ? Sentry.spanToTraceHeader(rootSpan)
    : undefined;

  const sentryBaggageId = rootSpan
    ? Sentry.spanToBaggageHeader(rootSpan)
    : undefined;

  return {
    trace: sentryTraceId,
    sentryBaggage: sentryBaggageId,
  };
}

export { logToConsole, logger as Logger };
