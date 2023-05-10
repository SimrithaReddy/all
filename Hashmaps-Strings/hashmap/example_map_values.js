let myMap = new Map();
myMap.set('foo',6);
myMap.set('bar',4);
myMap.set('baz',8);


for(let i of myMap.keys()){
    console.log(i)
}

for(let i of myMap.values()){
    console.log(i)
}

for(let i of myMap.entries()){
    console.log(i)
}

//Converting map to an array
let myArray = Array.from(myMap)
console.log(myArray)

//Converting map keys to an array
myArray = Array.from(myMap.keys())
console.log(myArray)


//Converting map values to an array
myArray = Array.from(myMap.values())
console.log(myArray)


//to get map keys and values using index
for(let ele of myMap){
    ele[1] = ele[1]/2;
    console.log(ele[1])
}

// for -----> of  for iterating over keys and values it gives in array directly
for(let i of myMap){
    console.log(i)
}

//for--->in for iterating values (it gives value number)
for(let i in myMap){
    console.log(i)
}