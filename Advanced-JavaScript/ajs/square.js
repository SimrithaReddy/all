let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function quickSort(A,l,h){
    if(l>h) return;
    if(l<h){
        let pos = partition(A,l,h);
        quickSort(A,l,pos-1);
        quickSort(A,pos+1,h)
    }
}

function swap(A,i,j){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}


function partition(A,l,h){
    let pivot = A[h];
    let q = l-1;
    for(let i=l; i<h; i++){
        if(A[i] <= pivot){
            q++;
            swap(A,i,q)
        }
    }
    swap(A,q+1,h);
    return q+1;
}


let n = parseInt(readLine());
let arr = [];

for(let i=0; i<n; i++){
    let curr = parseInt(readLine());
    arr.push(curr*curr)
}
//console.log(arr)
quickSort(arr,0,arr.length)
//console.log(arr)

for(let i=1; i<arr.length; i++){
    console.log(arr[i])
}