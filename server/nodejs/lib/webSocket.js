// TODO:
// connect with in memory db
// persist in mongodb w/ mongolab
// Add users
// Add Rooms
// Add Private Rooms
// Add "P2P" messaging

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
