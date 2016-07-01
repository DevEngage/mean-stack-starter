var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('> User connected to Mongo! ')
});

var image = mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number
});

exports.Images = mongoose.model('Images', image);

var chat = mongoose.Schema({
  body: String
});

exports.Chat = mongoose.model('Chat', chat);