function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}


function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = new Array(n1);
    var R = new Array(n2);
    
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    var i = 0;
    var j = 0;
 
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}


function activityNotifications(expenditure, d) {
// Write your code here


let notification = 0;
for (let i = 0; i < expenditure.length - d; i++) {
    // console.log(i);
    let slice = expenditure.slice(i, i + d)
   mergeSort(slice,0,slice.length-1)
   
    let median = 0;
    if (d % 2 !== 0) {
        let m = parseInt(d / 2);
        median = 2 * (slice[m])
    } else {
        let m = parseInt((d - 1) / 2);
        let add = slice[m] + slice[m + 1]
        median = 2 * (add / 2)
    }
    // console.log(slice)
    // console.log(median)
    if (expenditure[i + d] > median || expenditure[i + d] == median) {
        notification++;
    }
}


return notification;

}

let expenditure = [1,2,3,4,4];
expenditure = [2,3,4,2,3,6,8,4,5]
let d = 5;
console.log(activityNotifications(expenditure,d))