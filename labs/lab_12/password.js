/*
 * @Author Brock Jones
 * @Date 11/28/2023
 * @Purpose To supply a program that can generate strong passwords of lengths that are determined by the user.
 */
"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
        // Below statement is not needed as the value returned from the previous statement works better for String.charAt(index)
		// random = random + 1;
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";

        let numOfCharacters = $("#num").val().trim();
        if(isNaN(numOfCharacters)){
            alert("Please enter a valid number");
        } else {
            let password = "";

            for(let i = 0; i < numOfCharacters; i++) {
                password = password += chars.charAt(getRandomNumber(chars.length));
            }

            $("#password").val(password);
        }
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()