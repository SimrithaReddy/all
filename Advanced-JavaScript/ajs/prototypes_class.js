/*ARRAY METHOD

PUSH--> ADD ELEMENT AT THE END AND RETURNS UPDATED LENGTH OF AN ARRAY
POP--> REMOVE ELEMENT FROM TAIL AND RETURN THE POPPED ELEMENT
SHIFT--> REMOVE ELEMENT FROM HEAD AND RETURN THE POPPED ELEMENT
UNSHIFT--> ADD ELEMENT AT HEAD AND RETURN THE UPDATED LENGTH
CONCAT--> MERGE TWO OR MORE THAN TWO ARRAY AND RETURN THE NEW MERGED ARRAY
SORT-> SORT THE ELEMENTS IN ALPHABETICAL ORDER
SLICE--> RETURN BRAND NEW ARRAY CONTAINING ELEMENTS OF ORIGINAL ARRAY
SPLICE--> RETURN THE REMOVED ELEMENTS AND MODIFY THE ORIGINAL ARRAY
SPLIT--> ONLY WORKS FOR STRING AND RETURN ARRAY BASED ON THE SEPERATOR
JOIN--> ONLY WORKS WITH ARRAY AND RETURN STRING BASED ON THE SEPERATOR
INDEXOF--> GET THE INDEX OF FIRST OCCURANCE OF SPECIFIC ELEMENT INSIDE AN ARRAY
LASTINDEXOF--> GET THE LAST OCCURANCE INDEX OF AN ELEMENT INSIDE AN ARRAY
INCLUDES--> CHECK IF ELEMENT EXIST INSIDE AN ARRAY
FOREACH--> ITERATE OVER ELEMENT
*/

const romanNum=['I', 'II', 'III',  'IV', 'V', 'VI',  'VII', 'VIII']
  const message="Hello from 10x";
const slicedArr=romanNum.slice(3, 6);
const slicedArr1=romanNum.slice(-3);
//console.log(romanNum)
//console.log("SLICEDARR:-"+slicedArr1)


const updatedArr=[];
romanNum.forEach(function(element,index){
 // console.log(`ELEMENT IS:- ${element} and VALUE IS:- ${index}`)
  updatedArr.push("O_"+element);
})
//console.log(updatedArr)


const splicedArr=romanNum.splice(-3, 5);//SLICE(STARTINDEX., COUNT)
//console.log(romanNum)
//console.log("SPLICEDARR:-"+splicedArr)



Array.prototype.printArrayValues=function(){
  console.log("THIS VALUE IS:-"+this);
  for (let element of this){//For of loop slecifically for array which will access directly item
    console.log("Element of an array is:-"+element)
  }
}
String.prototype.printValues=function(){
  console.log("THIS VALUE IS:-"+this);
  for (let element of this){//For of loop slecifically for array which will access directly item
    console.log("Element of an array is:-"+element)
  }
}



//chain & prototypical inheritance

//romanNum.printArrayValues();
//message.printValues()

Number.prototype.multiplyBy2 =function(){
  return this*2
}



console.log(new Number(55).multiplyBy2());


Array.prototype.mySlice=function(start, end){
  const slicedArr=[];
  end=(end==undefined || end > this.length)?this.length:end;
  if(start>0){
  for(let i=start; i<end;i++){
    slicedArr.push(this[i]);
  }
  }
  else {
    
  }
  return slicedArr;
  
}


Array.prototype.mySplice=function ( start, count) {
  if (typeof count == 'undefined') count = 1
  while (count--) {
    var index2remove = start + count
    this[index2remove] = this.pop()
  }

  return this
}

var num=["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN"]

console.log(num.mySlice(2, 10000000))
num.mySplice(2,3)
console.log(num)




function employee(name, employeeID){
  this.name=name;
  this.id=employeeID
  
  console.log(`${this.name} with ${this.id} have skills ${this.skills}`)
}

let mayank=new employee("Mayank", 112233)
employee.prototype.skills=["HTML", "CSS", "JS"];