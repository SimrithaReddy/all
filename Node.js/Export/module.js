const oper = require("../class1-2");
console.log("Welcome to node JS");

function A() {
    console.log("I am In Method A");
    B();
    console.log("I am done with A");
}

function B() {
    C();
    console.log("I am done with B");
}
function C() {
    console.log("I am In Method C");
    console.log("I am done with C");

} 


console.log(oper.add(10,20));
console.log(oper.sub(20,10));