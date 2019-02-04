const express = require('express');

const cors = require('./lib/cors');
const websocket = require('./lib/websockets');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 3077;

cors(app);

websocket.io(io);

app.get('/', (req, res) => {
  res.json({ messages: websocket.messages });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Successfully started server on port ${port}`);
});
