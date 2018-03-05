// This includes:
// express.js
// view-engine.js
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require('path');
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

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

//use file in server
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

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

app.post('/write/add', urlencodedParser, (req,res) => {
  res.alert('hello');

  var title = req.body.input_title;
  var s_desc = req.body.input_short_description;
  var l_desc = req.body.input_description;
  var tags = req.body.input_tags;

  var sql = "INSERT INTO dic "
  +"(title, short_description, description, tags) "
  +"VALUES (?, ?, ?, ?)";
  db.query(sql, [title, s_desc, l_desc, tags],function(err, result){
    if(err) {
      throw err;
    };
    console.log('1 record inserted');
  })
  res.redirect('/dic');
});
