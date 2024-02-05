export class Product {
        static lastId= 0; 

    constructor(tittle, description, price, stock, code){
        this.tittle = tittle
        this.description = description
        this.price = price
        this.stock = stock
        this.code = code
        this.thumbnail = []
        this.id = ++Product.lastID;
    }
}
const product1 = new Product("NVIDIA GeForce RTX 3060", "Tarjeta gráfica de la serie 3000", 499.99, 20, "NVGA3060");
const product2 = new Product("AMD Radeon RX 3700", "Tarjeta gráfica de la serie 3000", 449.99, 15, "AMDRX3700");
const product3 = new Product("NVIDIA GeForce RTX 4070", "Tarjeta gráfica de la serie 4000", 799.99, 10, "NVGA4070");
const product4 = new Product("AMD Radeon RX 4700", "Tarjeta gráfica de la serie 4000", 699.99, 12, "AMDRX4700");
const product5 = new Product("NVIDIA GeForce RTX 3080", "Tarjeta gráfica de la serie 3000", 799.99, 18, "NVGA3080");
const product6 = new Product("AMD Radeon RX 3800", "Tarjeta gráfica de la serie 3000", 549.99, 25, "AMDRX3800");
const product7 = new Product("NVIDIA GeForce RTX 4080", "Tarjeta gráfica de la serie 4000", 999.99, 8, "NVGA4080");
const product8 = new Product("AMD Radeon RX 4800", "Tarjeta gráfica de la serie 4000", 899.99, 10, "AMDRX4800");

