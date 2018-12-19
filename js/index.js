
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.resolve('src/chat.html'));
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
