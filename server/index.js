var crypto = require('crypto');
const express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var nodemailer = require('nodemailer');
const app = express();
const port = 9000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pg-lookup"
  });

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bunch.of.devs@gmail.com',
      pass: 'devs@98765'
    }
});

app.use(express.urlencoded({
    extended: true
}))

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
 app.get('/auth', function(req, res){
    con.query("SELECT * FROM users WHERE email = '"+req.query.u+"' AND activation = '"+req.query.a+"'", function (err, result) {
        if (err) throw err;
        console.log(result);
        if (typeof result !== 'undefined' && result > 0) {
            var sql = "UPDATE users SET activation = 'activated' WHERE email = '"+req.query.u+"'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
            });
        }
      });
 });
 app.post('/register', function(req, res){
    con.connect(function(err) {
        if (err) throw err;
        console.log(req.body.name);
        con.query("SELECT * FROM users WHERE email = '"+req.query.u+"' AND activation = '"+req.query.a+"'", function (err, result) {
            if (err) throw err;
            console.log(result);
            if (typeof result === 'undefined' || result == 0) {
                var hashedpwd = sha256(req.body.password);
                var activation = crypto.randomBytes(16).toString("hex");
                var sql = "INSERT INTO users (name, email, password, gender, age, address, phone, activation) VALUES ('"+req.body.name+"','"+req.body.email+"','"+hashedpwd+"','"+req.body.gender+"','"+req.body.age+"','"+req.body.address+"','"+req.body.phone+",'"+activation+"')";
                con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
                var mailOptions = {
                    from: 'bunch.of.devs@gmail.com',
                    to: req.body.email,
                    subject: 'Verification for PG-LookUp',
                    text: ' Click this link to verify- http://localhost:9000/auth/?a='+activation+'&u='+req.body.email
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                    console.log(error);
                    } else {
                    console.log('Email sent: ' + info.response);
                    }
                });
                });
            }else{
                res.send("Already Registered");
            }
          });
        
      });
 });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

function sha256(content) {  
    return crypto.createHash('sha3-256').update(content).digest('hex')
  }