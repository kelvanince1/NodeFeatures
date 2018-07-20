const express = require('express');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const app = express();

app.use(express.json());
app.use(function(req, res, next) {
  console.log('Logging');
  // This next method moves the control to the next middleware function.
  // Without this, the request will just hang
  next();
});

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/api', function(req, res) {
  res.json({ firstName: 'John', lastName: 'Doe' })
});

app.get('/api/:id', function(req, res) {
  // Get data from database
  res.render('person', { ID: req.params.id, Qstr: req.query.value });
});

app.post('/api', urlencodedParser, function(req, res) {
  res.send('Thanks');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.post('/api', jsonParser, function(req, res) {
  res.send('Thanks for the json data');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.get('/api/person/:id', function(req, res) {
  // Get data from database
  res.json({ firstName: 'John', lastName: 'Doe' })
});

app.post('/api/person', function(req, res) {
  // Get data from database
  res.render('person', { ID: req.params.id, Qstr: req.query.value });
});

app.delete('/api/person/:id', function(req, res) {
  // Get data from database
  res.render('person', { ID: req.params.id, Qstr: req.query.value });
});

app.listen(port);
