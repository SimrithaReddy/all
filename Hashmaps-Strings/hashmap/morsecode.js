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

let codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function getmorseCode(word){
	let code ="";
	for(let i=0; i<word.length; i++){
		code += codes[word.charCodeAt(i)-97]
	}
	return code;
}

let t = parseInt(readLine());
while(t--){
	let words = readLine().trim().split(" ");
	let map = new Map();

	for(let i=0; i<words.length; i++){
		let code = getmorseCode(words[i]);

		map.set(code,true);
	}
	console.log(map.size);
}
  