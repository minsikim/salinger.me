// This includes:
// express.js
// view-engine.js
var express = require('express');
var app = express();

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));


app.set('view engine', 'jade');
app.set('views', './views');

app.listen(3000, function(){
  console.log('connected 3000 port!');
});

app.get('/', (req,res) => {
  res.render('index2');
});
