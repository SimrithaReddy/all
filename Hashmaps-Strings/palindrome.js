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
let str = readLine();
str = str.toLowerCase();
let arr = [];

for(i=str.length-1; i>=0; i--){
	arr[i]=str[str.length-1-i]
}
let count=0
for(let i=0; i<str.length; i++){
    if(arr[i]==str[i]){
        count++
    }
}
if(count==str.length){
    console.log("YES")
}else{
    console.log("NO")
}