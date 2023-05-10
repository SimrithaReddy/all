document.querySelector("#operator").addEventListener("click",add);


function add(){

    debugger
    const value1 = document.querySelector("#value1");
    const value2 = document.querySelector("#value2");
    let result = document.querySelector("#result");

    result.innerHTML = parseInt(value1.value) + parseInt(value2.value)

}