// let arr = [1,2,3,4]
// let arr1 = [5,6,7,8]

// let arr2=[...arr,...arr1];
// console.log(arr2)


let data = [67,68,7,4,4,89,96,89,94,100,109,108];
// let data1 = data[0]
// let data2 = data[1]
// let data3 = data[2];
// let data4 = [data[3],data[4],data[5]]
// console.log(data1);
// console.log(data2);
// console.log(data3);
// console.log(data4);
let [data1,data2,data3,...data4] = data;
console.log(data1)
console.log(data2)
console.log(data3)
console.log(data4)