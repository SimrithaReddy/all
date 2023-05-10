const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here


app.get("/mario", async (req, res) => {


    try {
        let mario = await marioModel.find()
        res.status(201).json({
            status: "Success",
            result: mario
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        })
    }

})



app.get("/mario/:id", async (req, res) => {


    try {

        let mario = await marioModel.find({ _id: req.params.id })

        res.status(201).json({
            status: "Success",
            result: mario
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        })
    }

})


app.patch("/mario/:id", async (req, res) => {


    try {
        let mario = await marioModel.updateOne({ _id: req.params.id }, { $set: req.body })
        let mar = await marioModel.find({ _id: req.params.id })
        res.status(201).json({
            status: "Success",
            result: mario,
            updated: mar
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        })
    }

})


app.delete("/mario/:id", async (req, res) => {


    try {
        await marioModel.deleteOne({ _id: req.params.id })
        res.status(201).json({
            status: "Success",
            message: 'character deleted'
        })
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        })
    }

})







app.post("/mario", async (req, res) => {

    try {
        if (req.body.name == undefined || req.body.weight == undefined) {
            return res.status(400).json({
                status: "Failed",
                message: "either name or weight is missing"
            })
        }

        else {

            let mario = await marioModel.create({
                name: req.body.name,
                weight: req.body.weight
            })

            res.status(201).json({
                status: "Success",
                result: mario
            })
        }



    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        })
    }
})


module.exports = app;