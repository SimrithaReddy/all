let n= 23;

let br = ""
while(n!=0){
    br=n%2+br;
    n=Math.floor(n/2)
}
console.log(br)

let n2 = 10111
let decimal_value = 0;
let base = 1;

while(n2){
    let last_digit = n2%10;
    decimal_value = decimal_value + last_digit * base;
    n2 = Math.floor(n2/10);
    base = base*2;
}

console.log(decimal_value)