const express = require('express');
const router = express.Router();

// Available API Routes.
router.use('/auth', require('./auth'));
router.use('/notify', require('./notification'));

module.exports = router;
