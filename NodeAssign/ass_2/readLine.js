const readline = require("readline")

//define from where you will take input and show your output && creating interface
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//It is an Asynchronous function.
r1.question("What is your Name?", (ans) => {
    console.log("Hello", ans);
    r1.close(); 
})