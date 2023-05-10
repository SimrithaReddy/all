let romanNum = [ "I", "II", "III", "IV"];
var num = ["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN"];


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
  
    // return this
    console.log(this)
  }

  // console.log(num.mySlice(2, 10000000))
  num.mySplice(2,3)
  console.log(num)