const fs = require('fs');

const path = require("path");
const productsFilePath = path.join(__dirname, "../db/products.json");

class ProductManager {

    static async getProduct () {

        const data = await fs.promises.readFile(productsFilePath,'utf8');
        return JSON.parse(data);
    
    };

    static async getProductById (id) {
        
        const data = await fs.promises.readFile(productsFilePath, 'utf8');
        const dataFiltered = JSON.parse(data).filter((product) => { return product.id === Number(id) });
        
        console.log(dataFiltered.length);
        if (dataFiltered.length <= 0) {
            return {message: "No se encontro ningun archivo con el ID solicitado"};
        } else {
            return dataFiltered;
        }
        

    }

    static async addProduct (newProduct) {
        // TERMINAR
        const data = await fs.promises.readFile(productsFilePath, 'utf8');
        JSON.parse(data);
        fs.promises.writeFile(productsFilePath, archivoParaGuardar);

    }

    static async updateProduct () {

    }

    static async deleteProduct () {

    }

}

module.exports = ProductManager;