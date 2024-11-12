const express = require('express');
const { getWelcome } = require('../controllers/homeController');

const router = express.Router();

router.get('/', getWelcome);

module.exports = router;