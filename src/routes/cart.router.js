const express = require('express');
const router = express.Router();

const { getProductsCart } = require('../controllers/cart.controller');

router.get('/:id', getProductsCart);

module.exports = router;