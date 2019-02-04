// TODO:
// connect with in memory db
// persist in mongodb w/ mongolab
// Add users
// Add Rooms
// Add Private Rooms
// Add "P2P" messaging
var redis = require('redis');

var client = redis.createClient({
  port: process.env.IN_MEMORY_DB_PORT, // replace with your port
  host: process.env.IN_MEMORY_DB, // replace with your hostanme or IP address
  password: process.env.IN_MEMORY_DB_PW
});

client.on('connect', function() {
  console.log('Redis client connected');
});

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
