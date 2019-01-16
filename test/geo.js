import * as assert from 'assert'
import { resolveCountryToISO2, resolveCountryToISO3 } from '../src/index'
import { logger } from '../src/logger'

logger.settings.development_mode = true
logger.settings.color = true
logger.settings.verboseLocal = true
logger.settings.level = 'DEBUG'
logger.settings.host = 'lalala'

export default function () {
  
  describe('<== geo ==>', () => {
    describe('[resolveCountryToISO3]', () => {
      it('Deutschland => DEU', function () {
        assert.strictEqual(resolveCountryToISO3('Deutschland'), 'DEU')
      })
      it('deutschland => DEU', function () {
        assert.strictEqual(resolveCountryToISO3('deutschland'), 'DEU')
      })
      it('Österreich => AUT', function () {
        assert.strictEqual(resolveCountryToISO3('Österreich'), 'AUT')
      })
      it('Oesterreich => AUT', function () {
        assert.strictEqual(resolveCountryToISO3('Oesterreich'), 'AUT')
      })
      it('Schweiz => CHE', function () {
        assert.strictEqual(resolveCountryToISO3('Schweiz'), 'CHE')
      })
      it('München => null', function () {
        assert.strictEqual(resolveCountryToISO3('München'), null)
      })
      it('Allemania => DEU', function () {
        assert.strictEqual(resolveCountryToISO3('Allemania'), null)
      })
      it('Germanien => DEU', function () {
        assert.strictEqual(resolveCountryToISO3('Germanien'), null)
      })
      it('Deutchland => null', function () {
        assert.strictEqual(resolveCountryToISO3('Deutchland'), null)
      })
      it('Deutschlan => null', function () {
        assert.strictEqual(resolveCountryToISO3('Deutschlan'), null)
      })
      it('42 => null', function () {
        assert.strictEqual(resolveCountryToISO3(42), null)
      })
      it('new Error() => null', function () {
        assert.strictEqual(resolveCountryToISO3(new Error()), null)
      })
      it('null => null', function () {
        assert.strictEqual(resolveCountryToISO3(null), null)
      })
    })
    describe('[resolveCountryToISO2]', function () {
      it('Deutschland => DE', function () {
        assert.strictEqual(resolveCountryToISO2('Deutschland'), 'DE')
      })
      it('De => DE', function () {
        assert.strictEqual(resolveCountryToISO2('De'), 'DE')
      })
      it('Deu => DE', function () {
        assert.strictEqual(resolveCountryToISO2('Deu'), 'DE')
      })
      it('xyz => null', function () {
        assert.strictEqual(resolveCountryToISO2('xyz'), null)
      })
      it('42 => null', function () {
        assert.strictEqual(resolveCountryToISO2(42), null)
      })
      it('new Error() => null', function () {
        assert.strictEqual(resolveCountryToISO2(new Error()), null)

        /* I tried more to trip the fkt but it seems pretty resistant
        logger.info(' ' +
          resolveCountryToISO2('@3') +
          resolveCountryToISO2('💣') +
          resolveCountryToISO2('@§') +
          resolveCountryToISO2('200') +
          resolveCountryToISO2('-44') +
          resolveCountryToISO2('+!') +
          resolveCountryToISO2([2, 3]) +
          resolveCountryToISO2({der: 'sepp'}) +
          resolveCountryToISO2({ der: 'sepp' }) +
          resolveCountryToISO2([null, undefined]) +
          resolveCountryToISO2([1,2,3,4]))
          */
      })
    })
  })
}