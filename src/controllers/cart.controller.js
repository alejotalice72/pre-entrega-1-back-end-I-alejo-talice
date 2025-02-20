const CartManager = require('../managers/cart.manager');

const getProductsCart = async (req, res) => {
    
    try {

        const { id } = req.params;
        const cartProducts = await CartManager.getProductsCart(id);
        res.json(cartProducts);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};

const createCarts = async (req, res) => {
    
    try {

        const createCarts = await CartManager.createCart();
        res.json(createCarts);

    } catch (error) {

        res.status(500).json({ message: error.message })
    
    }

};

const addProductToCart = async (req, res) => {

    try {

        const { id, productId } = req.params;
        const addProductCart = await CartManager.addProductToCart(id, productId);
        res.json(addProductCart);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

};

module.exports = {
    getProductsCart,
    createCarts,
    addProductToCart,
};