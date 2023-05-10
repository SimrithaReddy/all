function insertionSort(arr,n){
    for(let i=1; i<n; i++){
        let key = arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            console.log(arr)
            j--;
        }
        arr[j+1] = key;
    }
}

let arr = [5,6,9,12,7,87,97,78];
insertionSort(arr,arr.length);
console.log(arr)



//Time Complexity :   WorstCases          BestCases
//                       O(n2)              O(n)

//Space Complexity : O(1)



/*
5 6 9 12 7 87 97 78
0 1 2 3  4  5 6  7

cond                             (arr[j]>key)=>arr[j+1]=arr[j]
i          key          j        arr[j]  while loop                 arr[j+1]=key
0        arr[0]=5      0-1=0                   F                       5
1        arr[1]=6      1-1=0      5        F                          arr[j+1]=6
arr=  5 6 9 12 7 87 97 78
2        arr[2]=9       2-1=1   arr[1]=6   F                          arr[j+1]=9
3        arr[3]=12     3-1=2    arr[2]=9   F
4        arr[4]=7      4-1=3    arr[3]=12  12>7 j=3
.                                     arr[4]=arr[3]=12   j=2
.                                        arr[2]>7
.                                     arr[3]=arr[2]=9    j=1
.                                         arr[1]>key=7     
.                                              F                      arr[2]=7
arr = 5 6 7 9 12 7 87 97 78
*/

