const fetchMessages = require('../lib/redis').fetchMessages;

module.exports.getMessages = async (req, res) => {
  const messages = await fetchMessages();

  res.json({ messages: messages.map(message => JSON.parse(message)) });
};
