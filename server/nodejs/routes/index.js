const express = require('express');
const router = express.Router();

const catchErrors = require('../lib/errorHandlers').catchErrors;

const messageController = require('../controllers/messageController');

router.get('/', catchErrors(messageController.getMessages));

module.exports = router;
