let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking inplet fs = require("fs");

function rangeProduct(arr,n){
	if(n==1){
		return 1;
	}
	let left_mul = [];
    let right_mul = [];
    let product_left = 1;

    for(let i=0; i<n; i++){
        left_mul[i] = product_left
        product_left = product_left*arr[i];
    }
    //console.log(left_mul);

    let right_product = 1;

    for(let i=n-1; i>=0; i--){
        right_mul[i] = right_product;
        right_product = right_product * arr[i];
    }
    //console.log(right_mul);
    let required_arr = [];

    for(let i=0; i<n; i++){
        required_arr[i] = right_mul[i] * left_mul[i]
    }
    return required_arr;
}
let t = parseInt(readLine());
while(t--){
	let n = parseInt(readLine());
	let arr = readLine().split(" ").map(Number);
	let result = rangeProduct(arr,n);
	console.log(...result)
}