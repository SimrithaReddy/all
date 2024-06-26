const express = require('express')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt');
const users = require('../models/user')
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const secret = "Assignment"

const router = express.Router()
router.use(bodyparser.json())


/**
 * Login an user
 */

router.post("/",
    body('email').isEmail(),
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, password } = req.body;

            let user_data = await users.findOne({  email })

            if (!user_data) {
                return res.json({
                    status: "Failed",
                    message: "User does not exists"
                })
            }                
            bcrypt.compare(password, user_data.password, function (err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: user_data._id
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
            });
            
        } catch (e) {
            res.json({
                status: "Failed",
                message: e.message
            })
        }
    })


module.exports = router