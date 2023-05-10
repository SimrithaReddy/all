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
function differenceOfSumOfEvenOddIndexnumbers(numbers){
	for(i=0;i<numbers.length;i=i+2){
		let sum =0;
	    let diff =0;
		sum = sum + numbers[i]
		diff = diff + numbers[i+1]
		let result = sum - diff
		return result;
	}
}



// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}


let numbers =readLine().split(" ");
console.log(numbers)
ConvertToNumber(numbers);
console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));