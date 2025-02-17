// imports
const express = require('express');
const router = express.Router();
// routes
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');

// MIDDLEWARE
router.use('/products', productRouter);
router.use('/carts', cartRouter);

module.exports = router;