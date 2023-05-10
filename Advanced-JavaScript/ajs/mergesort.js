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


let arr = [89,7,6,9,4]
console.log("Before sorting array:-", arr)
mergeSort(arr,0,arr.length-1)
console.log("After sorting array:-", arr)