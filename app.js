const express = require('express');
var consign = require('consign');
const bodyParser = require('body-parser');
const users = require('./routes/users')
const app = express();
var expressValidator = require('express-validator');
//const { user } = require('./models');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
//user.create({ nome: 'Claudio' });
app.use('/users',users)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;

