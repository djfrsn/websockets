var express = require('express');

var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3077;
// fake db
const messages = ['red', 'green', 'blue'];

io.on('connection', function(socket) {
  socket.on('message', data => {
    messages.push(data);
    socket.broadcast.emit('message', data);
  });
});

app.get('/', (req, res) => {
  res.send('ok!');
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}`);
  if (process.send) {
    process.send('online');
  }
});
