let start = document.querySelector("#start")
let reset = document.querySelector("#reset")
let number = document.querySelector("#number")
let count = 0;

start.addEventListener("click", ()=>{
    counting = setInterval(()=>{
        number.innerHTML=count
        count++;
        if(count===999){
            count=0;
            number.innerHTML=count
            clearInterval(counting)
            alert("start again exceeded limit")
        }
    }, 100);
})

reset.addEventListener("click", ()=>{
    count = 0;
    number.innerHTML=count
    clearInterval(counting);
})