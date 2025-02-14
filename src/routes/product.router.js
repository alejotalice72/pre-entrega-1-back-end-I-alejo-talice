const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct } = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create-products', createProduct);
router.put('/update-products', updateProduct);

module.exports = router;