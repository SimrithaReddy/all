let input = document.querySelector('#input-sum')

let range_1 = document.querySelector('#range-a')
let res1 = document.querySelector('#range-a-value')

let range_2 = document.querySelector('#range-b')
let res2 = document.querySelector('#range-b-value')
let sum = document.querySelector('#sum')

range_1.addEventListener('input', calculate);
range_2.addEventListener('input', calculate);
input.addEventListener('input', calculate);

function calculate(event) {
    range_1.max = parseInt(input.value) - parseInt(range_2.value)
    range_2.max = parseInt(input.value) - parseInt(range_1.value)

    sum.innerText= `${+range_1.value + +range_2.value}`;

    range_1.innerText = range_1.value;
    range_2.innerText = range_2.value;
}