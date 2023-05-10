let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function compress(st){         
  // Complete this function.
  let res="";
  let count =1;
  for(let i=0; i<st.length; i++){
    if(st[i]==st[i+1]){
      count++;
    }
    else{
      if(count===1){
        res=res+st[i]
        count=1
      }else{
        res=res+st[i]+count;
        count=1
      }
    }
  }
  return res;
}


let t = parseInt(readLine())
for(let i=0;i<t;i++){
  st =readLine()
  console.log(compress(st))
}