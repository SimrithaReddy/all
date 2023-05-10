const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cloudinary = require('./cloudinary/cloudinary')

const instaPage = require('./routes/posts')

const app = express();
app.use(cors());

const server = process.env.DATABASE_URL || "mongodb://localhost:27017/post"

app.use(express.json({ limit: '50mb' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.use('/posts', instaPage)

async function main() {
    await mongoose
        .connect(server, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Database connected"))
        .catch((e) => console.log(e));
}

main();

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("server running....."))