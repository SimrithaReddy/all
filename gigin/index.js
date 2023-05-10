const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const books=require('./models/book')
const authors = require('./models/author')

const app = express();
app.use(express.json())


/**---------------- POST METHODS ---------------------------*/
app.post('/api/books',async(req,res)=>{
    try {
        let bookpost = await books.create({
            BookID:req.body.BookID,
            title:req.body.title,
            AuthorID:req.body.AuthorID,
            Publisher:req.body.Publisher,
            PublishDate:req.body.PublishDate,
            Category:req.body.Category,
            Price:req.body.Price,
            SoldCount:req.body.SoldCount
        })

        res.status(201).send(bookpost)
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
})

app.post('/api/authors',async(req,res)=>{
    try {
        let authorpost = await authors.create({
            AuthorID:req.body.AuthorID,
            Name:req.body.Name,
            PhoneNumber:req.body.PhoneNumber,
            BirthDate:req.body.BirthDate,
            DeathDate:req.body.DeathDate
        })
        res.status(201).send(authorpost)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


/**---------GET ALL CATEGORIES AND AUTHORS---------------------------*/
app.get('/api/categories',async(req,res)=>{
    try {
        let arr = [];
        (await books.find()).forEach((ele)=>{
            arr.push(ele.Category)
        })
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})

app.get('/api/authors',async(req,res)=>{
    try {
        let arr = [];
        (await authors.find()).forEach((ele)=>{
            arr.push(ele.Name)
        })
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})


/**------------------GET BY BOOKTITLE AND AUTHORNAME----------------*/
app.get('/api/books/:Booktitle',async(req,res)=>{
    try {
        let Booktitle = req.params.Booktitle
        let booksfindByBooktitle = await books.find({title:Booktitle})
        if(booksfindByBooktitle.length===0){
            return res.status(200).send("No Books Found")
        }
        res.status(200).send(booksfindByBooktitle)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})

app.get('/api/authors/:BookAuthor',async(req,res)=>{
    try {
        let BookAuthor = req.params.BookAuthor;
        let AuthorId = await authors.find({Name:BookAuthor})
        console.log(AuthorId)
        let BookName= await books.find({AuthorID:AuthorId[0].AuthorID})
        let arr = [];
        BookName.forEach((ele)=>{
            arr.push(ele.title)
        })
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})


/**-----------MOST SOLD BY CATEGORY AND AUTHOR---------------------*/
app.get('/api/sold/authorcategory/:Category',async(req,res)=>{
    try {
        let Category = req.params.Category
        let mostSoldBookByCategory = await books.aggregate([{$match:{Category:Category}},
            {$sort:{SoldCount:-1}},{$skip:0},{$limit:5}])
        let arr = [];
        mostSoldBookByCategory.forEach((ele)=>{
            arr.push(ele.title)
        })
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})

app.get('/api/sold/authors/:Author',async(req,res)=>{
    try {
        let Author = req.params.Author
        let nameOfAuthor = await authors.find({Name:Author})
        console.log(nameOfAuthor[0].AuthorID)
        let idofAuthor = nameOfAuthor[0].AuthorID
        let mostSoldBookByAuthorName = await books.aggregate([{$match:{AuthorID:idofAuthor}},
            {$sort:{SoldCount:-1}},{$skip:0},{$limit:5}])
        let arr = [];
        mostSoldBookByAuthorName.forEach((ele)=>{
            arr.push(ele.title)
        })
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error.message) 
    }
})

mongoose.connect('mongodb+srv://Simritha_Reddy_k04:simritha123@cluster0.ppxra6j.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true} ,
    () => {
      console.log("connected to DB");
    }
  );

app.listen(5000, () => {
    console.log(`Server is up at 5000.....`);
})