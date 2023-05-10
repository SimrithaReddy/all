const { request, response } = require("express")
const express = require("express")
const mangoose = require("mangoose")
const app = express()
app.get("/",(request,response)=>{
    response.send("ok")

})


mangoose.connect("http://0.0.0.0")
app.listen(5000)
