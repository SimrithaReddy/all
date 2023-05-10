let input = document.querySelector("#input-field")
let add_button = document.querySelector("#to-do-button")
let todocontainer = document.querySelector("#to-do-container")

add_button.addEventListener("click",function(){
    debugger
    var paragraph = document.createElement('p')
    paragraph.innerText = input.value;
    todocontainer.appendChild(paragraph)
    //paragraph.innerText=""
})