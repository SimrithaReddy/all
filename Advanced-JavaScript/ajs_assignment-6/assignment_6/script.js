document.querySelector("#play-game").addEventListener("click",playGame)
const user = document.getElementById("user-points")
const result = document.getElementById("game-result")
const comp = document.getElementById("computer-points")
const left = document.querySelector("#rounds-left")

const styles = "visibility: visible";
const hidden_style = "visibility: hidden";
let points = [0,0];
let end=0;
function playGame(){
    debugger
    const rps = document.querySelectorAll(".Choose")
    for(let all of rps){
        all.setAttribute("style",styles)
    }
    rps[0].onclick = () => console.log(rps[0].value)
    rps.forEach(rpsButton => {
        rpsButton.onclick = () => Click(rpsButton.value)
      })
}

function Click(userChoice){
    debugger
    const compChoice = getComputerChoice()
    const score = getResult(userChoice,compChoice);
    user.innerText=points[0];
    comp.innerText=points[1];
    if(points[0]>points[1]){
        result.innerText = "You Won"
    }else{
        result.innerText = "Better Luck Next Time"
    }
    const turn = document.querySelector(".game-number").value;
    const t = parseInt(turn);
    left.innerText = t-end;
    console.log(t)
    if(end==t){
        getEnd();
    }
}
const div1 = document.querySelector(".comp-choice")
function getComputerChoice(){
    debugger
    div1.innerText=""
    const Comchoice = ["Rock", "Paper", "Scissors"]
    const randomChoice = Math.floor(Math.random()*3)
    div1.innerText = `COMPUTER CHOICE IS : ${Comchoice[randomChoice]}`
    return Comchoice[randomChoice]
}
function getResult(playerChoice, computerchoice){
    debugger
    end++;
    console.log(end)
    console.log(playerChoice,computerchoice)
    console.log(playerChoice==="Rock")
    if(playerChoice==computerchoice){
        points[0]=points[0]+0;
        points[1]=points[1]+0;
    }else if(playerChoice==="Rock" && computerchoice==="Scissors"){
        points[0]=points[0]+1;
    }else if(playerChoice==="Paper" && computerchoice==="Rock"){
        points[0]=points[0]+1;
    }else if(playerChoice==="Scissors" && computerchoice==="Paper"){
        points[0]=points[0]+1;
    }else{
        points[1]=points[1]+1;
    }
    return points;
}


function getEnd(){
    const rps = document.querySelectorAll(".Choose");
    for(let all of rps){
        all.setAttribute("style",hidden_style)
    }
}
document.querySelector("#btn1").addEventListener("click",endGame)
function endGame(){
    const l = document.querySelector(".game-number");
    l.innerText="Please Enter no. of Turns";
    user.innerText="-";
    comp.innerText="-";
    result.innerText="-";
    left.innerText="-";
    div1.innerText=""

}