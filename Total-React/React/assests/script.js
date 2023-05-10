setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hand-hour]');
const minuteHand = document.querySelector('[data-hand-minute]');
const secondsHand = document.querySelector('[data-hand-second]');
const numberClock = document.querySelector('[data-time]');
const formdata = document.getElementById('addDate');

console.log(document.querySelector('#hours'))
let alarmlist = [];


//set time of wall clock
function setClock() {
    const curdate = new Date();
    const secondsRatio = curdate.getSeconds() / 60;
    const minuteRatio = (secondsRatio + curdate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + curdate.getHours()) / 12;
    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);

    const hour = curdate.getHours() > 12 ? Math.abs(curdate.getHours() - 12) : curdate.getHours();
    const minute = curdate.getMinutes();
    const seconds = curdate.getSeconds();
    const amPm = curdate.getHours() < 12 ? 'AM' : 'PM';
    numberClock.innerHTML = "<h1>" + formatTime(parseInt(hour)) + " : " +
        formatTime(parseInt(minute)) + " : " +
        formatTime(parseInt(seconds)) + "&nbsp;&nbsp;" + amPm + "</h1>";
    checkAlaram(formatTime(parseInt(hour)) + ':' + formatTime(parseInt(minute)) + ':' + formatTime(parseInt(seconds)) + ':' + amPm);



}

//sets proper rotation to wall clock hands
function setRotation(ele, rotationRatio) {
    ele.style.setProperty('--rotation', rotationRatio * 360)

}

//handles the add alaram submit event
function handleSubmitEvent(e) {

    e.preventDefault();
    const hour = formatTime(parseInt(formdata.elements['hours'].value));
    const minutes = formatTime(parseInt(formdata.elements['minutes'].value));
    const seconds = formatTime(parseInt(formdata.elements['seconds'].value));
    const amPm = formdata.elements['ampm']
    const amPmval = amPm.options[amPm.selectedIndex].text;
    const setteledTime = hour + ":" + minutes + ":" + seconds + ":" + amPmval;
    addAlaram(setteledTime);
    document.querySelector('#hours').value = "";
    document.querySelector('#minutes').value = "";
    document.querySelector('#seconds').value = "";


}
//creates a new div adds to DOM 
function createDomEle(setteledTime) {
    let splitTime = setteledTime.split(":");
    let newDiv = document.createElement('div');
    newDiv.setAttribute('data-time', setteledTime);
    newDiv.setAttribute('class', 'alaram');
    newDiv.innerHTML = `<span>${splitTime[0]}:</span><span>${splitTime[1]}:</span><span>${splitTime[2]}:</span><span>${splitTime[3]}</span><span>&ensp;&ensp;&ensp;&ensp;&ensp; <i class="far fa-trash-alt delete "  data-time=${setteledTime} ></i></span>`
    document.getElementsByClassName('alaram-list')[0].prepend(newDiv);
}
//deletes a div if an alaram is deleted
function deleteDomEle(alaramId) {
    console.log("i m caled");
    document.querySelector(`[data-time="${alaramId}"]`).remove();

}

//adds a new alaram and pushes into the alaram
function addAlaram(newTime) {
    if (alarmlist.indexOf(newTime) !== -1) {
        showNotification("Alarm settled for the current selected time");
        return;
    }
    if (newTime) {
        alarmlist.push(newTime);
        //showNotification("alaram settled successfully");
        createDomEle(newTime);
        return;
    }

}
//deletes a alaram from alaram list and and calls delteDom 
function deleteAlaram(id) {
    const index = alarmlist.indexOf(id);
    console.log(index);
    if (index !== -1) {
        alarmlist.splice(index, 1);
    }
    deleteDomEle(id);

}

//check the current times matches with the alaram setteled in alaram list
//if the alaram settled then palys the alaram for 5 seconds
function checkAlaram(curTime) {
    const index = alarmlist.indexOf(curTime);

    if (index === -1) {
        return;
    }
    else {
        showNotification('Hey! this is alaram time');
        var audio = new Audio('audio.mp3');
        audio.play();
        setTimeout(() => { audio.pause() }, 10000);
        document.querySelector(`[data-time="${curTime}"]`).classList.add("alaramDone");
    }
}

//Display the user friendly time formate
function formatTime(val) {
    if (val < 10) {
        return "0" + val;
    }
    return val;

}

//shows alerts when alaram is settled or deleted
function showNotification(msg) {
    alert(msg);
}

//handles the delete alaram 
function handleClickEvent(e) {
    const target = e.target;

    if (target.classList.contains('delete')) {
        const alaramId = target.dataset.time;

        deleteAlaram(alaramId);
    }
}

//initializes our application when the dom loads
function initializeApp() {
    document.addEventListener('click', handleClickEvent);
    formdata.addEventListener('submit', handleSubmitEvent);
    setClock();
}

initializeApp();




