/*
 * @Author Brock Jones
 * @Date 10/05/2023
 * @Purpose To supply a functional sales tax calculator that has features such as input validation,
 * and clearing entries.
 */
"use strict";
const $ = selector => document.querySelector(selector);

/**
 * Processes the given inputs to find the sales tax if the input is valid. Gives alerts to the user if
 * they are invalid.
 */
function processEntry(){
	let subtotal = parseFloat($("#subtotal").value);
	let taxRate = parseFloat($("#taxRate").value);
	if(isNaN(subtotal) || subtotal >= 10000 || subtotal <= 0){
		alert("Subtotal must be > 0 and < 10000");
	} else if(isNaN(taxRate) || taxRate >= 12 || taxRate <= 0){
		alert("Tax Rate must be > 0 and < 12");
	} else {
		taxRate /= 100.0;

		let salesTax = subtotal * taxRate;
		let total = subtotal + salesTax;

		$("#salesTax").value = salesTax.toFixed(2);
		$("#total").value = parseFloat(total).toFixed(2);
	}
}

/**
 * Clears the subtotal input field on the webpage.
 */
function clearSubtotal(){
	$("#subtotal").value = "";
}

/**
 * Clears the tax rate input field on the webpage.
 */
function clearTaxRate(){
	$("#taxRate").value = "";
}

/**
 * Clears all entry fields and refocuses cursor.
 */
function clearEntries(){
	clearSubtotal();
	clearTaxRate();
	$("#salesTax").value = "";
	$("#total").value = "";
	moveCursorToSubtotal();
}

/**
 * Focuses cursor on the subtotal input element on the webpage.
 */
function moveCursorToSubtotal(){
	$("#subtotal").focus();
}

//Event listener for when the website loads. Helps apply other event handlers.
document.addEventListener("DOMContentLoaded", () => {
	//Starts users cursor in the subtotal input field.
	moveCursorToSubtotal();
	//Processes entries to find sales tax when the calculate button is pressed.
	$("#calculate").addEventListener("click", processEntry); 
	//Clears all entry fields when the clear button is pressed.
	$("#clear").addEventListener("click", clearEntries);
	//Clears the subtotal input field when the user clicks the input field.
	$("#subtotal").addEventListener("click", clearSubtotal);
	//Clears the tax rate input field when the user clicks the tax rate field.
	$("#taxRate").addEventListener("click", clearTaxRate);
});