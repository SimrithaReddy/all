const zipcode = document.querySelector(".zipcode");
const code = document.querySelector("#code");
const box = document.querySelector(".sub-container");
let data="";

zipcode.addEventListener("click", async()=>{
    if(code.value){
        await fetch(`https://api.postalpincode.in/pincode/${code.value}`)
        .then(res => res.json())
        .then((res) => {
            data = res;
        }).catch((e)=>{
            alert(e.message)
        })
    }
    if(data[0].Status==="Error"){
        alert(data[0].Message)
    }else{
        box.innerHTML=`<h2>ZIP CODE DETAILS</h2><br>
        <div class="details">
        <b>Zip Code</b> : ${code.value} <br>
        <b>Area Name</b>: ${data[0].PostOffice[0].Name} <br>
        <b>Block</b> : ${data[0].PostOffice[0].Block}  <br>
        <b>City</b> : ${data[0].PostOffice[0].Region} <br>
        <b>State</b> : ${data[0].PostOffice[0].State}  <br>
        <b>Country</b> : ${data[0].PostOffice[0].Country}
        </div>`
    }
});