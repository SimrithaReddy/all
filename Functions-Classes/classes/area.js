let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle{
	constructor(r){
		this.radius=r
        console.log(r)
	}
getArea=function(){
    if(this.radius>0){
    let area=(3.14)*(r**2)
    return Math.ceil(area)
    }else{
        return 0;
    }
}
getCircumference=function(){
    if(this.radius>0){
    let circumfere=Math.ceil(2*3.14*r)
    return circumfere
    }
    else{
        return 0;
    }
}
}

// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());