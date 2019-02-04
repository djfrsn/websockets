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
    setup(socket);
  });
};

function setup(socket) {
  socket.on('message', data => onMessage(data, socket));
}

function onMessage(data, socket) {
  addMessage(JSON.stringify(data));

  socket.broadcast.emit('message', data);
}
