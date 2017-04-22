var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consign = require('consign');


require("./config/database.js")("mongodb://localhost/tarefas")

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

consign()
	.include("models")
	.then("controllers")
	.then("routes")
	.into(app)



app.listen(3000, function(){
	console.log("api rodando")
})

module.exports = app;
