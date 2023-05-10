let str = "PGHPGHPghhh"
let len = str.length;
let i = 0;

// while(i<len){
//     let r = str.substr(i,3)
//     console.log(r);
//     i=i+3;
// }

let s = str.split("")
console.log(s.length);
let slice = s.slice(i,2)
console.log(slice)
console.log(s, s.length);

let r = s.splice(1,2)
console.log(r);
console.log(s, s.length);


 