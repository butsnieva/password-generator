// Assignment code here
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '"', '`', '*', '=', '|', ';', '<', '>'];


generatePassword = function(){
  var passwordLength = window.prompt("How long do you want your password to be?");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password mast be at least 8 characters and no more than 128 characters long.");
    return generatePassword();
  }
  if (isNaN(passwordLength) === true) {
    alert("Please enter a number.");
    return generatePassword();
  }

  var characters = [];
    var uppercaseConfirm = window.confirm("Do you want to include UPPERCASE characters?");
      if (uppercaseConfirm) {
        characters = characters.concat(uppercaseChar);
      }
    var lowercaseConfirm = window.confirm("Do you want to include LOWERCASE characters?");
      if (lowercaseConfirm) {
        characters = characters.concat(lowercaseChar);
      }
    var numericConfirm = window.confirm("Do you want to include NUMERIC characters?");
      if (numericConfirm) {
        characters = characters.concat(numericChar);
      }
    var specialConfirm = window.confirm("Do you want to include SPECIAL characters?");
      if (specialConfirm) {
        characters = characters.concat(specialChar);
      }
      
    if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialConfirm) {
      window.alert("At least one character type should be selected!");
      return generatePassword();
    } 

  var randomPassword = [];
  for (var i = 0; i < passwordLength; i++) {
    var formula = Math.floor(Math.random() * characters.length);
    var selectRandomCaharacter = characters[formula];
    randomPassword.push(selectRandomCaharacter);
  }
  return randomPassword.join('');
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
