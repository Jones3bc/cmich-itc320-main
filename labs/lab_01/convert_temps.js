/*
 * @Author Brock Jones
 * @Date 09/19/2023
 * @Purpose To convert an infinite number of user-inputted fahrenheit measurements to celsius. The conversions
 * will be displayed on the screen after user input has finished.
 */
"use strict";

//Constants for input validation.
const exitTemp = 999;
const minTemp = -100;
const maxTemp = 212;

//Variable to be used to store user input.
var fahrenheit;

//Array to store all valid user input values.
let fahrenheitArr = [];

do {
    //Get user input
    fahrenheit = parseFloat(prompt("Enter Fahrenheit temperature (" + exitTemp + " to stop)"));
    
    //Add and store valid user input or alert the user if their input was incorrect.
    if(fahrenheit >= minTemp && fahrenheit <= maxTemp){
        fahrenheitArr[fahrenheitArr.length] = fahrenheit;
    } else if(fahrenheit != exitTemp){
        alert(`You entered ${fahrenheit}. \nEntry must range from ${minTemp} to +${maxTemp}.`);
    }
} while(fahrenheit != exitTemp); //Stop getting user input when the user enters the exit temperature amount.
      
//Iterate through each stored fahrenheit amount, convert it to celsius, and write the amounts to the webpage.
for(let i = 0; i < fahrenheitArr.length; i++){
    let celsius = (fahrenheitArr[i] - 32) * (5/9);
    document.write(`<p>${fahrenheitArr[i].toFixed(1)} F = ${celsius.toFixed(1)} C</p>\n`);
}