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

let [N, t] = readLine().split(" ").map(Number);

const countPrimesUpto = (num = 1) => {
    if (num < 3) {
       return 0;
    };
    let arr = new Array(num).fill(1);
    for (let i = 2; i * i < num; i++) {
       if (!arr[i]) {
          continue;
       };
       for (let j = i * i; j < num; j += i) {
       arr[j] = 0;
    };
    return arr.reduce( (a,b) => b + a) - 2; };
 };

while (t--) {
	let num = parseInt(readLine())
	if(num>N) console.log(count);
    else if (num==1) console.log(0)
    else{
        let res  =  countPrimesUpto(num)
        if(num%2!=0){
            console.log(res+1)
        }else console.log(res)
    }
}