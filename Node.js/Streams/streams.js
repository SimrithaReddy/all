const fs = require('fs')
const http = require('http')


const server = http.createServer();

// server.on("request",(req,res)=>{

//     // fs.readFile("bigfile.txt",(err,data)=>{
//     //     res.end(data);
//     // })


//     //Using Streams we write and read data chunk by chunk

    // const rstream  = fs.createReadStream("bigfile.txt", {encoding:"utf8"})


//     // rstream.on("data",(chunk)=>{
//     //     res.write(chunk);
//     // })

//     // rstream.on("end",()=>{
//     //     console.log("All data is read");
//     //     res.end()
//     // })

//     // rstream.on("error",(err)=>{
//     //     console.log("There is some error while reading the file",err);
//     //     res.end();
//     // })

//     rstream.pipe(res)

// })


//Here it is reaing streams.txt file and writing it into new.txt 

const rstream2 = fs.createReadStream("bigfile.txt", {encoding:"utf8"})
const wstream = fs.createWriteStream("new.txt",{encoding:"utf8"})

rstream2.pipe(wstream);  
wstream.on("finish",()=>{
    console.log("Writing finished")
})
// wstream.end()
//Here we are all data at once it effects perfoemance and when we write big data our laptop may hang

// const wstream1 = fs.createWriteStream("bigfile.txt");
// for(let i=0; i<190; i++){
//     wstream1.write("Lorem Lopez New Chun LOMNNNNNNNNNNNNNNNNN \n")
// }
// wstream.end();


server.listen(5000,()=>console.log("Server is up"));