const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/create-products', createProduct);
router.put('/update-products/:id', updateProduct);
router.delete('/delete-products/:id', deleteProduct)

module.exports = router;