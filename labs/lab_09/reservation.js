/*
 * @Author Brock Jones
 * @Date 11/27/2023
 * @Purpose To supply a program that can validate and submit reservation form submissions.
 */
"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#arrival_date").focus();
	$("#reservation_form").on("submit", function( event ) {
		let valid = true;

		if($("#arrival_date").val().trim() == ""){
			$("#arrival_date").next().text("This field is required");
			valid = false;
		}
		
		if($("#nights").val().trim() == "" || isNaN($("#nights").val().trim())){
			$("#nights").next().text("Required and must be numeric");
			valid = false;
		}
		
		if($("#name").val().trim() == ""){
			$("#name").next().text("This field is required");
			valid = false;
		} 
		
		if($("#email").val().trim() == "" || !$("#email").val().trim().match(emailPattern)){
			$("#email").next().text("Required and must be a valid email");
			valid = false;
		} 
		
		if($("#phone").val().trim() == "") {
			$("#phone").next().text("This field is required");
			valid = false;
		} 

		if(!valid) {
			event.preventDefault(); //Prevent form from submitting
		}
	});
});