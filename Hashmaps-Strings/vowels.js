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
let n = parseInt(readLine())
let string1 = readLine();
let arr = [];

for(i=0; i<n; i++){
	if(string1[i]=="a"){
		arr[0]=1;
	}
	else if(string1[i]=="e"){
		arr[1]=1;
	}
	else if(string1[i]=="i"){
		arr[2]=1;
	}else if(string1[i]=="o"){
		arr[3]=1;
	}else if(string1[i]=="u"){
		arr[4]=1;
	}
}

let sum =0;

if(arr.length==5){
	for(i=0; i<arr.length; i++){
        if(arr[i]==1){
          sum++  
        }
    }
    if(sum==5){
        console.log("YES")
    }else{
        console.log("NO")
    }
}
else{
    console.log("NO")
}
