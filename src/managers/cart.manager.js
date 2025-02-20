const fs = require('fs');
const path = require('path');
const cartFilePath = path.join(__dirname, '../db/carts.json');

const ProductManager = require('./product.manager');

class CartManager {

    static id = 0;
    static async getProductsCart (id) {
        
        
        const data = await fs.promises.readFile(cartFilePath,'utf8');
        const carts = JSON.parse(data);
        // verify id
        const verifyId = carts.findIndex((cart) => { return cart.id == id });

        if (verifyId != -1) {
            // filter cart
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

        } else {

            return { message: "Debe introducir un id valido" };

        }

    };

    static async createCart() {

        const data = await fs.promises.readFile(cartFilePath,'utf8');
        const carts = JSON.parse(data);
        // Increase ID
        CartManager.id = carts.length + 1;
        const cart = {
            products: [],
            id: CartManager.id,
        };

        // Add new product
        carts.push(cart);
        // Transform to json
        fs.promises.writeFile(cartFilePath, JSON.stringify(carts));

        return { message: "Carrito creado correctamente" };

    };

    static async addProductToCart(id, productId) {
        
        const data = await fs.promises.readFile(cartFilePath,'utf8');
        const carts = JSON.parse(data);
        // verify id
        const verifyId = carts.findIndex((cart) => { return cart.id == id });
       
        if (verifyId != -1) {
            // filter cart
            const [{ products }] = carts.filter((cart) => { return cart.id == id });
            // verify productId
            const verifyProductId = products.findIndex((cart) => { return cart.product == productId });
            
            if (verifyProductId != -1) {
                // add one to quantity
                products[verifyProductId].quantity += 1;
                // update cart
                carts[verifyId].products = products;
                // update json
                fs.promises.writeFile(cartFilePath, JSON.stringify(carts));

                return { message: "Producto agregado correctamente" };

            } else {
                const newProduct = {
                    product: Number(productId),
                    quantity: 1
                };
                // update cart
                carts[verifyId].products.push(newProduct);
                // update json
                fs.promises.writeFile(cartFilePath, JSON.stringify(carts));

                return { message: "Producto agregado correctamente" };
            
            }   
        
        } else {

            return { message: "Debe introducir un id de carrito valido" };

        }

    }

}

module.exports = CartManager;