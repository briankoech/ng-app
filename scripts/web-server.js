var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var events = require('./eventsController');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8000, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('connected!');
    console.log('Listening on port 8000....');
  }
});

