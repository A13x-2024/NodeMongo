require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const Product = require('./models/productModel');
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to my mongoAPI');
});

app.post ("/blogpost", (req, res) => {
    res.send('This is a post request');
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get("/api/product/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

app.put("/api/product/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    try {
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
        
    }

    if(!Product) {
        return res.status(404).json({message: "Product not found"});

   res.status(200).json(product);
    }

});


app.delete("/api/product/:id", async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);

    try {
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }

    if(!Product) {
        return res.status(404).json({message: "Product not found"});
    }

    res.status(200).json(product);
});


app.post("/api/product" , async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }

});


mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`listening to ${port}`);
      });
});