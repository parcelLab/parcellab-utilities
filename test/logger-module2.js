import { Logger } from '../src/index'

const logger = Logger.for('module2')

logger.warn('sourced module 2, sender of this should be module2')

module.exports = function () {
  logger.warn('function of module2, sender should be module2')
}