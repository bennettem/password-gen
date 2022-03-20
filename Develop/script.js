// Assignment code here
// declare global vars
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  "/",
  "?",
  "<",
  ">",
  ";",
  ":",
];
//create prompts/confirms
function createPassword() {
  var characterLength = prompt(
    "How long would you like your password? *Must be between 8 to 128 characters long"
  );
  // add stop if criteria doesn't match 8-128
  if (characterLength < 8 || characterLength > 128) {
    alert("Please provide a valid option!");
    createPassword();
  } else {
    var confirmLowercase = confirm(
      "Would you like to include lowercase characters?"
    );
    var confirmUppercase = confirm(
      "Would you like to include uppercase characters?"
    );
    var confirmNumeric = confirm("Would you like to include numbers?");
    var confirmSpecial = confirm(
      "Would you like to include special characters?"
    );
  }
}
createPassword();
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
