var crypto = require('crypto');
const express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var cors = require('cors');
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
      pass: 'prpljkmoannjuros'
    }
});

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
  res.send('None!');
});

app.use(cors(), function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
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
app.post('/login', function(req, res){
    var hashedpwd = sha256(req.body.password);
    con.query("SELECT * FROM users WHERE email = '"+req.body.email+"' AND activation='activated' AND password = '"+hashedpwd+"'", function (err, result) {
        if (err) throw err;
        console.log(result);
        if (result.length > 0) {
            
            res.send(`<script>
                window.alert("Logged in");
                window.location.href="http://localhost:3000/";
                </script>`);
        }else{
            res.send(`<script>
                window.alert("Wrong Details or Account not activated");
                window.location.href="http://localhost:3000/login";
                </script>`);
        }
      });
 });
 app.get('/auth', function(req, res){
    con.query("SELECT * FROM users WHERE email = '"+req.query.u+"' AND activation = '"+req.query.a+"'", function (err, result) {
        if (err) throw err;
        console.log(result);
        if (typeof result !== 'undefined' && result > 0) {
            res.send("Failed");
        }else{
            var sql = "UPDATE users SET activation = 'activated' WHERE email = '"+req.query.u+"'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
                res.send(`<script>
                window.alert("Account Activated");
                window.location.href="http://localhost:3000/login";
                </script>`);
            });
        }
      });
 });

 app.post('/addpg', function(req, res){
            var hashedpwd = sha256(req.body.password);
            var sql = "INSERT INTO pgs (name, email, password, advance, payment, lat,lng, contact) VALUES ('"+req.body.name+"','"+req.body.email+"','"+hashedpwd+"','"+req.body.advance+"','"+req.body.payment+"','"+req.body.latitude+"','"+req.body.longitude+"','"+req.body.phone+"')";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
                res.send(`<script>
                window.alert("PG Uploaded");
                window.location.href="http://localhost:3000/";
                </script>`);
            });
    
 });

 app.get('/getpgs', function(req, res){
    con.query("SELECT lat,lng FROM pgs", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/pgdetails', function(req, res){
    con.query("SELECT * FROM pgs", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
});

app.get('/getpgname', function(req, res){
    con.query("SELECT name FROM pgs", function (err, result) {
        if (err) throw err;
        res.send(result);
    });

});

 app.post('/register', function(req, res){
    con.connect(function(err) {
        console.log(req.body.name);
        con.query("SELECT * FROM users WHERE email = '"+req.body.email+"'", function (err, result) {
            if (err) throw err;
            console.log(result);
            if (typeof result !== 'undefined' && result > 0) {
                res.send(`<script>
                window.alert("Already Registered");
                window.location.href="http://localhost:3000/login";
                </script>`);

            }else{
                var hashedpwd = sha256(req.body.password);
                var activation = crypto.randomBytes(16).toString("hex");
                var sql = "INSERT INTO users (name, email, password, gender, age, activation, phone) VALUES ('"+req.body.name+"','"+req.body.email+"','"+hashedpwd+"','"+req.body.gender+"','"+req.body.age+"','"+activation+"','"+req.body.phone+"')";
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
                    res.send(`<script>
                window.alert("Activation Email Sent");
                window.location.href="http://localhost:3000/login";
                </script>`);

                    }
                });
                });
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