const cors = require('cors');

var whitelist = ['http://localhost:3000', 'http://localhost:3077'];
var corsOptions = {
  credentials: true,
  origin: whitelist
};

module.exports = function(app) {
  app.use(cors(corsOptions));
};
