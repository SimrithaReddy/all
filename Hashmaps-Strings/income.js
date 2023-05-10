let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let arr = [];
let indice =[];

for(i=0; i<n; i++){
	arr.push(parseFloat(readLine()))
}

for(i=0; i<n; i++){
	if(parseInt(readLine())>2){
		indice.push(i)
	}
}

if(indice==0){
    console.log(-1)
}
else{
    let sum = 0;
    for(i=0; i<indice.length; i++)
    {
	sum = sum + arr[indice[i]];
    }
    console.log(Math.floor(sum/indice.length))
}
