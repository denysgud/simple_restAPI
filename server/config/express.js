var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function() {
  var app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  //app.set('views', path.join(__dirname, '../../client'));
  app.use(express.static(path.join(__dirname, '/../../client')));

  require('../routes/users.js')(app);
  return app;
};