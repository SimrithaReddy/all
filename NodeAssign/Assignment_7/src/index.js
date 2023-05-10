const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const studentData = require("./InitialData")

app.use(express.urlencoded());

let length = 7;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

app.get("/api/student", (req, res) => {
    try {
        res.status(200).json({
            status: "ok",
            studentData
        })
    } catch (e) {
        res.json({
            status: "Error",
            message: e.message
        })
    }
})


app.get("/api/student/:id", (req, res) => {
    try {
        let data = ""
        for (let i = 0; i < studentData.length; i++) {
            if (req.params.id == studentData[i].id) {
                data = studentData[i]
            }
        }
        if (data) {
            return res.status(200).json({
                status: "ok",
                data
            })
        } else {
            return res.status(404).json({
                status: "Failed",
                message: "Invalid id"
            })
        }

    } catch (e) {
        res.json({
            status: "Error",
            message: e.message
        })
    }
})


app.post("/api/student", (req, res) => {
    try {
        res.header('Content-Type', 'application/x-www-form-urlencoded');
        let { name, currentClass, division } = req.body

        if (name != undefined && currentClass != undefined, division != undefined) {
            studentData.push({ id: length += 1, ...req.body })
            return res.status(200).json({
                id: length += 1
            })
        } else {
            res.status(400).json({
                status: "Not ok"
            })
        }

    } catch (e) {
        res.json({
            status: "Error",
            message: e.message
        })
    }
})

app.put("/api/student/:id", (req, res) => {
    res.header('Content-Type', 'application/x-www-form-urlencoded');
    try {
        let flag = false
        if(req.body.name == undefined){
            return res.status(400).json({
                status: "Provide name to update"
            })
        }

        for (let i = 0; i < studentData.length; i++) {
            if (req.params.id == studentData[i].id) {
                flag = true;
                studentData[i].name = req.body.name
                return res.json({
                    status: "ok",
                    result: studentData[i]
                })
            }
        }
        if (!flag) {
            return res.status(400).json({
                status: "Invalid id",
            })
        }

    } catch (e) {
        res.json({
            status: "Error",
            message: e.message
        })
    }
})

app.delete("/api/student/:id", (req,res)=>{
    try{
        let flag = false
        for (let i = 0; i < studentData.length; i++) {
            if (req.params.id == studentData[i].id) {
                flag = true;
                studentData.splice(i,1)
                return res.status(200).json({
                    status: "ok"
                })
            }
        }

        if (!flag) {
            return res.status(400).json({
                status: "Invalid id",
            })
        }
    }catch(e){
        res.json({
            status: "Error",
            message: e.message
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   