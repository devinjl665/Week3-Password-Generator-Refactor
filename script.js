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

// Prompt for character types
  var useLowercase = confirm("Use lowercase characters?");
  var useUppercase = confirm("Use uppercase characters?");
  var useNumeric = confirm("Use numeric characters?");
  var useSpecial = confirm("Use special characters?");

  var possibleChars = "";
  if (useLowercase) possibleChars += lowercaseChars;
  if (useUppercase) possibleChars += uppercaseChars;
  if (useNumeric) possibleChars += numericChars;
  if (useSpecial) possibleChars += specialChars;
 
 
// Check if at least one character type is selected
 if (possibleChars === "") {
  alert("Please select at least one character type.");
  return generatePassword();
}

// Generate the password
var password = "";
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * possibleChars.length);
  password += possibleChars.charAt(randomIndex);
}

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);