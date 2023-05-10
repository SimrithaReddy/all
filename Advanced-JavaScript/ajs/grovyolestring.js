let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function mergeSort(C,l,h){
    if(l>=h) return;
    let mid=parseInt((l+h)/2);
    mergeSort(C,l,mid);
    mergeSort(C,mid+1,h);
    merge(C,l,mid,h);
    return C;
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

function getString(r){
    let str = "";
    for(let i=0; i<r.length; i++){
        str += String.fromCharCode(r[i])
    }
    console.log(str)
}

function reArranging(r,n){
    let last_no = r[r.length-1];
    r.pop();
   //console.log(r)
    let odd_index = [];
    for(let i=0; i<n-1; i+=2){
        odd_index.push(r[i])
    }

    for(let i=r.length-1; i>=1; i=i-2){
        //console.log(i,r[i])
        odd_index.push(r[i])
    }

    odd_index.splice(parseInt(n/2),0,last_no);
    getString(odd_index)
}


let t = parseInt(readLine());
while(t--){
    let str = readLine();
    let arr = [];
    for(let i=0; i<str.length; i++){
        arr.push(str.charCodeAt(i))
    }
    if(arr.length==1){
        console.log(String.fromCharCode(arr[0]))
    }
 else{
    let r = mergeSort(arr,0,arr.length-1);

  reArranging(r,r.length)
 }
}