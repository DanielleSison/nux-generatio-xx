// HTML Query Properties
 
let generateButton = document.getElementById("generate");
let generatedPassword = document.getElementById("password");

// Generate Password Function

function createRandomPassword(){

// Password characters definition

  let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specialCharacters = "!@#$%^*(){}[]=-+/?~|_";
  let numberCharacters = "0123456789";
  let characterChosen = "";
  let password = "";

  // Character Length Prompt

  let passwordLength = prompt(
    "Please choose how many characters your password must contain. Enter a number between 8 to 128."
  );

  // Character Length Check

  if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)) {
    alert("Please choose a number between 8 and 128.");
    return createRandomPassword();
  } else {
    var lowerCaseCharChosen = confirm("Click ok to confirm if you would like to include lowercase characters"
    );
    var uppercaseCharChosen = confirm("Click ok to confirm if you would like to include uppercase characters"
    );
    var specialCharChosen = confirm("Click ok to confirm if you would like to include special characters"
    );
    var numberCharChosen = confirm("Click ok to confirm if you would like to include numbers"
    );

    // Characters Chosen Check - cycles back when beyond paramaters

    while(lowerCaseCharChosen === false && uppercaseCharChosen === false && specialCharChosen === false && numberCharChosen === false) {
      alert("You must choose at least one character type");
      var lowerCaseCharChosen = confirm("Click ok to confirm if you would like to include lowercase characters"
    );
    var uppercaseCharChosen = confirm("Click ok to confirm if you would like to include uppercase characters"
    );
    var specialCharChosen = confirm("Click ok to confirm if you would like to include special characters"
    );
    var numberCharChosen = confirm("Click ok to confirm if you would like to include numbers"
    );
    }
  }

  // Password Characters Concatenation

if (lowerCaseCharChosen) {
  characterChosen += lowercaseCharacters;
} 
if (uppercaseCharChosen) {
  characterChosen += uppercaseCharacters;
}
if (specialCharChosen) {
  characterChosen += specialCharacters;
}
if (numberCharChosen) {
  characterChosen += numberCharacters;
}

// Character loop

  for ( i = 0; i < passwordLength; i++) {
    password += characterChosen[Math.floor(Math.random() * characterChosen.length)]
  }
  return(password); 

}

// Password must Display in text box

function displayPassword () {
  var password = createRandomPassword();

   if(password.length === 0) {
    return createRandomPassword;
   }
  
  generatedPassword.value = password;

  console.log(password)
}

generateButton.addEventListener("click", displayPassword)