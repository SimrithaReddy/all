const express = require("express")
const mongoose = require("mongoose")
const User = require("../Models/user")
mongoose.connect("mongodb://localhost/USERDBMONGOOSE")
const bodyparser = require("body-parser")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


const router = express.Router();
router.use(bodyparser.json());

//Register an user


router.post("/register",
    // username must be an email
    body('email').isEmail(),
    body('name').isAlpha(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5, max: 16 }),
    async (req, res) => {
        /**
         * Check user exists or not
         * user exists send msg user already there
         * if not exists then create
         */

        try {

            // Finds the validation errors in this request and wraps them in an object with handy functions
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { name, email, password } = req.body;

            let user = await User.findOne({ email })

            if (user) {
                return res.status(409).json({
                    status: "Failed",
                    message: "User already exists with that email"
                })
            }

            bcrypt.hash(password, 10, async function (err, hash) {
                // Store hash in your password DB.
                if (err) {
                    return res.json({
                        status: "Failed",
                        message: err.message
                    })
                }

                user = await User.create({
                    name: name,
                    email: email,
                    password: hash
                })

                res.json({
                    status: "success",
                    message: "User successfully created",
                    user: user
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