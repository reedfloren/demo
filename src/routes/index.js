const express = require('express');
const healthRoutes = require('./healthRoutes');
const homeRoutes = require('./homeRoutes');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/health', healthRoutes);

module.exports = router;