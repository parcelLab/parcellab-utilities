import * as assert from 'assert'
import { isTrue, isFalse, isProductionEnv } from '../src/util'


export default function () {

  let testsTruth = [
    [true, true],
    [1, true],
    [500000, true],
    ['true', true],
    ['1', true],
    ['yes', true],
    ['on', true],
    [false, false],
    [0, false],
    [-5, false],
    ['0', false],
    ['false', false],
    ['no', false],
    ['off', false],
    ['blablablabla', false],
    [null, false],
    [undefined, false],
    [{ 'key': 'val' }, false],
    [[1,2,3], false],
  ]

  let testsFalse = [
    [true, false],
    [1, false],
    [500000, false],
    ['true', false],
    ['1', false],
    ['yes', false],
    ['on', false],
    [false, true],
    [0, true],
    [-5, true],
    ['0', true],
    ['false', true],
    ['no', true],
    ['off', true],
    ['blablablabla', false],
    [null, false],
    [undefined, false],
    [{ 'key': 'val' }, false],
    [[1, 2, 3], false],
  ]


  let testsProdEnv = [

    [ [ // init
      ['PRODUCTION', undefined],
      ['DEV', undefined],
      ['DEVELOPMENT', undefined],
      ['DEBUG', undefined],
      ['TESTMODE', undefined],
    ], true ],


    [ [
      ['PRODUCTION', 'NO'],
    ], false ],


    [ [
      ['PRODUCTION', undefined],
      ['DEBUG', '1'],
    ], false ],


    [ [
      ['PRODUCTION', 'yes'],
    ], true ],
  ]


  const testFuncIsTrue = (test) => {
    assert.strictEqual(isTrue(test[0]), test[1])
  }

  const testFuncIsFalse = (test) => {
    assert.strictEqual(isFalse(test[0]), test[1])
  }

  const testFuncProdEnv = (test) => {
    let i = -1
    while (++i < test[0].length) {
      process.env[test[0][i][0]] = test[0][i][1] 
    }
    assert.strictEqual(isProductionEnv(), test[1])
  }
  
  describe('<== util ==>', () => {
    describe('[isTrue()]', () => {

      let i = -1
      let test
      while (testsTruth[++i]) {
        test = testsTruth[i]
        it((typeof test[0] === 'string' ? '\'' + test[0] + '\'' : test[0]) + ' => ' + test[1], testFuncIsTrue.bind(null, test))
      }
    })

    describe('[isFalse()]', () => {

      let i = -1
      let test
      while (testsFalse[++i]) {
        test = testsFalse[i]
        it((typeof test[0] === 'string' ? '\'' + test[0] + '\'' : test[0]) + ' => ' + test[1], testFuncIsFalse.bind(null, test))
      }
    })

    describe('[isProductionEnv()]', function () {
      console.log('note: we cannot really set environment vars from the runtime, just mess with process.env')

      // lets be well behaved and only temporary tamper with the env vals to not interfere with other tests
      let i = -1
      let backupVals = []
      let keys = testsProdEnv[0]
      while (keys[++i]) {
        backupVals.push([keys[i][0], keys[i][1]])
      }


      i = -1
      let test
      while (testsProdEnv[++i]) {
        test = testsProdEnv[i]
        let itstr = '{'
        for (let i = 0; i < test[0].length; i++) {
          itstr += test[0][i][0] + ': ' + test[0][i][1] + ', '
        }
        itstr = itstr.substr(0, itstr.length-2) + '} => ' + test[1]
        it(itstr, testFuncProdEnv.bind(null, test))
      }

      // now restor the vals we saved earlier
      i = -1
      while (backupVals[++i]) {
        process.env[backupVals[i][0]] = backupVals[i][1]
      }

    })
  })
}