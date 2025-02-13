// imports
const express = require('express');
const router = express.Router();
// routes
const productRouter = require('./product.router');

// MIDDLEWARE
router.use('/products', productRouter);

module.exports = router;