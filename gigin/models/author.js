const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    AuthorID:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    BirthDate:{
        type:String,
        required:true 
    },
    DeathDate:{
        type:String,
        default:null 
    }
})

const authors = mongoose.model("authorsid",AuthorSchema);
module.exports=authors