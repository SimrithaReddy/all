//Binary conversion of any number to decimal number
let N = 13;
let binaryRepresentation = "";
while(N!=0){
    binaryRepresentation = N%2 + binaryRepresentation;
    N = Math.floor(N/2)
}
console.log(binaryRepresentation);


//Decimal to Binary 

let n = 10011
let decimal_value = 0;
let base = 1;

while(n){
    let last_digit = n%10;
    decimal_value = decimal_value + last_digit * base;
    n = Math.floor(n/10);
    base = base*2;
}

console.log(decimal_value)