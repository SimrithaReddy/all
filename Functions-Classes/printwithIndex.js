let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ---------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//You have to write a function with function name as printer which takes a list.
// you can use printWithIndex function to print
// you can start from now


//Do not change anything below this line
function printer(stringList){
	for(let i=0; i<stringList.length; i++){
		printWithIndex(i,stringList[i]);
	}
}

function printWithIndex(index,string){
    console.log(index, string);
}

let noOfStrings =parseInt(readLine());
let stringList=[];
for(let i = 0; i<noOfStrings; i++){
    stringList.push(readLine());
}
printer(stringList);