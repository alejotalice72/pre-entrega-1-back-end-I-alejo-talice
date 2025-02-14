const fs = require('fs');

const path = require("path");
const productsFilePath = path.join(__dirname, "../db/products.json");

class ProductManager {

    static id = 0;

    static async getProduct () {

        const data = await fs.promises.readFile(productsFilePath,'utf8');
        const products = JSON.parse(data);
        return products;
    
    };

    static async getProductById (id) {
        
        const data = await fs.promises.readFile(productsFilePath, 'utf8');
        const dataFiltered = JSON.parse(data).filter((product) => { return product.id === Number(id) });
        
        if (dataFiltered.length <= 0) {
            return { message: "No se encontro ningun archivo con el ID solicitado" };
        } else {
            return dataFiltered;
        }
        

    }

    static async addProduct (newProduct) {

        const { title, description, code, price, status, stock, category, thumnails } = newProduct;

        const data = await fs.promises.readFile(productsFilePath, 'utf8');
        const products = JSON.parse(data);

        // Verify properties
        if( !title || !description || !code || !price || !status || !stock || !category || !thumnails ) {
            // Increase id
            ProductManager.id = products.length + 1;
            newProduct.id = ProductManager.id;
            // Add new product
            products.push(newProduct);
            // Transform to json
            fs.promises.writeFile(productsFilePath, JSON.stringify(products));
    
            return { message: "Producto añadido correctamente" };

        } else {
            return { message: "Falta una propiedad en el producto" };
        }

    }

    static async updateProduct (id, { title, description, code, price, status, stock, category, thumnails }) {



    }

    static async deleteProduct () {

    }

}

module.exports = ProductManager;