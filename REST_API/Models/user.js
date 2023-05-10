const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    name: { type: String, required: true ,unique: true},
    email: { type: String, unique: true },
    password: {type: String}
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;