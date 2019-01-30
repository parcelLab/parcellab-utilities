import { Logger } from '../src/index'

const logger = Logger.for('module1')


logger.warn('sourced module 1, sender of this should be module1')

module.exports = function () {
  logger.warn('function of module1, sender should be module1')
}