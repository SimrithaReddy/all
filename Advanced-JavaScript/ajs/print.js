function print(st){
    return st;
}

function printNum(st,end){
    if(st+1>end) {
       return st;
   }
   if(st<end){
       let st2 = st+" "+printNum(st+1,end);
       print(st);
       console.log(st)
       return st2;
   }
}

console.log(printNum(2,17))