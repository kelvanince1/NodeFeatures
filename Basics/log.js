const EventEmitter = require('events');

const url = 'http://mylog.io/log';

class Log extends EventEmitter {
  log(message) {
    console.log(message);

    // Raise an event
    this.emit('messageLog', { id: 1, name: 'John Doe' });
  };
};

module.exports = Log;
