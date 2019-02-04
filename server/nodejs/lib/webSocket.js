// TODO:
// DONE - connect with in memory db
// use proper data structure for storing messages
// Add users
// Add Rooms
// Add Private Rooms
// Add "P2P" messaging
// persist in mongodb w/ mongolab
const addMessage = require('./redis').addMessage;

module.exports.connect = function(io) {
  io.on('connection', function(socket) {
    socket.on('message', data => {
      // Add message to redis
      addMessage(JSON.stringify(data));

      socket.broadcast.emit('message', data);
    });
  });
};
