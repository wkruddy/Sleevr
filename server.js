'use strict';

// Basic express server that serves static files
// from inside the root directory, and sends the base HTML
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

// __dirname  === default `pwd` path
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    console.log(__dirname)
    res.sendFile('index.html', {root: __dirname});
});

app.listen(9000);