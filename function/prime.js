let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime 
// otherwise  should return False.
function isPrime(inputNumber){
    // You can start below this
    if(inputNumber == 0 || inputNumber == 1){
        return "False"
    }else if(inputNumber == 2){
        return "True";
    }else{
	for(i=2; i<=parseInt(inputNumber/2); i++){
        //console.log(i)
		if(number%i == 0){
			return "False";
		}
	}
	return "True";
}
}




//Please don't change anything below this line.
let number=parseInt(readLine());
console.log(isPrime(number));