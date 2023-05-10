const btn = document.querySelector(".total")
const allPrices = document.querySelectorAll(".prices")
console.log(allPrices)
const display = document.getElementById("grandTotal")
let sum = 0;
const total = document.createElement("tr")
total.classList.add("center")



btn.addEventListener("click",function(){
    debugger
    total.innerText=""
    for(let price of allPrices){
        sum= sum + parseFloat(price.value)
    }
    total.innerText = `Total sum of items is:- ${sum}`;
    display.appendChild(total)

    alert("THANKS FOR SHOPPING")
})