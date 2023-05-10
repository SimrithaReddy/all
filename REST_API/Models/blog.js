const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String },
    user: { type: ObjectId, ref: "UserModel" }
})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;

