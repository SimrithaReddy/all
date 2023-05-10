let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

function print(a, n, b){

    let newset = new Set();
    for(let i=0; i<n-1; i++){
        let diff = Math.abs(a[i+1]- a[i])
        newset.add(diff)
    }

    let noj = Array.from(newset)
   let max_count = 0;

let mini = Number.POSITIVE_INFINITY
   for(let i=0; i<noj.length; i++){
    if(noj[i] < mini && noj[i] <= b){
        mini= noj[i]
    }
   }

    for(let j=0; j<noj.length; j++){

        if(sum + noj[j] <= b){
            sum= sum + noj[j]
            m.push(noj[j])
        }

        if(m.length>max_count){
            max_count = m.length;
        }
    }
 }

 
   console.log(max_count+1)
    



let [N, B] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
print(arr, N, B)