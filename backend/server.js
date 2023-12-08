////Imports and definitions

const express = require("express");
const server = express();
const {request, response} = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const port = 3000;
const db_uri = "mongodb+srv://admin:SLCPW12@cluster0.byrf1ns.mongodb.net/products?retryWrites=true&w=majority";

////Middleware
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());

////Connections
mongoose
.connect(db_uri)
.then((result) => {
    server.listen(port, () => {
        console.log(`Listening on ${port}...\nConnected to DB`);
    });
    })
    .catch((error) => {
        console.log(error);
    });

////Routes
server.get("/", (request, response) => {
    response.send("LIVE");
});

server.get("/products", async(request, response) => {
    const products = await Product.find();
    response.send(products);
});

server.post("/addProduct", async(request, response) => {
    const product = request.body;
    const postProduct = new Product({
        id: product.id,
        productName: product.productName,
        brand: product.brand,
        quantity: product.quantity,
        image: product.image,
        price: product.price,
    });
    const saveProduct = await postProduct.save();
    saveProduct 
    ? response.send("Product is added to inventory") 
    : response.send("Failed to add item to inventory");
});

server.delete("/product/:id", async(request, response) => {
    const { id } = request.params;
    const deleteProduct = await Product.deleteOne({
        _id: new mongoose.Types.ObjectId(id),
    });
    deleteProduct 
    ? response.send(`${id} product has been deleted`) 
    : response.send("Failed to delete");
});

server.patch("/product/:id", async (request, response) => {
    const { id } = request.params;
    const product = request.body;
    const patchProduct = await Product.updateOne(
        {_id: new mongoose.Types.ObjectId(id)}, 
        { $set: product }
    );
    patchProduct 
    ? response.send(`${product.productName} has been edited`) 
    : response.send("Failed to edit");
});