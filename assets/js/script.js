// Generate button window prompt

document.querySelector("#generate").addEventListener("click", writePassword);

// Variable definition

  // Password Variable

    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Prompt and Validation Variable
    var length = "";
    var specialCharacter;
    var numericCharacter;
    var upperCase;
    var lowerCase;



// Prompt criteria 1 (Length)- Character length from 8 characters to 128 characters
function generatePassword() {
  var length = (prompt("Choose and input a password length between 8 and 128 characters. (Please type in a number value)"));

// Prompt validation - length

  while(length <= 7 || length >= 129){
    alert("Password length must be between 8 to 128 characters, try again.");
    var length = (prompt("Please choose and input a password length between 8 and 128 characters. (Type in a number value)"));
  }

// Prompt criteria 2 (Character types) - lowercase, uppercase, numeric, and/or special characters

specialCharacter = confirm("Click OK to confirm if you want to include Special Characters into your generated password.");
numericCharacter = confirm("Click OK to confirm if you want to include Numeric Characters into your generated password.");
upperCase = confirm("Click OK to confirm if you want to include Uppercase Characters into your generated password.");
lowerCase = confirm("Click OK to confirm if you want to Lowercase Characters into your generated password.");

// Promp criteria 2 (Character types) - if none were chosen, alert to choose again

  while(upperCase === false && lowerCase === false && numericCharacter === false && specialCharacter === false) {
  alert("You must choose at least one character type for password generation");
    var specialCharacter = confirm("Click OK to confirm if you want to include Special Characters into your generated password.");
    var numericCharacter = confirm("Click OK to confirm if you want to include Numeric Characters into your generated password.");
    var upperCase = confirm("Click OK to confirm if you want to include Uppercase Characters into your generated password.");
    var lowerCase = confirm("Click OK to confirm if you want to Lowercase Characters into your generated password.");
  }


  // Promp chosen - password generation for selected criteria
  var passwordCharacters = []

  // Individual Conditional statements for character type criteria inclusion

  if (specialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (numericCharacter) {
    passwordCharacters = passwordCharacters.concat(numeric)
  }
    
  if (lowerCase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  }

  if (upperCase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  }

    // Random Password Generation
    var randomPassword = ""
    
    for (var i = 0; i < length; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;
}


// Password must display as an alert or written on page

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

