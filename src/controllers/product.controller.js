const ProductManager = require('../managers/product.manager');

const getAllProducts = async (req, res) => {

    try {
        
        const products = await ProductManager.getProduct();
        res.json(products);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};

const getProductById = async (req, res) => {

    try {

        const { id } = req.param;
        const productFiltered = await ProductManager.getProductById(id);
        res.json(productFiltered);

    } catch (error) {
        
        res.status(500).json({ message: error.message });

    }

};

const createProduct = async () => {

};

const updateProduct = async () => {

};

const deleteProduct = async () => {

};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};