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
  res.render('index');
});

app.get('/works', (req,res) => {
  res.render('works');
  // $(document).css('::selected', '#333')
});

app.get('/dic', (req,res) => {
  res.render('dic');
});

app.get('/write', (req,res) => {
  res.render('write');
});

function write_dic(){
  window.location.replace("/dic");
}
