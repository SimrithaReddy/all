let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n=parseInt(readLine());
let a=[];

for(let i=0;i<n;i++){
	a.push(parseInt(readLine()));
}

let result=a[0];
for(i=1;i<a.length;i++){
	if(a[i]>result){
		result=result;
	}else{
		result=a[i]
	}
}
let sum=0;
while(result>0){
	r=parseInt(result%10);
    result=parseInt(result/10);
	sum=sum+r;
}
//console.log(sum)
if(sum%2==0){
	console.log(1)
}else{
	console.log(0)
}