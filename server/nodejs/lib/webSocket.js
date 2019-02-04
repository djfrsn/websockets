// TODO:
// connect with in memory db
// persist in mongodb w/ mongolab

// fake db
const messages = [];

module.exports.messages = messages;

module.exports.connect = function(io) {
  io.on('connection', function(socket) {
    socket.on('message', data => {
      messages.push(data);
      socket.broadcast.emit('message', data);
    });
  });
};
