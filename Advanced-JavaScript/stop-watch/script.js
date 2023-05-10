let start = document.getElementById('start');
let stop = document.getElementById('stop');
let pause = document.getElementById('pause');
let stopwatchBox = document.getElementById("stopwatch-box");

let [hr,min,sec] = [0,0,0]
let count = 0;
let flag = true;
let timer;

start.addEventListener('click', function () {
	start.disabled=true;
	[hr,min,sec] = [0,0,0]
	timer = true;
	stopWatch();
});

stop.addEventListener('click', function () {
	start.disabled=false;
	timer = false;
	[hr,min,sec] = ["00","00","00"]
	stopwatchBox.innerText = `${hr}:${min}:${sec}`
});

pause.addEventListener('click', function () {
	[hr,min,sec] = [0,0,0]
    if(flag==true){
		timer = false;
	    pause.innerText="Continue";
		flag=false;
	}else{
		flag=true;
		pause.innerText="Pause";
		timer = true;
		stopWatch();
	}
});

function makeTwoDigits(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
}

function stopWatch() {
    let display;
	if (timer) {
		count++;
		if (count == 100) {
			sec++;
			count = 0;
		}
    
		if (sec===60) {
			min++;
			sec = 0;
		}

		if (min == 60) {
			hr++;
			sec = 0;
			min = 0;
		}
		display = makeTwoDigits(hr) + ":" + makeTwoDigits(min) + ":" + makeTwoDigits(sec);
		stopwatchBox.innerText = display;
		setTimeout(stopWatch, 10);
	}
}
