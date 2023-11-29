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

		let arrivalDate = $("#arrival_date").val().trim();
		if(arrivalDate == ""){
			$("#arrival_date").next().text("This field is required");
			valid = false;
		} else {
			$("#arrival_date").next().text("*");
		}
		$("#arrival_date").val(arrivalDate);
		
		let nights = $("#nights").val().trim();
		if(nights == "" || isNaN(nights)){
			$("#nights").next().text("Required and must be numeric");
			valid = false;
		} else {
			$("#nights").next().text("*");
		}
		$("#nights").val(nights);
		
		let name = $("#name").val().trim();
		if(name == ""){
			$("#name").next().text("This field is required");
			valid = false;
		} else {
			$("#name").next().text("*");
		}
		$("#name").val(name);
		
		let email = $("#email").val().trim();
		if(email == "" || !email.match(emailPattern)){
			$("#email").next().text("Required and must be a valid email");
			valid = false;
		} else {
			$("#email").next().text("*");
		}
		$("#email").val(email);
		
		let phone = $("#phone").val().trim();
		if(phone == "") {
			$("#phone").next().text("This field is required");
			valid = false;
		} else {
			$("#phone").next().text("*");
		}
		$("#phone").val(phone);

		if(!valid) {
			event.preventDefault(); //Prevent form from submitting
		}
	});
});