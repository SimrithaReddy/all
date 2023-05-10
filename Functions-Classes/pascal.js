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
res = [];
if(n==1){
	res = [1];
}
else if(n==2){
	res = [1,1]
}else{
	prev = [1,1];
	for(let row=3; row<=n; row++){
		curr = [1];
		for(let i=1; i<=(row-2); i++){
			curr[i] = prev[i] + prev[i-1]
		}
		curr.push(1);

		prev = curr;
	}
	res = prev;
}
for(let i=0; i<res.length; i++){
	console.log(res[i])
}