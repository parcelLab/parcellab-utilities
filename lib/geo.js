"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveCountryToISO2 = resolveCountryToISO2;
exports.resolveCountryToISO3 = resolveCountryToISO3;
var Country = _interopRequireWildcard(require("countryjs"));
var _lodash = require("lodash");
var _logger = require("./logger");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * takes unidentified country info and tries to get the ISO2/ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @param  {integer} digits     2 or 3 digit response
 * @return {string}             ISO2/ISO3 code
 */
function resolveCountryToISO(countryInfo, digits) {
  if (!countryInfo || [2, 3].indexOf(digits) === -1) return null;
  var ci = typeof countryInfo.trim === 'function' ? countryInfo.trim() : countryInfo;
  var c;
  try {
    if (ci.length === 3) {
      c = Country.ISOcodes((0, _lodash.isString)(ci) ? ci.toUpperCase() : ci, 'ISO3');
    } else if (ci.length === 2) {
      c = Country.ISOcodes((0, _lodash.isString)(ci) ? ci.toUpperCase() : ci);
    } else {
      c = Country.ISOcodes(ci, 'name');
    }

    // check for special cases
    if (!c && (0, _lodash.isString)(ci)) {
      // make it great again
      if (ci.toUpperCase() === 'THE UNITED STATES OF AMERICA' || ci.toUpperCase() === 'AMERICA') c = Country.ISOcodes('USA', 'ISO3');else if (ci.length === 1) {
        if (ci === 'D') c = Country.ISOcodes('DEU', 'ISO3');
        if (ci === 'A') c = Country.ISOcodes('AUT', 'ISO3');
      } else if (ci.toUpperCase() === 'REPUBLIK BULGARIEN') c = Country.ISOcodes('BGR', 'ISO3');
    }
  } catch (e) {
    // actually could not find a way to make it throw...
    /* istanbul ignore next */
    _logger.logger.warn('caught exception', e, 'resolveCountryToISO');
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