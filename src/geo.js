import * as Country from 'countryjs'
import { isString } from 'lodash'

import { logger } from './logger'

/**
 * takes unidentified country info and tries to get the ISO2/ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @param  {integer} digits     2 or 3 digit response
 * @return {string}             ISO2/ISO3 code
 */
function resolveCountryToISO(countryInfo, digits) {
  if (!countryInfo || [2,3].indexOf(digits) === -1) return null
  let ci = typeof countryInfo.trim === 'function' ? countryInfo.trim() : countryInfo
  let c


  try {
    if (ci.length === 3) {
      c = Country.ISOcodes(isString(ci) ? ci.toUpperCase() : ci, 'ISO3')
    } else if (ci.length === 2) {
      c = Country.ISOcodes(isString(ci) ? ci.toUpperCase() : ci)
    } else {
      c = Country.ISOcodes(ci, 'name')
    } 

    // check for special cases
    if (!c && isString(ci)) { 

      // make it great again
      if ((ci.toUpperCase() === 'THE UNITED STATES OF AMERICA')
      ||  (ci.toUpperCase() === 'AMERICA')
      ) c = Country.ISOcodes('USA', 'ISO3')

      else if (ci.length === 1) {
        if (ci === 'D') c = Country.ISOcodes('DEU', 'ISO3')
        if (ci === 'A') c = Country.ISOcodes('AUT', 'ISO3')
      }

      else if (ci.toUpperCase() === 'REPUBLIK BULGARIEN') c = Country.ISOcodes('BGR', 'ISO3')
    }
    
  } catch (e) { // actually could not find a way to make it throw...
    /* istanbul ignore next */
    logger.warn('caught exception', e, 'resolveCountryToISO')
  }

  if (!c) return null
  if (digits === 2) return c.alpha2
  return c.alpha3
}


/**
 * takes unidentified country info and tries to get the ISO2 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO2 code
 */
function resolveCountryToISO2(countryInfo) {
  return resolveCountryToISO(countryInfo, 2)
}

/**
 * takes unidentified country info and tries to get the ISO3 Code
 * @param  {String} countryInfo some text about the country
 * @return {string}             ISO3 code
 */
function resolveCountryToISO3(countryInfo) {
  return resolveCountryToISO(countryInfo, 3)
}

export {
  resolveCountryToISO3,
  resolveCountryToISO2,
}