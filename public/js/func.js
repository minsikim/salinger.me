$(function(){
  $(document).ready(function(){
    $("#menubar").click(function(){
      document.alert('Clicked!')
    });
  });
});





// function write_dic(){
//   var mysql = require('mysql');
//   if (mysql){
//     console.log('required mysql'+mysql)
//   }
//   else{
//     console.log('cannot require mysql');
//   }
//   var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "0531dmswl",
//     database: "salingerms"
//   });
//
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("SQL Connected!");
//   });
//
//     var title = $(".input-title").val();
//     var s_desc = $(".input-short-description").val();
//     var l_desc = $(".input-description").val();
//     var tags = $(".input-tags").val();
//
//     // var regex = /[./ ]../
//
//     var sql = "INSERT INTO articles "
//     +"(title, short_description, description, tags) "
//     +"VALUES ("+title+", "+s_desc+", "+l_desc+", "+tags+")";
//     con.query(sql, function (err, result) {
//     if (err) throw err;
//       console.log("1 record inserted");
//     });
//
//     window.location = "http://localhost:3000/dic";
// }
