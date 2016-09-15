var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  require('../routes/index.js')(app);
  return app;
};