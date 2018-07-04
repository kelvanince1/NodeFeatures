const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World</h1></body></html>')
});

app.get('/api', function(req, res) {
  res.json({ firstName: 'John', lastName: 'Doe' })
});

app.get('/api/:id', function(req, res) {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});

app.listen(port);
