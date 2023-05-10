let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function maxTime(time,n,t){
    //console.log(time)
    let k = n, sum = 0;
    let i = t-1;
    while(k>0){
        sum = sum + time[i];
        k--;
        i--;
    }
    console.log(sum)
 }

 function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }

let [t,q] = readLine().split(" ").map(Number);
let time = readLine().split(" ").map(Number);
let score = readLine().split(" ").map(Number);
let sorted_array = bubbleSort(time);
while(q--){
    let n = parseInt(readLine());
    maxTime(sorted_array,n,t)
}    

