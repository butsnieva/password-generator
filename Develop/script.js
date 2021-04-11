// Assignment code here
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate").onclick = function(){
  var passwordLength = window.prompt("How long do you want your password to be?");
  console.log(passwordLength);
  while (passwordLength <= 7 || passwordLength >= 128) {
    passwordLength = alert("Password mast be at least 8 characters and no more than 128 characters long.");
    return generateBtn();
  }
  var isANumber = isNaN(passwordLength) === true;
  if (isANumber){
    alert("Please enter a number.");
    generateBtn();
  }
  

  // var uppercaseConfirm = window.confirm("Do you want to include UPPERCASE characters?");
  //   if (uppercaseConfirm) {
  //     password = (Math.random()*uppercaseChar.length);
  //     console.log(uppercaseConfirm);
  //   }
  // var lowercaseConfirm = window.confirm("Do you want to include LOWERCASE characters?");
  // var numericConfirm = window.confirm("Do you want to include NUMERIC characters?");
  // var specialConfirm = window.confirm("Do you want to include SPECIAL characters?");
}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

