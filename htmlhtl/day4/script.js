let pounds = document.querySelector("#pounds");
let grams = document.querySelector("#grams");
let kilograms = document.querySelector("#kilograms");
let ounces = document.querySelector("#ounces");

pounds.addEventListener("keyup", (e) => {
    if (e.target.value != "") {
        grams.innerHTML = parseFloat(e.target.value) * 453.592
        kilograms.innerHTML = parseFloat(e.target.value) * 0.453592
        ounces.innerHTML = parseFloat(e.target.value) * 16
    }else{
        grams.innerHTML = 0
        kilograms.innerHTML = 0
        ounces.innerHTML = 0
    }
})