/*
 * @Author Brock Jones
 * @Date 11/21/2023
 * @Purpose To supply a program that shows the current time (EST) and has a stopwatch tool.
 */
"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const currentTime = new Date().getTime();

    let seconds = Math.floor(currentTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let hours = Math.floor(minutes / 60) - 5; //-5 for Time convertion from UTC to EST (5 hour difference)
    minutes = minutes % 60;
    hours = hours % 24;
   
    let am = true;
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        am = false;
    } 

    if(hours == 0) {
        $("#hours").textContent = "12"; //Set any 0 o'clocks to 12 o'clock.
    } else {
        $("#hours").textContent = hours.toString().padStart(2, '0');
    }
    $("#minutes").textContent = minutes.toString().padStart(2, '0');
    $("#seconds").textContent = seconds.toString().padStart(2, '0');
    
    if(am) {
        $("#ampm").textContent = "AM";
    } else {
        $("#ampm").textContent = "PM";
    }
};


//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsedMinutes = 0;
let elapsedSeconds = 0;
let elapsedMilliseconds = 0;

const tickStopwatch = () => {
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds += 10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if(elapsedMilliseconds == 1000) {
        elapsedSeconds++;
        elapsedMilliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if(elapsedSeconds == 60) {
        elapsedMinutes++;
        elapsedSeconds = 0;
    }
    
    //display new stopwatch time
    $("#s_minutes").textContent = elapsedMinutes.toString().padStart(2, '0');
    $("#s_seconds").textContent = elapsedSeconds.toString().padStart(2, '0');
    $("#s_ms").textContent = elapsedMilliseconds.toString().padStart(3, '0');
};

// event handler functions
const startStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();
        
    // do first tick of stop watch and then set interval timer to tick
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer
    // variable so next two functions can stop timer.
    tickStopwatch();
    stopwatchTimer = setInterval(tickStopwatch, 10);
    
};

const stopStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);
};

const resetStopwatch = evt => {
    // prevent default action of link
    evt.preventDefault();

    // stop timer
    clearInterval(stopwatchTimer);
        
    // reset elapsed variables and clear stopwatch display
    elapsedMinutes = 0;
    elapsedSeconds = 0;
    elapsedMilliseconds = 0;
    
    $("#s_minutes").textContent = "00";
    $("#s_seconds").textContent = "00";
    $("#s_ms").textContent = "000";
};

document.addEventListener("DOMContentLoaded", () => {
	// set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
	
	// set up stopwatch event handlers
    $("#start").onclick = startStopwatch;
    $("#stop").addEventListener("click", stopStopwatch);
    $("#reset").addEventListener("click", resetStopwatch);
});
