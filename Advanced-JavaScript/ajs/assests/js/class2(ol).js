/**
 * DOM
 * ACCESS THE NODE 
 * STORE THE REF OF THAT NODE
 * 
 * 
 * APPLY CSS
 * ADD/REMOVE THE ATTRIBUTES
 * ADD/REMOVE THE CLASS
 * DOM MANIPULATION 
 * DOM EVENTS(FOCUS,  CHANGE(RADIO, CHECKBOX), KEYUP, CLICK, BLUR, HOVER, SUBMIT, MOUSEOVER)
 * CREATING AND ADDING AN ELEMENT TO THE HTML PAGE
 */



const unorderedList = document.querySelector('li');
console.log(unorderedList);

const ListItems = document.querySelectorAll('.item-1');
console.log(typeof ListItems);


const listitem1 = document.querySelector("#item");
console.log(listitem1)

const styles = "box-shadow:5px 5px 15px gray;background-color:lightblue";
listitem1.setAttribute("style",styles)
listitem1.setAttribute("abc","xyz")


// var removeAttr = ["styles","id","abc"]
// setTimeout(function(){
//     for(let attr of removeAttr){
//         listitem1.removeAttribute("style");
//     }
// },5000)

// console.log(listitem1.classList)
// const classlist = ["class1", "class2", "class3", "class4"]

// classlist.splice(1,1);
// console.log(classlist)

//listitem1.classList.add("bolder-text")
//listitem1.setAttribute("class","bolder-text")



function createElement1(){
    debugger
    const noofElements = document.querySelector(".input-text").value;
    const orderedList = document.querySelector('ol');
    const listcount1 = document.querySelectorAll('ol li').length;
    for(let i=0; i<noofElements; i++){
        const listitem2 = document.createElement("li")
        listitem2.classList.add("new-item")   //css property

        listitem2.innerText='OL Item '+(listcount1+(i+1));
        orderedList.appendChild(listitem2)
    }
}

const btn1 = document.querySelector("#create-element");
btn1.addEventListener('click',createElement1)


document.querySelector(".phone").addEventListener('keyup',function(event){

    document.querySelector("#number").innerText=event.target.value;
})

//change, keydown