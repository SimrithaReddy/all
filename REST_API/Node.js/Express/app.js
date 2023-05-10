const express = require("express")
const faker = require('faker');
var bodyParser = require('body-parser')
const multer = require("multer")


const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static("public"))

const Imagestorage = multer.diskStorage({

    destination: function (req, file, cb) {
        // console.log(req);
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
//file.fieldname + '-' 
const upload = multer({ storage: Imagestorage })


app.use(bodyParser.urlencoded({ extended: false }))

app.post("/add/user", upload.single("image"), (req, res) => {
    // console.log(req.body)
    console.log(req.file, "i am another");
    users.push({
        name: req.body.name,
        email: req.body.email,
        image: req.file.filename
    })
    res.redirect("/user1")
})

let users = [];
for (let i = 0; i < 10; i++) {
    users.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.image()
    })
}


// users.push({
//     name : "Sim",
//     email: "email",
//     age: 69
// })

// console.log(users)

app.get("/user1", (req, res) => {
    res.render("user.ejs", { user: users })
})

app.get("/form", (req, res) => {
    res.render("form.ejs")
})

app.get("/", (req, res) => {
    res.send("Welcome to Express Server")
})

//Get---- whenever u want to fetch data from server
//POSt- whenever u want to create data in database/server
//PUT/PATCH -- whenever u want to  update data in database/server
//delete --- whenever u want to delete data in database/server


app.get("/remove/user", (req, res) => {
    users.shift();
    res.redirect("/user1")

})

app.get("/user", (req, res) => {
    console.log(req.query);
    let data = req.query;

    res.json({
        name: data.name,
        email: data.email,
        batch: data.batch
    })
})



















app.get("*", (req, res) => {
    res.status(404).send("Page Not Found")
})



app.listen(5000, () => console.log("Server is up at 5000"))

// to start npm run dev