const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct } = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create-products', createProduct);

module.exports = router;