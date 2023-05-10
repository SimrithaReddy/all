function dec2bin(dec){
    return (dec>>>0).toString(2);
}
//console.log(dec2bin(1))
console.log(dec2bin(2))
let res = dec2bin(2).split("").map(Number)
let res1 = res.indexOf(0)
console.log(res1)


// function binaryconvertor(decimal){
//     let output = [];
//     for(let i=decimal; i>0; i=i/2){
//         output.push(i%2);
//     }
//     let binary=output.reverse().toString().replace(/,/g,'')
//   return binary
// }

// let decimal=5;
// console.log(binaryconvertor(decimal))