let arr= [1,2,3,4,5]
let rotate =[]
let n=3
function arrrotate(arr,n){
    for(let i=0; i<arr.length;i++){
        let tmp=arr[i]
        arr[i]=arr[i]
        arr[i]=tmp
    }
    console.log(arr)

}
arrrotate(arr,n)
