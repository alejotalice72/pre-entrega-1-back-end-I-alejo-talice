const fs = require('fs');
class ProductManager {

    static async getProduct () {

        const data = await fs.promises.readFile('../db/products.json','utf8');
        return JSON.parse(data);

    
    };

    static async getProductById (id) {
        console.log('Hola')
        const data = await fs.promises.readFile('../db/products.json', 'utf8');
        const dataFiltered = data.filter((product) => { product.id == id });
        return JSON.parse(dataFiltered);

    }

    static async addProduct (newProduct) {
        // TERMINAR
        const data = await fs.promises.readFile('../db/products.json', 'utf8');
        JSON.parse(data);
        fs.promises.writeFile('../db/products.json', archivoParaGuardar);

    }

    static async updateProduct () {

    }

    static async deleteProduct () {

    }

}

module.exports = ProductManager;