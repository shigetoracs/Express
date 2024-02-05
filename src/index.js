import express from 'express';
import { ProductManager } from './config/ProductManager.js';
import { promises as fs } from 'fs';

const app = express();
const PORT = 8000;
const productManager = new ProductManager('./products.json');

app.get('/', (req, res) => {
    res.send("Hola, desde mi primer servidor en coderhouse express");
});

app.get('/despedida', (req, res) => {
    res.send("Adios, desde mi primer servidor en express");
});

app.get('/products', async (req, res) => {
    try {
        const prods = await productManager.getProducts();
        const prodsLimit = prods.slice (0,limit);
        res.send(prods);
        const { limit } =req.query
          console.log (limit)
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        res.status(500).send('Error interno del servidor');
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const idProducto = req.params.pid;
        const prod = await productManager.getProductById(idProducto);
        console.log(prod);
        res.send(prod);
    } catch (error) {
        console.error('Error al obtener producto por ID:', error.message);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});