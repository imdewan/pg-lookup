const express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
const app = express();
const port = 9000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });

app.get('/', (req, res) => {
  res.send('None!');
});

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/session', function(req, res){
   if(req.session.logedin){
    if(req.session.logedin=="1"){
        res.send("1");
     } else {
        res.send("0");
     }
   } else {
    res.send("0");
   }
});
app.get('/login', function(req, res){

 });
 app.get('/register', function(req, res){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (name, email, password, gender, age, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});