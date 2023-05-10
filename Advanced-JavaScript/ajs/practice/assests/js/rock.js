
document.querySelector("#play-game").addEventListener("click",playGame)
// const turn = document.getElementById("game-number");
// const t = parseInt(turn.innerText);
// console.log(t)

const user = document.getElementById("user-points")
const result = document.getElementById("game-result")
const comp = document.getElementById("computer-points")
const left = document.querySelector("#rounds-left")

//const rps = document.querySelectorAll(".Choose")
const styles = "visibility: visible";
const hidden_style = "visibility: hidden";
let points = [0,0];
let end=0;
function playGame(){
    // const t = parseInt(turns)
    // console.log(t)
    debugger
    if(document.querySelector(".game-number").value!==""){
    const turn = document.querySelector(".game-number").value;
    const t = parseInt(turn);
    const rps = document.querySelectorAll(".Choose")
    for(let all of rps){
        all.setAttribute("style",styles)
    }
    rps[0].onclick = () => console.log(rps[0].value)
    rps.forEach(rpsButton => {
        rpsButton.onclick = () => Click(rpsButton.value)
      })
    }
}

//-------------------------->When user clicked on his choice
function Click(userChoice){
    debugger
    //console.log({userChoice});
    const compChoice = getComputerChoice()
    //console.log({compChoice})
    const score = getResult(userChoice,compChoice);
    //console.log(score)
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
   // console.log(t)
    if(end==t){
        //t=0;
        document.querySelector(".game-number").value=""
        getEnd();
    }
}
const div1 = document.querySelector(".comp-choice")

//---------------------->To get Computer Choice
function getComputerChoice(){
    debugger
    div1.innerText=""
    const Comchoice = ["Rock", "Paper", "Scissors"]
    const randomChoice = Math.floor(Math.random()*3)
    // const choiceofC = document.querySelector(".comp-choice");
    div1.innerText = `COMPUTER CHOICE IS : ${Comchoice[randomChoice]}`
    return Comchoice[randomChoice]
}


function getResult(playerChoice, computerchoice){
    debugger
    end++;
    console.log(t,end)
    //console.log(playerChoice,computerchoice)
    //console.log(playerChoice==="Rock")
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


function getScores(points){
    debugger
    const rps = document.querySelectorAll(".Choose")
    //document.getElementById("#game-input").removeEventListener("click",playGame)

    const user = document.getElementById("#rounds-left")
    user.innerText=points[0];

}


function getEnd(){
    const rps = document.querySelectorAll(".Choose");
    for(let all of rps){
        all.setAttribute("style",hidden_style)
    }
    document.querySelector("#play-game").removeEventListener("click",playGame)
}

document.querySelector("#btn1").addEventListener("click",endGame)

function endGame(){
   debugger
    //document.querySelector(".game-input").value=0;
    // l.innerText="Please Enter no. of Turns";
    user.innerText="-";
    comp.innerText="-";
    result.innerText="-";
    left.innerText="-"
    div1.innerText=""
    document.querySelector("#play-game").removeEventListener("click",playGame)
    newGame();
}

function newGame(){
    debugger
    document.querySelector("#play-game").addEventListener("click",playGame)
}