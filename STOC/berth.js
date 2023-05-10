let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let t =parseInt(readLine());
let berths=['L','M','U','L','M','U','SL','SU']
let berthsLength=8;
while(t>0){
	let arr=readLine().split(" ");
	let totalBerth=parseInt(arr[0]);
	let berthNumber=parseInt(arr[1]);
	if(berthNumber>totalBerth){
		console.log("Invalid")
	}else{
		let mod=parseInt(berthNumber%8);
		if(mod==0){
			console.log(berths[berthsLength-1])
		}else{
			console.log(berths[mod-1])
		}
	}
	t=t-1;
}