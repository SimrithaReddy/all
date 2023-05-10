const express = require("express")
const { request } = require("http")
const mongoose = require("mongoose")
const app = express()

app.get("/",(request,response)=>{
    response.send("index.ejs")
})



mongoose.connect("http://0.0.0.0")
app.listen(3000)




