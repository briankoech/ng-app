var fs = require('fs');

module.exports.get = function(req, res) {
  var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.send(event);
};

module.exports.save = function(req, res) {
  console.log('called');
  var event = req.body;
  console.log(event);
  fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
  res.send(event);
};