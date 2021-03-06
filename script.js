// Define Variables
var generateBtn = document.querySelector("#generate");

// Characters
var inputLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var inputUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var inputNumeric = ["0","1","2","3","4","5","6","7","8","9"];
var inputSpecial = ["@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];

//Empty Arrays
var passwordInput = [];
var randomCharacters = [];
var passwordLength = 0;
var finalPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Function to generate new password
function generatePassword() {
  
  // Reset array to "" when Generate Password is clicked again
  passwordInput.length = 0;
  randomCharacters.length = 0;
  passwordLength.length = 0;
  finalPassword = "";
  
  // First prompt - Length of password
  passwordLength = parseInt(prompt(
    "What would you like the length of the password to be? (Must be between 8 and 128)")
  );
    // If the input is not a number, alert that the password must be a number
    if (isNaN(passwordLength) === true) {
      confirm("Password must be a number. Please try again.");
      return;
    }
    // If the input is less than 8, alert that the minimum requirement is 8 characters
    if (passwordLength < 8) {
      confirm("Must be between 8-128 characters");
      return;
    }

  // Secondary Prompts - Character types
  // Lowercase characters
  var characterLowercase = confirm("Use lowercase characters? (Press Cancel for 'No')");
    if (characterLowercase === true) {
      for (var i = 0; i < inputLowercase.length; i++){
        passwordInput.push(inputLowercase[i]);
      }
    }
  // Uppercase characters
  var characterUppercase = confirm("Use uppercase characters? (Press Cancel for 'No')");
    if (characterUppercase === true) {
      for (var i = 0; i < inputUppercase.length; i++){
        passwordInput.push(inputUppercase[i]);
      }
    }
  // Numeric characters
  var characterNumeric = confirm("Use numeric characters? (Press Cancel for 'No')");
    if (characterNumeric === true) {
      for (var i = 0; i < inputNumeric.length; i++){
        passwordInput.push(inputNumeric[i]);
      }
    }
  // Special characters
  var characterSpecial = confirm("Use special characters? (Press Cancel for 'No')");
    if (characterSpecial === true) {
      for (var i = 0; i < inputSpecial.length; i++){
        passwordInput.push(inputSpecial[i]);
      }
    }
  getRandomCharacters()
  
  // Alert to try again if no character choices were selected
    if ((characterLowercase === false) && (characterUppercase === false) && (characterNumeric === false) && (characterSpecial === false)) {
      alert ("At least one character type must be selected. Please try again.")
      return;
    }
  // Get random characters, input characters to an array
  function getRandomCharacters() {
    for (var i = 0; i < passwordLength; i++) {
      var charactersGenerated = Math.floor(Math.random() * passwordInput.length)
      randomCharacters.push(passwordInput[charactersGenerated])
    }
    // Join characters into the final password
    finalPassword = randomCharacters.join("")
  }  
  
  // Output password to display box
  return finalPassword;
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
