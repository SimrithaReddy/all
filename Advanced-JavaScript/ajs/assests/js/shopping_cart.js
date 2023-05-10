const itemname = document.querySelector('#item-name-input');
const itemprice = document.querySelector('#item-price-input');
let total = document.querySelector('#grand-total').innerText;
document.querySelector("#add-item").addEventListener('click', addItem);



const tbody = document.querySelector('table tbody');

function addItem() {

    if (itemname.value != "" && itemprice.value != "") {
        const row = document.createElement('tr');      //2
        const itemnameTD = document.createElement('td');
        const itempriceTD = document.createElement('td');
        itempriceTD.classList.add('item-price');
        itemnameTD.innerText = itemname.value;
        itempriceTD.innerText = itemprice.value;

        row.appendChild(itemnameTD)
        row.appendChild(itempriceTD)
        tbody.appendChild(row);

        itemname.value = ""
        itemprice.value = ""

        const allPrices = document.querySelectorAll(".item-price")

        total = 0;
        for (let itemprice of allPrices) {
            total += parseInt(itemprice.innerText);
        }
        document.querySelector('#grand-total').innerText = total;

    }
}