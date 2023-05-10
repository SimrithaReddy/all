var str = "hello from 10xAcademy";
//str.capitalize(str);
String.prototype.capitalize=function(){
    let letters = this.split("");
    for(let i=0; i<letters.length; i++){
        if(i==0){
            letters[i]= letters[i].toUpperCase();
        }else{
            letters[i] = letters[i].toLowerCase();
        }
    }
    let res = letters.join("");
    return res;
}
console.log(str.capitalize());



var Ctor = function() { }  // constructor function

Ctor.prototype.bar =" bar";  // prototype property

var obj = new Ctor();  //instantiation

//adds own property to instance
obj.foo = "foo"    // Object Instance Property

for(var prop in obj){
    console.log("protottpe value:->",prop)
}



const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.




function sortedArray(arr){
    const even = arr.filter(ele=>ele%2==0).sort((a,b)=>(a-b));
    const odd = arr.filter(ele=>ele%2!==0).sort((a,b)=>(b-a));

    return odd.concat(even);

}
const array = [1,4,7,36,87,5,7,9]
console.log(sortedArray(array))


let a = [1,2,3,3,4,89,98];
for(let ele of a){
    console.log(ele);
}