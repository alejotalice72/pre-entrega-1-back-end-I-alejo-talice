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
             
        
            const list = await products.map(async (pro) => {
                const [productId] = await ProductManager.getProductById(pro.product);
                console.log(products);
                return {...productId};
            });
            
            console.log(list);
            return list;
        }; 
        
        return fillProduct();
        
    };

}

module.exports = CartManager;