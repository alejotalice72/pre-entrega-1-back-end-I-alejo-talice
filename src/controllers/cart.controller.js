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

module.exports = {
    getProductsCart,
};