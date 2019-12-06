import * as assert from 'assert'
import { logToConsole, Logger } from '../src/index'
const logger = Logger.get()

export default function () {
  describe('<== logger ==>', () => {
    describe('[basic use]', () => {
      it('⚠️  this testsuite does not cover production remote logging', () => {
        Logger.settings.level = 'TRACE'
        Logger.settings.saveLocal = true
        Logger.settings.developer_mode = false
        Logger.settings.verboseLocal = false
        Logger.settings.color = false
        assert.strictEqual(logger.debug('this wont go anywhere'),undefined)
      })
      it('the following should log something', () => {
        Logger.settings.color = true
        Logger.settings.developer_mode = true
        Logger.settings.timestampLocal = true
        assert.ok(true)
      })
      it('in color! without throwing up!', () => {
        assert.strictEqual(
          logger.trace('this message is on the highest log level for adding entropic noise with little additionaly value', null, 'Tracy'),
          undefined)
        assert.strictEqual(
          logToConsole('warn', 'warner brother', 'shrt wrn', { msgLong: { text: 'really super ultra mega extremely long warning log message' } }),
          undefined)
        assert.strictEqual(
          logger.warn('shrt wrn', { msgLong: 'similar super long warning log message but with different syntax' }, 'warner brother'),
          undefined)
        assert.strictEqual(
          logger.error({ id: 23123, msg: 'bla' }, null, 'objective message'),
          undefined)
      })
      it('loggig should be verbose if settings.verboseLocal', () => {
        Logger.settings.verboseLocal = true
        assert.strictEqual(
          logToConsole('error', 'terror', 'this is not a test', { really: 'just kidding' }),
          undefined)
        Logger.settings.verboseLocal = false
        Logger.settings.timestampLocal = false
      })
      it('should adhere the defaultSender setting', function () {
        Logger.settings.color = false
        Logger.settings.defaultSender = 'iAmTheDefaultSender!'
        assert.strictEqual(
          logger.debug('where is my default message?'),
          undefined)
        Logger.settings.color = true
      })
      it('or fall back to the default string', function () {
        Logger.settings.defaultSender = null
        assert.strictEqual(logger.info('hiding in the shadows'), undefined)
      })
      it('should survive objects with circular references', function () {
        let obj = {}
        obj.self = obj
        assert.strictEqual(logger.warn('this onbect wont stringify well: ', null, 'circulogga'), undefined)
        assert.strictEqual(logger.info(obj, null, 'circulogga'), undefined)
      })
      it('should not log above its log level', function () {
        Logger.settings.level = 'ERROR'
        assert.strictEqual(logger.info('bla'), undefined)
        assert.strictEqual(logger.warn('bla'), undefined)
      })
      it('should post on slack  when the level is critical (in production mode)', function () {
        Logger.settings.developer_mode = false
        Logger.settings.prettyPrint = true
        Logger.settings.slackHook = 'https://phone'
        assert.strictEqual(logger.critical('//phone is actially not a slack hook ', null, 'fakeNews'), undefined)
      })
      it('but loudly complain when the slack hook is not provided by the env', function () {
        Logger.settings.slackHook = null
        assert.strictEqual(logger.critical('give me some slack please!', { user_id: 12, filename: 'test' }), undefined)
      })
      it('and thats what a cricital should look like on the console in dev mode', function () {
        Logger.settings.developer_mode = true
        assert.strictEqual(logger.critical(' SYSTEM LOAD OVER 90000! ', { load: 90001 }, 'vegetad'), undefined)
      })

    })
    describe('[basic abuse]', function () {
      it('should complain on unknown types', () => {
        assert.strictEqual(
          logToConsole('unknownType', 'bollocks', 'lost message'),
          undefined)
      })
      it('should fail silently', function () {
        assert.strictEqual(
          logToConsole('error', 'void', null, { msgLong: 'but really?' }),
          undefined)
      })
      it('or with error', function () {
        
        assert.throws(function () {
          logToConsole({ objetc: 'what' }) },
        TypeError)
        // Logger.settings.port = port
      })
    })
    describe('[if graylog gets crap config]', function () {
      it('it should puke up on you', function () {
        Logger.settings.verboseLocal = true
        Logger.settings.developer_mode = false
        let port = Logger.settings.port
        Logger.settings.port = null
        assert.strictEqual((() => {
          Logger.initGraylog()
          logToConsole('error', 'graylog', 'this should raise an error', { what: 'tehfck' })
        })(), undefined)
        Logger.settings.level = 'DEBUG' // decent logging for following tests
        Logger.settings.verboseLocal = false // but dont overdo
        Logger.settings.developer_mode = true
      })
    })
    describe('[loggers should locally scope their own defaultSender]', function () {
      let mod1
      let mod2
      it('we have required both submodules', function () {
        mod1 = require('./logger-module1')
        mod2 = require('./logger-module2')
        assert.ok(true)
      })
      it('the default sender value should stay local', function () {
        mod2()
        assert.strictEqual(mod1(), undefined)
      })
    })
  })
}