import * as assert from 'assert'
import { resolveCountryToISO2, resolveCountryToISO3 } from '../src/index'
// import { logger } from '../src/logger'

// logger.settings.development_mode = true
// logger.settings.color = true
// logger.settings.verboseLocal = true
// logger.settings.level = 'DEBUG'
// logger.settings.host = 'lalala'

export default function () {

  let testsISO3 = [
    ['Deutschland', 'DEU'],
    ['deutschland', 'DEU'],
    ['DEUTSCHLAND', 'DEU'],
    ['DEU', 'DEU'],
    ['DE', 'DEU'],
    ['SCHLAND', null],
    ['Österreich', 'AUT'],
    ['oEsterreich', 'AUT'],
    ['Schweiz', 'CHE'],
    ['München', null],
    ['Allemania', null],
    ['Britannien', null],
    [42, null],
    [new Error('what?'), null],
    [null, null],
    ['the united sTaTEs of aMerica', 'USA'],
    ['republik bulgarien', 'BGR'],
    ['REPUBLIK BULGARIEN', 'BGR'],
    ['united kingDom', 'GBR'],
  ]

  let testsISO2 = [
    ['Deutschland', 'DE'],
    ['deutschland', 'DE'],
    ['DEUTSCHLAND', 'DE'],
    ['SCHLAND', null],
    ['Österreich', 'AT'],
    ['oEsterreich', 'AT'],
    ['Schweiz', 'CH'],
    ['München', null],
    ['Allemania', null],
    ['Britannien', null],
    [42, null],
    [new Error('what?'), null],
    [null, null],
    ['united kingDom', 'GB'],
    ['D', 'DE'],
    ['A', 'AT'],
    ['america', 'US'],
    [[234,214,345], null],
    [[1312123,() => 2938123], null],
  ]

  const testFuncISO3 = (test) => {
    assert.strictEqual(resolveCountryToISO3(test[0]), test[1])
    // console.log(test)
  }

  const testFuncISO2 = (test) => {
    assert.strictEqual(resolveCountryToISO2(test[0]), test[1])
  }
  
  describe('<== geo ==>', () => {
    describe('[resolveCountryToISO3]', () => {

      let i = -1
      let test
      while (testsISO3[++i]) {
        test = testsISO3[i]
        it(test[0] + ' => ' + test[1], testFuncISO3.bind(null, test))
      }
    })
    describe('[resolveCountryToISO2]', function () {

      let i = -1
      let test
      while (testsISO2[++i]) {
        test = testsISO2[i]
        it(test[0] + ' => ' + test[1], testFuncISO2.bind(null, test))
      }
      /*
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

      */

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
}