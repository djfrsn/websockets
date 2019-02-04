// fake db
const messages = [];

module.exports.messages = messages;

module.exports.io = function(io) {
  io.on('connection', function(socket) {
    socket.on('message', data => {
      messages.push(data);
      socket.broadcast.emit('message', data);
    });
  });
};
