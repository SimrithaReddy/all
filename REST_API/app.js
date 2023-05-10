const express = require("express")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/USERDBMONGOOSE")
const userRouter = require("./routes/user-routes")
const registerRoutes = require("./routes/register")
const loginRoutes = require("./routes/login")
const postRoutes = require("./routes/posts")
var jwt = require('jsonwebtoken');
const secret = "RESTAPIAUTH"

const app = express();

app.use('/api/v1/posts', (req, res, next) => {
    console.log(req.headers.authorization)
    let token = req.headers.authorization;
    if (req.headers.authorization) {
        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    return res.status(403).json({
                        status: "Failed",
                        message: "Not a valid token"
                    })
                }
                req.user = decoded.data
                console.log(decoded.data) // bar
                next();
            });
        } else {
            return res.json({
                status: "Failed",
                message: "token mismatch"
            })
        }


    } else {
        return res.status(404).json({
            status: "Failed",
            message: "Not authenticated user"
        })
    }
})

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", registerRoutes);
app.use("/api/v1/users", loginRoutes);
app.use("/api/v1", postRoutes);




app.get("*", (req, res) => {
    res.send(404).send("Page not found")
})

app.listen(5000, () => console.log("Hola!Server is up at 5000"))