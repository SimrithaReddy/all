const express = require("express")
const mongoose = require("mongoose")
const blog = require("../Models/blog")
mongoose.connect("mongodb://localhost/USERDBMONGOOSE")
const bodyparser = require("body-parser")

const router = express.Router();
router.use(bodyparser.json());

router.post("/posts", async (req, res) => {
    try {
        const post = await blog.create({
            title: req.body.title,
            body: req.body.body,
            user: req.user
        })

        res.json({
            status: "success",
            post
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

router.get("/posts", async (req, res) => {
    console.log(req.body);
    try {

        const {page=1, pagesize=5} = req.query;
        // const post = await blog.find()

        const post = await blog.find().skip((page-1) * pagesize).limit(pagesize)
        res.json({
            status: "success",
            post
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;