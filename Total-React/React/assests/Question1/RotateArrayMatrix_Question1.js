 fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let array=readLine().split(" ")
let noOfPositionsShift=parseInt(readLine())
let direction=parseInt(readLine())
if(direction){
    while(noOfPositionsShift--){
        for(let i=0;i<array.length-1;ilet++){
            let temp=array[i]
            array[i]=array[i+1]
            array[i+1]=temp
         }
    }
}
else{
    while(noOfPositionsShift--){
        for(let i=array.length-2;i>=0;i--){
            let temp=array[i]
            array[i]=array[i+1]
            array[i+1]=temp
         }
    }
}
console.log(array)

//TimeComplexity = O(n)
//SpaceComlexity = O(n)

/**
 * PossibleTestCases:
 * 
 * Input Format: first line Contains Array
 *               and second line contains number of positions to move
 *               and third line contains in direction to move either left or right
 *                    if "1" it moves right else if it is "0"it moves left.
 * 
 * Case 1:
 * 10 1 2 3 4 5 6
 * 4
 * 1
 * 
 * Case 2:
 * 6 7 7 8 9 2 29 0
 * 5 
 * 0
 * 
 * Case 3:
 * 0 0 0 1 1 1 9
 * 4
 * 1
 */
