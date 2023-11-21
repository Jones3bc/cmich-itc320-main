/*
 * @Author Brock Jones
 * @Date 11/21/2023
 * @Purpose To supply a program that can average test scores, find the highest test score,
 * add test scores, and display all test scores.
 */
"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];

/**
 * Calculates the average and highest score and
 * displays these values on the page.
 */
function displayResults(){
	let scoreTotal = 0;
	let highScore = scores[0];
	let highScoreName = scores[0];

	for(let scoreIndex in scores){
		scoreTotal += scores[scoreIndex];

		if(scores[scoreIndex] > highScore) {
			highScore = scores[scoreIndex];
			highScoreName = names[scoreIndex];
		}
	}

	console.log(scoreTotal);
	let div = $("#results");
	div.innerHTML = ''; //Clears div elements.

	let h2 = document.createElement("h2");
	h2.textContent = "Results";

	let p1 = document.createElement("p");
	p1.textContent = "Average score = " + (scoreTotal / scores.length);

	let p2 = document.createElement("p");
	p2.textContent = "High score = " + highScoreName + " with a score of " + highScore;

	div.appendChild(h2);
	div.appendChild(p1);
	div.appendChild(p2);
}

/**
 * Displays all names and scores on the page.
 */
function displayScores (){
	let div = $("#scores");
	div.innerHTML = '';

	let h2 = document.createElement("h2");
	h2.textContent = "Scores";
	div.appendChild(h2);

	for(let scoreIndex in scores) {
		let nameLabel = document.createElement("label");
		nameLabel.textContent = names[scoreIndex];

		let scoreLabel = document.createElement("label");
		scoreLabel.textContent = scores[scoreIndex];

		div.appendChild(nameLabel);
		div.appendChild(scoreLabel);
		div.appendChild(document.createElement("br"));
	}
}

/**
 * Adds a name and score to the names and scores arrays.
 */
function addScore(){
	let newName = $("#name").value;
	let newScore = $("#score").value;
	console.log(newScore);

	if(newName === "" || newScore === "" || isNaN(newScore) || newScore > 100 || newScore < 0){
		$("#name").nextElementSibling.textContent = "Please enter a name.";
		$("#score").nextElementSibling.textContent = "Score must be between 0 and 100.";
		return;
	}

	names[names.length] = newName;
	scores[scores.length] = Number(newScore);

	//Reset values and refocus name input box.
	$("#name").nextElementSibling.textContent = "";
	$("#score").nextElementSibling.textContent = "";
	$("#name").value = "";
	$("#score").value = "";
	$("#name").focus();
}

document.addEventListener("DOMContentLoaded", () => {
	$("#name").focus();
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);
});