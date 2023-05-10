const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/user")
mongoose.connect("mongodb://localhost/USERDBMONGOOSE")
const bodyparser = require("body-parser")

const router = express.Router();
router.use(bodyparser.json());


//CRUD operation
//READ GET ---GET Operation
router.get("/",async(req,res)=>{
    try{
        //fetching the data
        const users = await User.find();
        res.json({
            status : "Success",
            users: users
        })
    }catch(e){
        console.log(e)
    }
})
//Specific user
router.get("/:id",async(req,res)=>{
    try{
        console.log(req.params);
       const users = await User.find({_id: req.params.id});
        res.json({
            status : "Success",
            users: users
        })
    }catch(e){
        console.log(e);
    }
})

//Create 
router.post("/",async(req,res)=>{
    try{
        //create the data
        // console.log(req.body);
       const users = await User.create(req.body)
        res.json({
            status : "Success",
            users: users
        })
    }catch(e){
        console.log(e);
    }
})

//Update
router.put("/:id",async(req,res)=>{
    try{
        //create the data
        console.log(req.params);
        console.log(req.body.name);
       const users = await User.updateMany({_id: req.params.id} , {$set: {name: req.body.name}})
        res.json({
            status : "Success",
            users: users
        })
    }catch(e){
        console.log(e);
    }
})

//Delete
router.delete("/:id",async(req,res)=>{
    try{
        //create the data
        console.log(req.params);
       const users = await User.deleteOne({_id: req.params.id})
        res.json({
            status : "Success",
            users: users
        })
    }catch(e){
        console.log(e);
    }
})

module.exports = router;