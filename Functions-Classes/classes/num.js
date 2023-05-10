let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer
function differenceOfSumOfEvenOddIndexnumbers(arr){
	let evensum=0;
    let oddsum=0;
    let  len =arr.length;
    for(i=0;i<len;i++){
        i%2===0? evensum+=arr[i] : oddsum+=arr[i]
		console.log(evensum)
    }
    return evensum-oddsum
}




// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
      console.log(numbers[each])
  }
  
}


let numbers =readLine().split(" ");
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));