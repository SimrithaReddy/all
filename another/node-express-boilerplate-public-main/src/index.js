const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.post('/add',(req,res)=>{
    let addSum = req.body.num1 + req.body.num2
    if(isNaN(addSum)){
        return res.send({status: "failure"})
    }
    res.send({ status: "success",
 message: "the sum of given two numbers", 
sum: addSum}
)
})

app.post('/sub',(req,res)=>{
    
    let addSum = req.body.num1 - req.body.num2
    if(isNaN(addSum)){
        return res.send({status: "failure"})
    }
    res.send({ status: "success",
 message: "the sum of given two numbers", 
sum: addSum}
)
})

app.post('/multiply',(req,res)=>{
    
    let addSum = req.body.num1 * req.body.num2
    if(isNaN(addSum)){
        return res.send({status: "failure"})
    }
    res.send({ status: "success",
 message: "the sum of given two numbers", 
sum: addSum}
)
})

app.post('/divide',(req,res)=>{
    
    if(req.body.num2===0){
        return res.send({status: "error",
    message:"Cannot divide by zero"})
    }
    let addSum = req.body.num1 / req.body.num2
    if(isNaN(addSum)){
        return res.send({status: "failure"})
    }
    res.send({ status: "success",
 message: "the sum of given two numbers", 
sum: addSum}
)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;