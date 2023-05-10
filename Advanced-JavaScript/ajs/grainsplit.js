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
    return C
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

function checkBags(A,n,sum){
    let each_bag_wt = parseFloat(sum/2);
    //console.log(each_bag_wt)
    let a = [];
    let sum1 =0;
    for(let i=n-1; i>(n/2); i--){
        sum1+= A[i]
        a.push(A[i])
        if(sum1===each_bag_wt){
            break;
        }
    }
    let res = mergeSort(a,0,a.length-1);
    console.log(res.join(" "))
}


function equalSum(A){
    let sum =0;
    let n = A.length;
    for(let i=0; i<n; i++){
        sum+=A[i]
    }
    
    checkBags(A,n,sum)
}


let t = parseInt(readLine());
console.log(t)
while(t--){
    let A = readLine().split(" ").map(Number);
    let r = mergeSort(A,0,A.length-1);
    equalSum(r)
    //console.log(res.join(" "))
}

