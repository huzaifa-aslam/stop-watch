let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("miliSecond");
let startTime = document.getElementById("start");

let mypauseButton=document.getElementById('pauseButton').src

let myplayButton=document.getElementById('playButton').src

console.log(myplayButton)
let msec = 0;
let sec = 0;
let min = 0;
let interval;
function start() {
    if(start){
        startTime.disabled=true

    }

  msec++;
  miliSecond.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    msec = 0;

    second.innerHTML = sec;
  } else if (sec >= 60) {
    sec = 0;
    min++;

    minute.innerHTML = min;
  }
}

function stop() {


        clearInterval(interval)

}

function reset() {
    startTime.disabled=false
    msec='00'
    sec='00'
    min='00'
    miliSecond.innerHTML=msec
    second.innerHTML=sec
    minute.innerHTML=min
    stop()

}

function timeStart() {
  interval = setInterval(start, 10);
}
