// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password
function generatePassword() {
  var passwordLength;
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

// Prompt for the password length
  do {
    passwordLength = parseInt(prompt("Enter the password length (between 10 and 128 characters):"));
  } while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 128);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}