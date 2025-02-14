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

        const { id } = req.params;
        const productFiltered = await ProductManager.getProductById(id);
        res.json(productFiltered);

    } catch (error) {
        
        res.status(500).json({ message: error.message });

    }

};

const createProduct = async (req, res) => {
    
    try {

        const newProduct = req.body;
        const product = await ProductManager.addProduct(newProduct);
        res.json(product);
        
    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};

const updateProduct = async (req, res) => {

    try {
        
        const info = req.body;
        const response = await ProductManager.updateProduct(info);
        res.json(response);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

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