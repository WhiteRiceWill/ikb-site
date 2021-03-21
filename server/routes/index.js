const express = require('express');
const router = express.Router();

router.use('/ikb', require('./ikb'));

module.exports = router;