const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
const routes = require('./routes/routes.js');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.use('/static', express.static('static'));
app.set('layout', 'layout');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(morgan('dev'));

// Initialize Express Session
app.use(session({
  secret: 'it is shining',
  resave: false,
  saveUninitialized: false
}));


app.use(routes);


app.listen(3000, function() {
    console.log('I can hear you');
});
