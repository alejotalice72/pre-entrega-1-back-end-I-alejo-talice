const express = require('express');
const router = express.Router();

const { getProductsCart, createCarts, addProductToCart } = require('../controllers/cart.controller');

router.get('/:id', getProductsCart);
router.post('/create-carts', createCarts);
router.post('/:id/add-product/:productId', addProductToCart);

module.exports = router;