// const fs = require("fs")
// const os = require("os")
// const path = require("path")

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.platform());

// console.log(os.freemem());
// Node.js program to demonstrate the
// os.freemem() method

// Allocating os module
const os = require('os');

// Printing os.freemem() value
var free_memory = os.freemem();
var free_mem_in_kb = free_memory/1024;
var free_mem_in_mb = free_mem_in_kb/1024;
var free_mem_in_gb = free_mem_in_mb/1024;

free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);

free_mem_in_mb = free_mem_in_mb%1024;
free_mem_in_kb = free_mem_in_kb%1024;
free_memory = free_memory%1024;

console.log("Free memory: " + free_mem_in_gb + "GB "
	+ free_mem_in_mb + "MB " + free_mem_in_kb
	+ "KB and " + free_memory + "Bytes");


//CRUD ___>create, read, update, delete is an operation


//Create a file


// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//To create a folder

// fs.mkdir("NewFolde",(err)=>{
//     console.log("Done");
// })

// fs.writeFile(path.join(__dirname,"Jk.js"), "console.log('My file Created')", (err)=>{ //Asynchronous Call
//     console.log(err);
// })

// fs.writeFileSync("file2.txt","hjhsghsghsg") //Synchronous Call
// console.log("Test")


//Read a file

// fs.readFile("file.txt",{encoding: "utf-8"}, (err,data)=>{
//     if(err) console.log(err)
//     else console.log(data)
// })


//Update a file works for creation and update

// fs.appendFile("file.txt", "\n More Content Update file", (err)=>{
//     console.log(err)
// })

//Delete a file

// fs.unlink("file2.txt",(err)=>{
//     console.log(err)
// })

//Rename a file

// fs.rename("file.txt", "newfile.txt",(err)=>{
//     console.log(err)
// })

// if(os.platform()=="win32"){
//     fs.readFile("E:\\Node.js\\newfile.txt", {encoding: "utf8"}, (err,data)=>{
//         console.log((data))
//     })
// }else{
//     fs.readFile("E:\\Node.js\\newfile.txt", {encoding: "utf8"}, (err,data)=>{
//         console.log((data))
//     })
// }

// console.log(__dirname)
// console.log(__filename)

//     fs.readFile(path.join(__dirname,  "..", "Linkedlist",  "recursion.js"), {encoding: "utf8"}, (err,data)=>{
//         console.log((data))
//     })

//     fs.rename(path.join(__dirname, "file.js"), path.join(__dirname, "f" , "file.js"),(err)=>{
//         console.log(err)
//     })


    //Delete all files

    // fs.readdir(path.join(__dirname, "f"), (err, files)=>{
    //     for(let i=0; i<files.length; i++){
    //         fs.unlink(path.join(__dirname,"f",files[i]),(err)=>{
    //             console.log(err)
    //         })
    //     }
    // })