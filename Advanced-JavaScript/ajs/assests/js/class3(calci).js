document.querySelector("#operator").addEventListener("change",calculate);
document.querySelector("#operator").addEventListener("mouserover",calculate);

    function calculate(event){
        debugger
        const  value1 = document.querySelector("#operand1");
        const  value2 = document.querySelector("#operand2");
        //const inputs = document.querySelector("[type=text")

        if(value1.value!="" && value2.value!=""){
        const result = document.querySelector("#result")
        const operator = event.target.value;
        let output =0;
        switch(operator){
            case "add":
                output = parseInt(value1.value) + parseInt(value2.value);
                break;
            case 'sub':
                output = parseInt(value1.value) - parseInt(value2.value);
                break;
            case 'mul':
                output = parseInt(value1.value) * parseInt(value2.value);
                break;
            case 'division':
                output = parseInt(value1.value)/parseInt(value2.value);
                break;
        }

        result.innerText = `${operator} result of operand 1:- ${value1.value}  and operand2 :- ${value2.value} = ${output}`;
        value1.value="";
        value2.value="";
    }
    else{
        alert("INVALID INPUT")
    }

    alert(eval(`${value1.value} + ${value2.value}`))
    }
