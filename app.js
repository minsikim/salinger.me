// This includes:
// express.js
// view-engine.js
var express = require('express');
var app = express();
//connect mysql
var mysql = require('mysql');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0531dmswl",
  database: "salingerms"
});
db.connect(function(err) {
  if (err) throw err;
  console.log("SQL Connected!");
});

//use file in server
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

app.post('/write/add', (req,res) => {
  var body = req.body;
  // var title = $(".input-title").val();
  // var s_desc = $(".input-short-description").val();
  // var l_desc = $(".input-description").val();
  // var tags = $(".input-tags").val();

  // var regex = /[./ ]../

  // var sql = "INSERT INTO articles "
  // +"(title, short_description, description, tags) "
  // +"VALUES ("+title+", "+s_desc+", "+l_desc+", "+tags+")";
});
