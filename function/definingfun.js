// 3 ways of defining function

//anonymous function type
let a=10;
let test=function(){
    return 10+a;
}
let result=test();
console.log(result)

//arrow notation function
let b=90;
let add = (a,b) => {
    console.log(a+b);
    return a+b;
}
add(10,b)
// 3rd type
function funname(){

}
let res = funname();
console.log(funname)