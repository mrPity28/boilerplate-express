var express = require('express');
var app = express();

var absolutePath = __dirname + '/views/index.html'
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
  });



































 module.exports = app;
