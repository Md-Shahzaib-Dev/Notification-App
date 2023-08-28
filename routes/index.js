const express = require('express');
const router = express.Router();

// Available API Routes.
router.use('/', require('./notification'));

module.exports = router;
