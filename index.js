const express = require('express');
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.listen(3000,()=>{
    console.log("im running bro");
});

app.get("/", (req,res)=>{
    res.send("ya! we are live");
});

app.use(express.json());

app.post("/api/products",async(req,res)=>{
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);

    } catch(error){
        res.status(500).json({message:error.message});


    }
});


app.get("/api/products", async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)

    } catch (error){
        res.status(500).json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://peterifechukwuudechukwu:Francispeter1996@cluster0.nytn0k4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("im connected to database today");
})
.catch(()=>{
    console.log("connection failed");
});