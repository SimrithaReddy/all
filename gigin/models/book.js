const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookID:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    AuthorID:{
        type:String,
        required:true
    },
    Publisher:{
        type:String,
        required:true
    },
    PublishDate:{
        type:String,
        default:new Date().toLocaleDateString()
    },
    Category:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    SoldCount:{
        type:Number,
        required:true 
    }
})

const books = mongoose.model("booksId",BookSchema);
module.exports=books