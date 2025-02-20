const fs = require('fs');
const path = require('path');
const cartFilePath = path.join(__dirname, '../db/carts.json');

const ProductManager = require('./product.manager');

class CartManager {

    static async getProductsCart (id) {
        
        
        const data = await fs.promises.readFile(cartFilePath,'utf8');
        const carts = JSON.parse(data);
        const [{ products }] = carts.filter((cart) => { return cart.id == id });
        const fillProduct = async () => {
            
            return Promise.all(
                products.map(async (pro) => {
                const [productId] = await ProductManager.getProductById(pro.product);
                pro.product = productId;
                return pro;
            })
            );
        
        }; 

        return fillProduct();

    };

}

module.exports = CartManager;