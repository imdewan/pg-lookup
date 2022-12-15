var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router = express.Router();

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    if(req.session.page_views){
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
     } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
     }
  });
  
  module.exports = router;