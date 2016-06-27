var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var multer = require("multer");
var db = require('./db');



app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
app.post("/upload", multer({dest: "./uploads/"}).array("photos", 12), function(req, res) {
    req.files.forEach((val, index)=>{
      var image = new db.Images(val);
      image.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('image saved');
        }
      });
    })
    res.send(req.files);
});

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});