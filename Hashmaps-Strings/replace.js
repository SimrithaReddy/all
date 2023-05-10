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
function valley(tmp,text){
  let count=0;
	let u_count=0;
	let d_count=0;


	for(i=0; i<tmp; i++){
		if(text[i]=="U"){
			u_count++
		}else{
			d_count++
		}
	}


	if(d_count>=u_count){
		count++
	}
	return count
}


let t = parseInt(readLine())
let res=0;
for(let i=0; i<t; i++){
	tmp= parseInt(readLine())
	text = readLine().split("");
	result = valley(tmp,text)
  res=res+result;
}
  console.log(res)


