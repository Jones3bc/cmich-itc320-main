/*
 * @Author Brock Jones
 * @Date 09/19/2023
 * @Purpose To convert an infinite amount of user-inputted number grades to letter grades. These grade conversions
 * will be displayed on the screen after user input has finished.
 */
"use strict";

//Constants for maximum and minimum grade values
const maxGrade = 100;
const minGrade = 0;

//Variable for user input.
var numberGrade;

//Array to store valid user input.
let numberGrades = [];

//Continue to take user input for number grades until the user enters a negative number.
do {
    numberGrade = parseFloat(prompt("Enter number grade from 0 to 100\nOr enter a negative number to end entries"));

    //Validate user input.
    if(numberGrade > maxGrade){
        //Notify the user that they've entered an invalid value.
        alert("You entered " + numberGrade + ". Please enter a number between 0 and 100.")
    } else if(numberGrade >= minGrade){
        //Store the user's inputted valid value for later use.
        numberGrades[numberGrades.length] = numberGrade;
    }
} while(numberGrade >= minGrade); //Stop taking user input when the user enters a negative number.

//Variable to briefly store converted letter grade.
var letterGrade;

//Iterate through each inputted number grade, convert it to a letter grade, and display the conversion.
for(let i = 0; i < numberGrades.length; i++){
    //Get next stored number grade.
    let grade = numberGrades[i];

    //Convert the number grade to a letter grade.
    if(grade >= 94){
        letterGrade = "A";
    } else if(grade >= 90){
        letterGrade = "A-";
    } else if(grade >= 87){
        letterGrade = "B+";
    } else if(grade >= 84){
        letterGrade = "B";
    } else if(grade >= 80){
        letterGrade = "B-";
    } else if(grade >= 77){
        letterGrade = "C+";
    } else if(grade >= 74){
        letterGrade = "C";
    } else if(grade >= 70){
        letterGrade = "C-";
    } else if(grade >= 67){
        letterGrade = "D+";
    } else if(grade >= 64){
        letterGrade = "D";
    } else if(grade >= 60){
        letterGrade = "D-";
    } else if(grade >= 0){
        letterGrade = "E";
    } else {
        letterGrade = "Invalid";
    }

    //Display the number grade's conversion to a letter grade to the page.
    let html = `<p>Grade ${grade} = ${letterGrade}</p>`;
    document.write(html);
}