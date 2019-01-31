require('marko/node-require').install();

const server = require('http').createServer();
const io = require('socket.io')(server);
const fs = require('fs');

const indexTemplate = require('./index.marko');

const port = 3077;
// fake db
const messages = ['red', 'green', 'blue'];

io.on('connection', function(socket) {
  socket.on('message', data => {
    messages.push(data);
    socket.broadcast.emit('message', data);
  });
});

server.on('request', (req, res) => {
  res.setHeader('content-type', 'text/html');

  indexTemplate.render(
    {
      messages
    },
    res
  );
});

server.listen(port, () => {
  console.log(`Successfully started server on port ${port}`);
});
