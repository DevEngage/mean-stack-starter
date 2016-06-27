var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});