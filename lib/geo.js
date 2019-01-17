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
    /* istanbul ignore next */
    _logger.logger.warn('caught exception', e, 'resolveCountryToISO');
  }

  if (!c && _.isString(ci)) {
    // check for special cases

    // make it great again
    if (ci.toUpperCase() === 'THE UNITED STATES OF AMERICA' || ci.toUpperCase() === 'AMERICA') c = Country.ISOcodes('USA', 'ISO3');else if (ci.length === 1) {
      if (ci === 'D') c = Country.ISOcodes('DEU', 'ISO3');
      if (ci === 'A') c = Country.ISOcodes('AUT', 'ISO3');
    } else if (ci.toUpperCase() === 'REPUBLIK BULGARIEN') c = Country.ISOcodes('BGR', 'ISO3');
  }

  if (!c) return null;
  if (digits === 2) return c.alpha2;
  return c.alpha3;
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

/*
  if (countryInfo && !_.isString(countryInfo)) countryInfo = countryInfo + '';
  if (countryInfo) {
    var ci = countryInfo.trim();

    if (ci.length === 1) {
      if (ci === 'D') return 'DEU';
      else if (ci === 'A') return 'AUT';
    }

    if (ci.length === 2) {
      if (ci === 'UK') return 'GBR';
    }

    var c;
    try {
      c = Country.ISOcodes(ci);
    } catch (a) {
      try {
        c = Country.ISOcodes(ci, 'ISO3');
      } catch (b) {
        try {
          c = Country.ISOcodes(ci, 'name');
        } catch (d) {
          try {
            c = Country.ISOcodes(ci, 'Number');
          } catch (d) {
            c = null;
          }
        }
      }
    }
    */

/*
     var c;
try {
  c = Country.ISOcodes(ci.toUpperCase());
  if (!c) throw Error();
} catch (e) {
  try {
    c = Country.ISOcodes(ci.toUpperCase(), 'ISO3');
    if (!c) throw Error();
  } catch (f) {
    try {
      c = Country.ISOcodes(capitalizeFirstLetter(ci), 'name');
      if (!c) throw Error();
    } catch (g) {
      return null;
    }
  }
}
*/