function quickSort(A,low,high){
    if(low<high){
        let pos = partition(A,low,high);
        quickSort(A,low,pos-1);
        quickSort(A,pos+1,high);
    }
}

function swap(A,i,j){
    let temp = A[i];
    A[i] =  A[j];
    A[j]= temp;
}

function partition(A,low,high){
    let pivot = A[high];
    let q = low-1;
    for(let i= low; i< high; i++){
        if(A[i] <= pivot){
            q++;
            swap(A,i,q);
        }
    }
    swap(A,q+1,high);
    return q+1;
}


let A = [0,0,0,1,1,1,1,0,0,0,1,1,1,0];
quickSort(A,0,A.length-1)
console.log(A)