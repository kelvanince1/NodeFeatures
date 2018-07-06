const express = require('express');
const mongoose = require('mongoose');

const app = express();

const config = require('./config');

let port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString)

app.listen(port);
