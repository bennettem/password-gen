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
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//create prompts/confirms
function generatePassword() {
  var password = "";
  var passwordArray = [];
  var characterLength = prompt(
    "How long would you like your password? *Must be between 8 to 128 characters long"
  );
  // add stop if criteria doesn't match 8-128
  if (characterLength < 8 || characterLength > 128) {
    alert("Please provide a valid option!");
    return generatePassword();
  }
  var confirmLowercase = confirm(
    "Would you like to include lowercase characters?"
  );
  if (confirmLowercase) {
    passwordArray = passwordArray.concat(lowercase);
  }
  var confirmUppercase = confirm(
    "Would you like to include uppercase characters?"
  );
  if (confirmUppercase) {
    passwordArray = passwordArray.concat(uppercase);
  }
  var confirmNumeric = confirm("Would you like to include numbers?");
  if (confirmNumeric) {
    passwordArray = passwordArray.concat(numeric);
  }
  var confirmSpecial = confirm("Would you like to include special characters?");
  if (confirmSpecial) {
    passwordArray = passwordArray.concat(specialChar);
  }
  // add condition if 'cancel' is clicked
  if (
    confirmLowercase === false &&
    confirmUppercase === false &&
    confirmNumeric === false &&
    confirmSpecial === false
  ) {
    alert("Invalid entry please try again. Must choose at least one criteria");
    return generatePassword();
  }
  // for loop to generate randomized password
  for (var i = 0; i < characterLength; i++) {
    function newPassword() {
      var randomIndex = Math.floor(Math.random() * passwordArray.length);
      var newIndex = passwordArray[randomIndex];
      return newIndex;
    }
    password = password + newPassword();
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
