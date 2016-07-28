var express = require('express');
var pug = require('pug');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log("log");
  res.render('home', {
    name: "Hillary vs Trump"
  });
});

var PORT = process.env.PORT || 9000
console.log("Listening on port: ", PORT);
var server = app.listen(PORT);
