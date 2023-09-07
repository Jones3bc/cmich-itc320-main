"use strict";

// initialize total variable
let total = 0.0;

//get 4 scores from user and add them together
const scoreArray = [];

for(let i = 0; i < 4; i++){
    scoreArray[i] = parseInt(prompt("Enter test score"));
    total += scoreArray[i];
}

//calculate the average
const average = parseFloat(total/4.0);

// display the scores on the page
const html = `<p>Score 1 = ${scoreArray[0]}</p>
    <p>Score 2 = ${scoreArray[1]}</p>
    <p>Score 3 = ${scoreArray[2]}</p>
    <p>Score 4 = ${scoreArray[3]}</p>
    <p>Average score = ${average}</p>`;
document.write(html);

//display an alert that shows the information
alert("Score 1 = " + scoreArray[0] 
    + "\nScore 2 = " + scoreArray[1] 
    + "\nScore 3 = " + scoreArray[2] 
    + "\nScore 4 = " + scoreArray[3] 
    + "\n\nAverage score = " + average);