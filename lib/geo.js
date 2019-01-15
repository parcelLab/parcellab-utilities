'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveCountryToISO2 = exports.resolveCountryToISO3 = undefined;

var _logger = require('./logger');

var _countryjs = require('countryjs');

var Country = _interopRequireWildcard(_countryjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _ = require('underscore');

/**
 * takes unidentified country info and tries to get the ISO2/ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @param  {integer} digits     2 or 3 digit response
 * @return {string}             ISO2/ISO3 code
 */
function resolveCountryToISO(countryInfo, digits) {
  if (!countryInfo || [2, 3].indexOf(digits) === -1) return null;
  var ci = typeof countryInfo.trim === 'function' ? countryInfo.trim() : countryInfo;
  var c = void 0;

  try {
    if (ci.length === 3) {
      c = Country.ISOcodes(_.isString(ci) ? ci.toUpperCase() : ci, 'ISO3');
    } else if (ci.length === 2) {
      c = Country.ISOcodes(_.isString(ci) ? ci.toUpperCase() : ci);
    } else {
      c = Country.ISOcodes(ci, 'name');
    }
  } catch (e) {
    // actually could not find a way to make it throw...
    _logger.logger.warn('caught exception', e, 'resolveCountryToISO');
    return null;
  }

  if (!c) return null;
  if (digits === 2) return c.alpha2;
  if (digits === 3) return c.alpha3;
}

/**
 * takes unidentified country info and tries to get the ISO2 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO2 code
 */
function resolveCountryToISO2(countryInfo) {
  return resolveCountryToISO(countryInfo, 2);
}

/**
 * takes unidentified country info and tries to get the ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO3 code
 */
function resolveCountryToISO3(countryInfo) {
  return resolveCountryToISO(countryInfo, 3);
}

exports.resolveCountryToISO3 = resolveCountryToISO3;
exports.resolveCountryToISO2 = resolveCountryToISO2;