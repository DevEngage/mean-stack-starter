var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var multer = require("multer");
var db = require('./db');
var port = process.env.PORT || 3000;



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

var renderIndex = (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/api/chat', (req, res)=>{
  console.log('hit chat');
  res.json(['test', 'test 2']);
});

app.get('/*', renderIndex);

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});