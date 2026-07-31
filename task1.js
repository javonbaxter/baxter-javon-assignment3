/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Javon Baxter
      Date: July 30, 2026

      Filename: task1.js
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function () {

    // Clear previous validation messages
    pwd.setCustomValidity("");
    pwd2.setCustomValidity("");

    // Check password pattern
    if (!pwd.checkValidity()) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    }

    // Check that both passwords match
    else if (pwd.value !== pwd2.value) {
        pwd2.setCustomValidity("Your passwords must match");
    }

});