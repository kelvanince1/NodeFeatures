const express = require('express');
const mongoose = require('mongoose');
const app = express();

const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const port = process.env.PORT || 3000;

mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@ds125871.mlab.com:25871/js-course-db`);

const Schema = mongoose.Schema;

const personSchema = new Schema({
	firstName: String,
	lastName: String,
	address: String
});

const person = mongoose.model('Person', personSchema);

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

htmlController(app);

apiController(app);

app.listen(port);
