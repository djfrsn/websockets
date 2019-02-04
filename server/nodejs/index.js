require('dotenv').config();

const express = require('express');

const cors = require('./lib/cors');
const webSocket = require('./lib/webSocket');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes');

const port = 3077;

cors(app);

webSocket.connect(io);

app.use('/', routes);

server.listen(port, '127.0.0.1', () => {
  console.log(`Successfully started server on port ${port}`);
});
