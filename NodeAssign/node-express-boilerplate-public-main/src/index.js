const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World Assignment-4")
})

//--------------Add Numbers-----------------------
app.post("/add", (req, res) => {

    let sum = Number(req.body.num1) + Number(req.body.num2);

    if (isNaN(Number(req.body.num1)) || isNaN(Number(req.body.num2))) {
        return res.json({
            "ststus": "error",
            "message": "Invalid data types"
        })
    }

    else if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || sum < -1000000) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    else if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || sum > 1000000) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    else (res.json({
        "status": "success",
        "message": `the sum of given two numbers ${sum}`,
        "sum": `${sum}`
    })
    )
})

//--------------------Difference of two Numbers-------------------
app.post("/sub", (req, res) => {

    let sub = Number(req.body.num1) - Number(req.body.num2);
    console.log(req.body.num1);
    if (isNaN(Number(req.body.num1)) || isNaN(Number(req.body.num2))) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }

    else if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || sub < -1000000) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    else if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || sub > 1000000) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    else (res.json({
        "status": "success",
        "message": `the difference of given two numbers ${sub}`,
        "difference" : `${sub}`
    })
    )
})

//----------------------Multiply two Numbers--------------
app.post("/multiply", (req, res) => {

    let mul = Number(req.body.num1) * Number(req.body.num2);

    if (isNaN(Number(req.body.num1)) || isNaN(Number(req.body.num2))) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }

    else if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || mul < -1000000) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    else if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || mul > 1000000) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    else (res.json({
        "status": "success",
        "message": `The product of given numbers ${mul}`,
        "result": `${mul}`
    })
    )
})


//---------------Divide-------------
app.post("/divide", (req, res) => {

    let div = Number(req.body.num1) / Number(req.body.num2);

    if (isNaN(Number(req.body.num1)) || isNaN(Number(req.body.num2))) {
        return res.json({
            "status": "error",
            "message": "Invalid data types"
        })
    }

    else if (Number(req.body.num1) < -1000000 || Number(req.body.num2) < -1000000 || div < -1000000) {
        return res.json({
            "status": "error",
            "message": "Underflow"
        })
    }

    else if (Number(req.body.num1) > 1000000 || Number(req.body.num2) > 1000000 || div > 1000000) {
        return res.json({
            "status": "error",
            "message": "Overflow"
        })
    }

    else if(Number(req.body.num2) === 0){
        return res.json({
            "status": "error",
            "message": "Cannot divide by zero"
        })
    }

    else (res.json({
        "status": "success",
        "message": `The division of given numbers ${div}`,
        "result": `${div}`
    })
    )
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;


