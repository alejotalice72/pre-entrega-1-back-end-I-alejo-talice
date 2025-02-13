// IMPORTACIONES
const express = require('express');
const app = express();
const routes = require('./routes');
var logger = require('morgan');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

// CORS
app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Content-Type");
    res.header("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// ENDPOINTS
app.get('/', (req, res) => {
    res.send(` 
    <center> 
        <h1>Bienvenido a mi API</h1>
        <h2 style="color: red;"> by: Alejo Talice // pre-entrega-1 </h2>
        <a href="http://localhost:8080/"> http://localhost:8080/api/products </a>
    </center>
    `);
}); 

// Importando rutas de routes
app.use('/api', routes);

// ROUT NOT FOUND
app.use((req, res) => {
    res.status(404).send(
    `<center style="color: red;">  
        <h1>404 NOT FOUND<h1>
        <h2> RUTA NO ENCONTRADA </h2>   
    </center>`
    );
});

module.exports = app;