let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readline() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readline());  //4 5
let a=[];
for(i=0;i<n;i++){
	a.push(parseInt(readline()));    // 3 3 4 4 4
}
let count=1;
let flag=false; 
for(i=0;i<n;i++){

	if(a[i]==1){
		flag=true;
		console.log(1)
		break;
	}
	else if(a[i]==a[i+1]){
      count++;
	  if(a[i]==count){
		flag=true;
		console.log(a[i])
		break;
	}
}
}
if(flag==false){
	console.log(-1)
}