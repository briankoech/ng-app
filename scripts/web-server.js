var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(rootPath + '/app'));

app.listen(8000);

console.log('Listening on port 8000....');
