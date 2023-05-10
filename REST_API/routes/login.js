const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/user")
mongoose.connect("mongodb://localhost/USERDBMONGOOSE")
const bodyparser = require("body-parser")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "RESTAPIAUTH"

const router = express.Router();
router.use(bodyparser.json());


//Login user

/**
* First check there is an account with the given user
* user exists compare password
* if not exists throw error 
*/

router.post("/login",
    // username must be an email
    body('email').isEmail(),
    async (req, res) => {


        try {

            // Finds the validation errors in this request and wraps them in an object with handy functions
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;

            let user = await User.findOne({ email })

            if (!user) {
                return res.status(409).json({
                    status: "Failed",
                    message: "There is no account withe entered email"
                })
            }

            // Load hash from your password DB.
            bcrypt.compare(password, user.password).then(function (result) {
                // result == true

                if (result) {
                    //create a token after login
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user._id
                    }, secret);

                    return res.json({
                        status: "success",
                        message: "Login Successful",
                        token
                    })
                }
                else {
                    return res.status(401).json({
                        status: "Failed",
                        message: "Invalid Credentails"
                    })
                }
            }).catch((e) => {
                res.json({
                    status: "Failed",
                    message: e.message
                })
            })

        } catch (e) {
            res.json({
                status: "Failed",
                message: e.message
            })
        }
    })





module.exports = router