let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string 

class InputReader {
	//implement the methods here 
	printer(i,num){
		console.log(i," ",num);
	}
	readStrings(num){
		for(let i=0; i<num; i++){
			let tmp = readLine();
			printer(i,tmp)
		}
	}
	readIntegers(num){
		for(let i=0; i<num; i++){
			let tmp = parseInt(readLine());
			printer(i,tmp);
		}
	}
	readFloats(num){
		for(let i=0; i<num; i++){
			let tmp = parseFloat(readLine()).toFixed(2);
			printer(i,tmp);	
		}
	}


};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
if (typeOfInput === "string") {
		NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers(num);
} else {
		NewInputReader.readFloats(num);
}