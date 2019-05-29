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
with environment variables and/or with manipulating the Logger object in js
```
LOG_LEVEL=DEBUG               ||    Logger.settings.level = 'debug' 
LOG_HOST=127.128.129.130      ||    Logger.settings.host = '127.128.129.130'
LOG_PORT=12345                ||    Logger.settings.port = '12345'
LOG_COLOR=1                   ||    Logger.settings.color = true
LOG_LOCAL=1                   ||    Logger.settings.saveLocal = true
LOG_EXTRA=1                   ||    Logger.settings.verboseLocal = true
LOG_TIMESTAMP=1               ||    Logger.settings.timestampLocal = true
LOG_SLACK_HOOK=httbla         ||    Logger.settings.slackHook = 'httbla'
PRODUCTION=0                  ||    Logger.settings.developer_mode = true

```
_**⚠️** Logger is a **singleton** so change to the settings can affect logging of other modules._

_**⚠️** Beware of hirarchy:_
 * javascript settings overrule env var settings.
 * env vars set in shell will overrule vars in `.env` file parsed by npm module `dotenv`


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
