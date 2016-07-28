var $ = require('jquery');

var express = require('express');
var pug = require('pug');
var app = express();

var hillaryData = require('./data/hillary-clinton.json');
var donaldData = require('./data/donald-trump.json');

var data = {
  hillary: hillaryData,
  donald: donaldData
};

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    name: "Hillary vs Trump"
  });
});

app.get('/compare', function (req, res) {
  res.render('compare', data);
});

var PORT = process.env.PORT || 9000
console.log("Listening on port: ", PORT);
var server = app.listen(PORT);
