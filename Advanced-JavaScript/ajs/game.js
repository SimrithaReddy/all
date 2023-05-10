let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function mergeSort(C,l,h){
    if(l>=h) return;
    let mid=parseInt((l+h)/2);
    mergeSort(C,l,mid);
    mergeSort(C,mid+1,h);
    merge(C,l,mid,h);
}

function merge(C,p,q,r){
    //console.log(C,p,q,r)
    let n1 = q-p+1;
    let n2 = r-q;
    let A =[];
    let B=[];
    for(let i=0; i<n1; i++){
        A[i] = C[p+i];
    }

    for(let j=0; j<n2; j++){
        B[j] = C[q+1+j];
    }

    let i=0, j=0, k=p;
    while(i<n1 && j<n2){
        if(A[i]<=B[j]){
            C[k] = A[i];
            i++;
            //k++;
        }
        else{
            C[k] = B[j];
            j++;
            //k++;
        }
        k++;
    }

    while(i<n1){
        C[k] = A[i];
        i++;
        k++;
    }

    while(j<n2){
        C[k] = B[j];
        j++;
        k++;
    }
}

function sumNddiff(boxes,n){

    let sum =0,diff=0;
    for(let i=0; i<n; i++){
        sum= sum+(boxes[i]*i);
        diff=diff-(boxes[i]*boxes.length-i-1);
    }
    let res = Math.abs(sum+diff);
    return res;
}

let testcases = parseInt(readLine());

while(testcases--){
    let n = parseInt(readLine());
    let boxes = readLine().split(" ").map(Number);
    mergeSort(boxes,0,boxes.length-1);

    let sum = sumNddiff(boxes,n);
   // console.log(sum*boxes[n-1])
    console.log(parseInt((sum*boxes[boxes.length-1])%1000000007))
}