const studentName = document.querySelector("#name");
const studentMarks = document.querySelector("#marks");

let result = document.querySelector("#result").innerText; 

document.querySelector("#button").addEventListener("click",addItems);


const tbody = document.querySelector("table tbody")

//👊✋✌
function addItems(){

    debugger
    const row = document.createElement("tr");
    const studentNameTD = document.createElement("td")  //creating an element in row data
    const studentMarksTD = document.createElement("td")

    studentMarksTD.classList.add("student-marks");

    studentNameTD.innerText = studentName.value;        //assigning value to the table data
    studentMarksTD.innerText = studentMarks.value;

    row.appendChild(studentNameTD);                //adding elements to the tabledata
    row.appendChild(studentMarksTD);
    tbody.appendChild(row);                  //appending row data to the tbody in table html page
 
    studentName.value  =""
    studentMarks.value = ""

}



document.querySelector("#total").addEventListener("click",sum);
      //0
console.log(result)

function sum(){
    debugger
    const allMarks = document.querySelectorAll(".student-marks");
    result=0
    for(let Mark of allMarks){
        result+=parseFloat(Mark.innerText);
        console.log(parseFloat(Mark.innerText))   //total+=parseInt(itemprice.innerText);
    }

    document.querySelector("#result").innerText = result;
    //result = 0;
}

