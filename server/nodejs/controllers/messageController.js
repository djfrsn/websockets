const webSocket = require('../lib/webSocket');

module.exports.getMessages = async (req, res) => {
  res.json({ messages: webSocket.messages });
};
