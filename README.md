# parcellab-utilities 
npm package for shared functionality

**install:** `npm i --save parcellab/parcellab-utilities`

## logger

### import
```javascript
const logToConsole = require('parcellab-utilities').logToConsole
const logger = require('parcellab-utilities').Logger.for('yourScriptName')
```
*or*
```javascript
import { logToConsole, Logger } from 'parcellab-utilities'
const logger = Logger.for('yourScriptName') 
```
### config
with environment variables
```bash
LOG_LEVEL=DEBUG
LOG_HOST=127.128.129.130
LOG_PORT=12345
LOG_LOCAL=1
LOG_COLOR=1
LOG_EXTRA=1
PRODUCTION=0
```
and/or at runtime
```javascript
Logger.settings.defaultSender = 'nameOfSomeScript'
Logger.settings.verboseLocal = true // include extra object data in output
Logger.settings.color = true // colorize local log output
Logger.settings.host = '8.8.8.8'
(...)
```
_**NOTE:&** Logger is a **singleton** so change to the settings can affect logging of other modules._

### use
```javascript
// syntax: logger.level(message, [ extra, [ sender]])
logger.trace('>>', { data: [1,0,1,1,0], msgLong: 'a bit has shifted!' })
logger.debug('invoking some procedure', obj )
logger.info('this message is really informative')
logger.warn('something is smoking', null, 'smokeAlertSender') // custom sender
logger.error('grab your towels and panic: ', err)
logger.critical('hello slack! you should really do something about this NOW', err, 'importantFkt')
```
*or*
```javascript
logToConsole(level, sender, message, extra)
```

## geo

### import
```javascript
const resolveCountryToISO3 = require('parcellab-utilities').resolveCountryToISO3
```
*or*
```javascript
import { resolveCountryToISO3 } from 'parcellab-utilities'
```

### use
`resolveCountryToISO3('Spain')` `// returns 'ESP'`

it takes strings or anything, don't expect miracles. The underlying lib `countryjs` recognizes some translations - English or German country names should be a pretty safe bet
