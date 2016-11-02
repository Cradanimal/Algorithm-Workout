const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const database = require('./config/database');




mongoose.connect(database.url);

app.use(express.static( __dirname + "/public" ));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

  
require('./app/routes')(app);


app.listen(8080);
console.log('App listening on port: 8080');