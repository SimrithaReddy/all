const { MongoClient } = require('mongodb');
const faker = require("faker")
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'UserDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    //   let userArr = [];

    //   for(let i=0; i<30; i++){
    //     userArr.push({
    //         name: faker.name.findName(),
    //         email:faker.internet.email(),
    //         age: Math.ceil(Math.random()*100),
    //         address : faker.address.streetName(),
    //         image : faker.image.image()
    //     })
    //   }

    //   console.log(userArr);
    //   await collection.insertMany(userArr)

    const user = await collection.insertOne({
        firstname: "K.Simritha Reddy",
        lastName: "Reddy",
        email: "simmi@gmail.com",
        age: "test"
    })

    console.log(user);

    const yes = await collection.find({firstname: {$exists:true}}).toArray()
    console.log(yes);
    //const response = await collection.find().toArray()
    //fetch all data above 20yrs and below 60yrs
    // const response =  await collection.find({$and: [{age:{$gt : 20}}, {age:{$lt : 60}}]}).toArray()
    // console.log(response);


    // const users = await collection.updateMany({ age: { $lt: 18 } }, { $set: { minors: true } })
    // console.log(users);

    //check minor true
    // const minorusers = await collection.find({minors: true}).toArray()
    // console.log(minorusers);

    //delete minors and senior citizens
    // const del = await collection.deleteMany({ $or: [{ age: { $gt: 65 }, age: { $lte: 18 } }] })
    // console.log(del);

    // the following code examples can be pasted here...

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());