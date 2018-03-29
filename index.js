const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // index.js is to be executed again but in child mode.
  cluster.fork();
} else {
// I'm a child. I'll act like a server and do nothing else.
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi');
  });

  app.get('/fast', (req, res) => {
    res.send('Fast');
  })

  app.listen(3000);
}
