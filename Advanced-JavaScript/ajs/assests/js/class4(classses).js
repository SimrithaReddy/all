class Shopping{
    //take the item 
    //add in list
    //calculate total
    constructor(name,price){           
        this.itemname = name;     // for datahiding property        
        this.itemprice = price;
        this.tax = 18;
    }


    static CURRENCY = "INR" //PUBLIC PROPERTY
    static #Margin = "2"       //PRIVATE PROPERTY

    static get Currency(){
        return this.CURRENCY;
    }

    init(){
        this.total = document.querySelector('#grand-total').innerText;
        this.tbody = document.querySelector('table tbody');
    }



    

   addItem(){
    debugger
        if(this.itemname!="" && this.itemprice!=""){
        const row = document.createElement('tr');
        const itemnameTD = document.createElement('td');
        const itempriceTD = document.createElement('td');
        itempriceTD.classList.add('item-price');
        itemnameTD.innerText= this.itemname;
        itempriceTD.innerText=this.itemprice+Shopping.Currency;

        row.appendChild(itemnameTD)
        row.appendChild(itempriceTD)
        this.tbody.appendChild(row);


        this.calculcate()
}
}

    calculcate(){
        const allPrices = document.querySelectorAll(".item-price")
        this.total = 0
        for(let itemprice of allPrices){
            this.total+=parseInt(itemprice.innerText);
        }
        document.querySelector('#grand-total').innerText=this.total;
    }

    reset(itemname,itemprice){
        itemname.value="";
        itemprice.value="";
    }


    get TotalValue(){
        console.log(this.total+((this.total*this.tax)/100))
        return this.total = (this.total+((this.total*this.tax)/100))
    }

    // set TotalValue(x){
    //     this.total = (x+(x=this.total)/100)
    // }
/*

=> GEETTERS : getter method used to have access of classes variable/properties/attributes

=>SETTERS : setter method used to set or update values of classes variable/properties/attributes

*/
    get Tax(){
        return this.tax;
    }

    set Tax(x){
        this.tax = x;
    }
    addTaxes(){
        
    }
}


function addintoShoppingcart(){
    debugger
    const itemname = document.querySelector('#item-name-input');
    const itemprice = document.querySelector('#item-price-input');
    let item = new Shopping(itemname.value,itemprice.value);
    item.init();
    item.addItem();
    item.tax = 18;   //Calling of setter method
    console.log("gst value is:-",item.TotalValue)
    item.reset(itemname,itemprice)
    document.querySelector("#Gst").innerText = item.TotalValue;
}

document.querySelector("#add-item").addEventListener('click',addintoShoppingcart);