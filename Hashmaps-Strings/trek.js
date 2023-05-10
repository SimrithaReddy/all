const { count } = require("console");
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
function valley(text,n){
	let level=0;
	let count=0;
	for(let i=0; i<n; i++){
		if(text[i]=="U"){
			level++;
		}else{
			level--;
		}
        if(level===0){
            if(text[n-1]=="U"){
                count++
            }
        }
	}
	return count;
}


let t = parseInt(readLine())
for(let i=0; i<t; i++){
	let n= parseInt(readLine())
	let text = readLine();
	console.log(valley(text,n))
}