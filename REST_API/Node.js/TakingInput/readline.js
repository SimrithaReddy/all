/**
 * To take input from user
 * readline is a built-in module but not a global Module
 * Asynchronous always excepts a csll-bac function
 */

const readline = require("readline")

//define from where you will take input and show your output
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Since it is a Asynchronous 1st it prints 21Line After that it excecutes.
r1.question("What is your Name?", (ans) => {
    console.log("Hello", ans);
    r1.question("How are you?", (greets) => {      //This a call-back hell
        console.log("I am ", greets)
        r1.close();                             // to close the terminal
    })
})

console.log("Name is MyName");



//To avoid Call-back hell
const numArr = [];

r1.question("pls enter the size of an array :", async (size) => {
    for (let i = 0; i < size; i++) {
        await new Promise((res) => {
            r1.question("Please Enter The number:", (num) => {
                numArr.push(num);
                res();
            })
        })
    }
    console.log(numArr)
    r1.close();

}) 

