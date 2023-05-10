let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function gcd(a,b){
    if(a%b===0) return b
	else if(b==0) return a
	else if(a==0) return b
    return gcd(b,a%b)
}

function lcm(a,b){
	// if(a%b == 0) return a
	// else if(b%a == 0) return b
	// else{
		let l = (a*b)/gcd(a,b)
		return l;
	// }
}


let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number)


let result =BigInt(arr[0]);
for(let i=0;i<n;i++) {
   let y =  BigInt(arr[i])
   result=BigInt((result*y) / gcd(arr[i], result));
}

console.log(result)