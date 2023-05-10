const mongoose = require('mongoose');
const faker = require("faker")

async function main() {
    // Use connect method to connect to the server

    // await mongoose.connect('mongodb://localhost/USERDBMONGOOSE');
    await mongoose.connect('mongodb+srv://Simritha_Reddy_k04:simritha123@cluster0.ppxra6j.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected successfully to server');

    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

   
    const userSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, unique: true },
        age: Number,
        minor: Boolean
    })

    const UserModel = mongoose.model('User', userSchema);  //Collections

    const BlogSchema = new Schema({
        title: { type: String, required: true, unique: true },
        posts: { type: String, required: true },
        user: { type: ObjectId, ref: "UserModel" }
    })

    const Blog = mongoose.model('Blog', BlogSchema);

    try {
        const userData = await UserModel.create({
            name: "Sim",
            email: "simr@gmail.com",
            age: 10,
            minor: true
        })

        //blogs created by user
        for(let i=0; i<5; i++){
            await Blog.create({
               title :  faker.lorem.word(),
               posts: faker.lorem.paragraph(),
               user: userData._id
            })
        }
        const blogs = await Blog.find().populate("user");
        console.log(blogs);

    } catch (e) {
        console.log(e.message);
    }



    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => mongoose.disconnect());