'use strict';

var _logger = require('./logger');

var _geo = require('./geo');

module.exports = {
  logToConsole: _logger.logToConsole,
  Logger: _logger.Logger,
  resolveCountryToISO2: _geo.resolveCountryToISO2,
  resolveCountryToISO3: _geo.resolveCountryToISO3
};