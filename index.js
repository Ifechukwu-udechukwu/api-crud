const express = require('express');
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const User = require("./models/user.model.js")
const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log("im running bro");
});

app.get("/", (req,res)=>{
    res.send("ya! we are live");
});

app.get("/user", (req,res)=>{
    res.send("got the user");
});


app.post("/api/products",async(req,res)=>{
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);

    } catch(error){
        res.status(500).json({message:error.message});


    }
});

app.post("/api/user", async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put("/api/product/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product){
            return res.status(404).json({message: "product aint available"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

app.put("/api/user/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if(!user){
            return res.status(404).json({message: "user not found"});
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



app.delete("/api/product/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "product aint available"});
        }
        res.status(200).json({message: "product deleted succesfully"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

app.delete("/api/user/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user){
            return res.status(404).json({message: "user not found"});
        }
        res.status(200).json({message: "user deleted succesfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
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

app.get("/api/user/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/api/products/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        res.status(500).json({message:error.message});

    }
});

mongoose.connect("mongodb+srv://peterifechukwuudechukwu:Francispeter1996@cluster0.nytn0k4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("im connected to database today");
})
.catch(()=>{
    console.log("connection failed");
});


