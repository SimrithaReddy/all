const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog', async (req, res) => {
    try {
        const { page = 1, search="react" } = req.query

        let blog = await Blog.find({ topic: search }).skip((page-1)*5).limit(5)
        
        res.json({
            status: "Success",
            result: blog
        })

    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.post('/blog', async (req, res) => {
    try {

        let blog = await Blog.create({
            topic: req.body.topic,
            description: req.body.description,
            posted_at: req.body.posted_at,
            posted_by: req.body.posted_by
        })

        res.json({
            status: "Success",
            result: blog
        })

    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})


router.put('/blog/:id', async (req, res) => {
    try {
        
        let id = req.params.id
        await Blog.updateOne({_id:id},  req.body)

        let user = await Blog.find({_id:id})
        res.json({
            status: "Success",
            result: user
        })

    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})

router.delete('/blog/:id', async (req, res) => {
    try {
        
        let id = req.params.id
        let blog = await Blog.deleteOne({_id:id})

        res.json({
            status: "Success",
            result: blog
        })

    } catch (e) {
        res.json({
            status: "Failed",
            message: e.message
        })
    }
})


module.exports = router;