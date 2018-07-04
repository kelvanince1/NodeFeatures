const express = require('express');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/api', function(req, res) {
  res.json({ firstName: 'John', lastName: 'Doe' })
});

app.post('/api', urlencodedParser, function(req, res) {
  res.send('Thanks');
  console.log(req.body.firstName);
  console.log(req.body.lastName);
});

app.get('/api/:id', function(req, res) {
  res.render('person', { ID: req.params.id, Qstr: req.query.value });
});

app.listen(port);
