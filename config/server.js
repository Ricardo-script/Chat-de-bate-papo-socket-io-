var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;


