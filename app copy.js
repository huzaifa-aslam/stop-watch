let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("miliSecond");

//console.log(minute,second,miliSecond.innerHTML='j')
let msec = 0;
let sec = 0;
let min = 0;
let interval;
function start() {
    // if(start){

    // }
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
    msec=0
    sec=0
    min=0
    miliSecond.innerHTML=msec
    second.innerHTML=sec
    minute.innerHTML=min
    stop()

}

function timeStart() {
  interval = setInterval(start, 10);
}
