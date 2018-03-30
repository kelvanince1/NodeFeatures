const express = require('express');
const app = express();
const worker = require('webworker-threads').Worker;

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get('/', (req, res) => {
  var worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;

      while (counter < 1e9) {
        counter++;
      }

      postMessage(counter);
    }
  });

  worker.onmessage = function(message) {
    console.log(message.data);
    res.send('' + message.data)
  }

  worker.postMessage();

});

app.get('/fast', (req, res) => {
  res.send('Fast');
})

app.listen(3000);
