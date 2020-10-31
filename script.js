// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// First prompt - Length of password
function generatePassword() {
  var passwordLength = parseInt (prompt("What would you like the length of the password to be? (Must be between 8 and 128)"))
  console.log(passwordLength)
    if (isNaN(passwordLength) === true) {
      alert ("Password must be a number")
      generatePassword()
    }
    if (passwordLength < 8) {
      alert ("Must be between 8-128 characters")
      generatePassword()
    }

  // Secondary Prompts - Character types
  var characterLowercase = confirm("Use lowercase characters?")
    // I don't think this is correct...
    var inputLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(characterLowercase);
    console.log(inputLowercase)
    
  var characterUppercase = confirm("Use uppercase characters?")
  // var inputUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    console.log(characterUppercase);
    
  var characterNumeric = confirm("Use numeric characters?")
    // var inputNumeric = "0123456789".split("");
    console.log(characterNumeric);

  var characterSpecial = confirm("Use special characters?")
    // var inputSpecial = "!@#$%^&*".split("");
    console.log(characterSpecial);


  // For Loop to choose password characters 
  // Pretty sure this is wrong and doesn't work
  for(var i = 0; i <= passwordLength; i++) {
    passwordText = password + inputLowercase.charAt(Math.floor(Math.random() * Math.floor(inputLowercase.length - 1)))
  }


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

