const EventEmitter = require('events');

const Log = require('./log');
const log = new Log();

// Register a listener
log.on('messageLog', (arg) => {
  console.log('Listener called', arg)
});

log.log('message');
