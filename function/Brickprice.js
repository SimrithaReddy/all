let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



// -------- Do NOT edit anything above this line ----------

// You should fill this functions using the volume and calculatePrice functions defined below this.
// dimensions is a list with 2 values width and height respectively
// brickCount is int representing total bricks
function calculateTotalPriceOfBricks(dimensions, brickCount){
  if(dimensions[0]==-1){
    dimensions[0]=60
  }
  if(dimensions[1]==-1){
    dimensions[1]=40
  }
  //console.log(dimensions[0])
  //let result =volume(100,dimensions[0],dimensions[1]);
  //console.log(result)
  let price =calculatePrice(volume(100,dimensions[0],dimensions[1]));
  //console.log(price)
  return brickCount*price;
}





// Do not change anything below this line
function volume(length=100,width=60,height=40){
    console.log(dimensions[0])
  return length*width*height;
}

function calculatePrice(volume, price=0.00005){
	return Math.floor(volume*price);
}
function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each]);
    }
    
}

let brickCount = parseInt(readLine());
dimensions = readLine().split(" ");
ConvertToNumber(dimensions);
totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
console.log(totalPrice);