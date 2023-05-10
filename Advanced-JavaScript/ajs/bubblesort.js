function bubbleSort(A,n){
    for(let i=0; i<n-1; i++){  
        let flag = false;        
        for(let j=0; j<n-i-1; j++){  
            if(A[j]>A[j+1]){  
                flag = true;        
                let tmp = A[j];
                A[j]=A[j+1]
                A[j+1] = tmp;
            }
        }
        if(flag===false){
            break;
        }
    }
}

let arr = [1,6,8,87,5,6];
bubbleSort(arr,arr.length)
console.log(arr)


// Time Complexity :      Worst      Best
 //                       O(n2)       

















/*
[1,6,8,87,5,6]    n=6

for(let i=0; i<n-1; i++)      
    for(let j=0; j<n-i-1; j++) 

i             j                  j                  arr     

0        j=0&&j<n-0-1=5         0         1,6-->no swap
                                1         6,8-->no swap
                                2         8,87-->no swap
                                3         87,5-->swap
                                4         87,6-->swap

*/