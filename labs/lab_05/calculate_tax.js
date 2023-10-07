/*
 * @Author Brock Jones
 * @Date 10/06/2023
 * @Purpose To supply a functional income tax calculator.
 */
"use strict";
const $ = selector => document.querySelector(selector);

/**
 * Processes the inputted entries from the webpage.
 * Validates user input and runs the income tax calculation
 * if valid. Updates income tax area with calculated amount.
 */
function processEntry(){
	let income = parseFloat($("#income").value);

	if(isNaN(income) || income < 0){
		alert("Income must be a valid number > 0")
	} else {
		$("#tax").value = calculateTax(income).toFixed(2);
	}	

	$("#income").focus();
}

/**
 * Calculates income tax given an income.
 * 
 * @param {Number} income A person's income.
 * @returns The income tax amount.
 */
function calculateTax(income){
	let incomeTax = 0.00;

	if (income <= 9875){
		incomeTax += 0 + (0.10 * income);
	} else if (income <= 40125){
		incomeTax += 987.50 + (0.12 * (income - 9875));
	} else if (income <= 85525){
		incomeTax += 4617.50 + (0.22 * (income - 40125));
	} else if (income <= 163300){
		incomeTax += 14605.50 + (0.24 * (income - 85525));
	} else if(income <= 207350) {
		incomeTax += 33271.50 + (0.32 * (income - 163300));
	} else if(income <= 518400){
		incomeTax += 47367.50 + (0.35 * (income - 207350));
	} else {
		incomeTax += 156235 + (0.37 * (income - 518400));
	}

	return incomeTax;
}

//Event for when the page is loaded. Sets up button event for webpage functionality.
document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});