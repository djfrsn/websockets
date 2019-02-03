const cors = require('cors');

var whitelist = ['http://localhost:3000', 'http://localhost:3077'];
var corsOptions = {
  origin: function(origin, callback) {
    console.log('origin', origin);

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = function(app) {
  app.use(cors());
};
