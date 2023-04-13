// this array is to initialize milliseconds,seconds,minutes,hours
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

// this variable is to refer to timer display
let timeShow = document.getElementById("timeshow");

// this variable is to use for clearing intervals
let timeref=null;

// this function will be executed when user clicks on start button
document.getElementById("start").onclick = function(){
    if(timeref != null){
        clearInterval(timeref);
    }
//if timeref is null then updateTime function will be called for every 10ms 
    timeref = setInterval(updateTime, 10);
};

//this function is to update milliseconds,seconds,minutes,hours variables 
function updateTime(){
  milliseconds += 10;
  if(milliseconds == 1000){
    seconds += 1;
    milliseconds = 0;
    if(seconds == 60){
      minutes += 1;
      seconds = 0;
      if(minutes == 60){
        hours += 1;
        minutes = 0;
      }
    }
  }

  //these variables are for displaying time in display timer
  // if and else conditions are just to make display timer look good
  let hoursDisplay, minutesDisplay, secondsDisplay, millisecondsDisplay;
  if(hours < 10){
    hoursDisplay = "0" + hours;
  }else{
    hoursDisplay = hours;
  }

  if(minutes < 10){
    minutesDisplay = "0" + minutes;
  }else{
    minutesDisplay = minutes;
  }

  if(seconds < 10){
    secondsDisplay = "0" + seconds;
  }else{
    secondsDisplay = seconds;
  }

  if(milliseconds < 10){
    millisecondsDisplay = "00" + milliseconds;
  }else if(milliseconds < 100){
    millisecondsDisplay = "0" + milliseconds;
  }else{
    millisecondsDisplay = milliseconds;
  }
  //this will show time in display timer
  timeShow.innerHTML = `${hoursDisplay} : ${minutesDisplay} : ${secondsDisplay} : ${millisecondsDisplay}`;
}

/* this function will be executed when user clicks on pause button.
 this clearInterval is used to clear setInterval function on which updateTime is called which then leads to 
 pausing of time*/
document.getElementById('pause').onclick = function(){
  clearInterval(timeref);
};

/* this function will be executed when user clicks on reset button. 
this clearInterval is used to clear setInterval function on which updateTime is called and to bring back everything
to zero, we are updating milliseconds,seconds,minutes,hours variables.
*/
document.getElementById('reset').onclick = function(){
   clearInterval(timeref);
   milliseconds = 0;
   seconds = 0;
   minutes = 0;
   hours = 0;
   timeShow.innerHTML = "00 : 00 : 00 : 000"
};