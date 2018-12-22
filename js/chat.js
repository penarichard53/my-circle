
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.get('/', function(req, res){
  res.sendFile(path.resolve('src/chat.html'));
});

io.on('connection', function(socket){ // on connect

  console.log('a user connected');
  io.emit('chat message', "new user has connected");



  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });



  socket.on('disconnect', function(){ // on disconnect
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
