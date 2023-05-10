let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let palindrome = parseInt(readLine())   //153
let key = palindrome   // key =153
let rev_num =0

while(palindrome>0){
    let rem = palindrome%10;           // rem= 153%10=3
      rev_num = rev_num*10 +rem;         // rev_num = 0*10+3=3
    palindrome = parseInt(palindrome/10);  // palindrome=153/10=15
}
console.log(rev_num)
if(key == rev_num){            //153 ==
    console.log("Palindrome Number")
}
else{
    console.log("Not a palindrome Number")
}