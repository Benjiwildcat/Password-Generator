// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let specialCharacters = ["!,@,#,$,%,^,&,*,(,),-,+,"]

let builtArray = [];

function generatePassword() {

  if (confirm("Lowercase Allowed?")) {
    builtArray = [...builtArray, ...lowerAlphabet]

  }

  if (confirm("Uppercase Allowed?")) {

    builtArray = [...builtArray, ...upperAlphabet]
  }

  if (confirm("Numbers Allowed?")) {
    builtArray = [...builtArray, ...numbers]
  }

  if (confirm("special characters?")) {
    builtArray = [...builtArray, ...specialCharacters]
  }

  let passwordLength = prompt("how long do you want your password?")

  let password = "";

  for (let index = 0; index <= passwordLength; index++) {

    let index = Math.floor(Math.random() * builtArray.length);
    password += builtArray[index];

  }

  return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
