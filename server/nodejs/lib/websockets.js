// fake db
const messages = ['red', 'green', 'blue'];

module.exports.messages = messages;

module.exports.io = function(server) {
  const io = require('socket.io')(server);

  io.on('connection', function(socket) {
    socket.on('message', data => {
      messages.push(data);
      socket.broadcast.emit('message', data);
    });
  });
};
