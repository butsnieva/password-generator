// Assignment code here
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '"', '`', '*', '=', '|', ';', '<', '>'];



generatePassword = function(){
  var passwordLength = window.prompt("How long do you want your password to be?");
  console.log(passwordLength);
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert("Password mast be at least 8 characters and no more than 128 characters long.");
    return generatePassword();
  }
  if (isNaN(passwordLength) === true) {
    alert("Please enter a number.");
    generatePassword();
  }
  console.log("Your password is " + passwordLength + " characters long");

  var uppercaseConfirm = window.confirm("Do you want to include UPPERCASE characters?");
    if (uppercaseConfirm) {
      writePassword = (Math.random()*uppercaseChar.length);
      console.log(uppercaseConfirm);
    }
  var lowercaseConfirm = window.confirm("Do you want to include LOWERCASE characters?");
    if (lowercaseConfirm) {
      writePassword = (Math.random()*lowercaseChar.length);
      console.log(lowercaseConfirm);
    }
  var numericConfirm = window.confirm("Do you want to include NUMERIC characters?");
    if (numericConfirm) {
      writePassword = (Math.random()*numericChar.length);
      console.log(numericConfirm);
    }
  var specialConfirm = window.confirm("Do you want to include SPECIAL characters?");
    if (specialConfirm) {
      writePassword = (Math.random()*specialChar.length);
      console.log(specialConfirm);
    }
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
