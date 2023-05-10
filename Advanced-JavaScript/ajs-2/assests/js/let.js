//--------------------->For Shuffling

var imgArr=["lion.jfif","wolf.jfif","elephant.jfif","horse.jfif","dolphin.jfif"]

let idArr = [1,2,3,4,5]
function reload(){
    let images=imgArr.concat([])
    i=Math.floor(Math.random()*5)
    images.push(imgArr[i])
    for(j=0;j<idArr.length;j++){
        let k=Math.floor(Math.random()*images.length)
        document.getElementById(idArr[j]).setAttribute("src",images[k])
        images.splice(k,1)
    }}

    let arr =[], count=0;
    ids.forEach(id=>{
        reset.style="visibility:visible"
        id.onclick=arr.push(id);
        count++;
        if(count==2){
            verify(arr);
        }
    })