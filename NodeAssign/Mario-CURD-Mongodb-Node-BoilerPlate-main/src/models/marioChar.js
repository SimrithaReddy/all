const mongoose = require('mongoose');

//  Your code goes here

const mariomodel = new mongoose.Schema({
    name : {type: String},
    weight: {type: Number}
})

const marioModel = mongoose.model("mario", mariomodel)

module.exports = marioModel;