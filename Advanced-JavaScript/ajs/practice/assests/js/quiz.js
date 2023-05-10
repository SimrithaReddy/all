let wrong1 = document.querySelector("#wrong")
let right1 = document.querySelector(".right-ans")
let r1 = document.querySelector(".r")
wrong1.addEventListener("click",function(){
    let paraLine = document.querySelector(".result")
    paraLine.innerText = `${wrong1.value} is a wrong answer`
})
right1.addEventListener("click",function(){
    debugger
    let paraLine = document.querySelector(".result")
    console.log(r1.innerText)
    paraLine.innerText = `${r1.innerText } is a right answer`;
})