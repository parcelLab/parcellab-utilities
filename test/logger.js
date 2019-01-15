import * as assert from 'assert'
import { logToConsole, logger } from '../src/index'

export default function () {
  describe('<== logger ==>', () => {
    describe('[basic use]', () => {
      it('⚠️  this testsuite does not cover production remote logging', () => {
        logger.settings.level = 'DEBUG'
        logger.settings.developer_mode = false
        logger.settings.verboseLocal = false
        logger.settings.color = false
        assert.strictEqual(logger.debug('this wont go anywhere'),undefined)
      })
      it('the following should log something', () => {
        logger.settings.color = true
        logger.settings.developer_mode = true
        assert.ok(true)
      })
      it('in color! without throwing up!', () => {
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
        logger.settings.verboseLocal = true
        assert.strictEqual(
          logToConsole('error', 'terror', 'this is not a test', { really: 'just kidding' }),
          undefined)
        logger.settings.verboseLocal = false
      })
      it('should adhere the defaultSender setting', function () {
        logger.settings.defaultSender = 'iAmTheDefaultSender!'
        assert.strictEqual(
          logger.debug('where is my default message?'),
          undefined)
      })
      it('or fall back to the default string', function () {
        logger.settings.defaultSender = null
        assert.strictEqual(logger.info('hiding in the shadows'), undefined)
      })
      it('should not log above its log level', function () {
        logger.settings.level = 'ERROR'
        assert.strictEqual(logger.info('bla'), undefined)
        assert.strictEqual(logger.warn('bla'), undefined)
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
      })
    })
    describe('[what does the logger look like?]', function () {
      it('aha!', function () {
        logger.settings.verboseLocal = true
        assert.strictEqual(logger.initGraylog(), undefined)
        logger.settings.level = 'DEBUG' // full logging for following tests
      })
    })
  })
}