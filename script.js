// Assignment Code
var generateBtn = document.querySelector("#generate");
let passwordLength = 0;
let finalPassword = [];
let selection = [];

let lowerCaseAlphabet = [
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
let upperCaseAlphabet = [
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
let specialCharacters = [
  "!",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "\\",
  "'",
  '"',
];
let numericalcharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let askPrompt = function () {
  passwordLength = prompt("Type length of password desired");

  let lower = confirm("click 'OK' for lowercase character");
  let upper = confirm("click 'OK' for upper character");
  let number = confirm("click 'OK' for number character");
  let special = confirm("click 'OK' for special character");

  while (passwordLength === 0 || passwordLength === false) {
    alert("Please input a valid number");
    passwordLength = prompt("Type length of password desired");
  }

  while (!lower && !upper && !number && !special) {
    alert("Please click 'OK' on at least one prompt!");
    lower = confirm("click ok for lowercase character");
    upper = confirm("click ok for upper character");
    number = confirm("click ok for number character");
    special = confirm("click ok for special character");
  }

  if (lower) {
    console.log("lower");
    selection = selection.concat(lowerCaseAlphabet);
  }
  if (upper) {
    console.log("upper");
    selection = selection.concat(upperCaseAlphabet);
  }
  if (special) {
    console.log("special");
    selection = selection.concat(specialCharacters);
  }
  if (number) {
    console.log("number");
    selection = selection.concat(numericalcharacters);
  }
  console.log("selection:" + selection);
};

function generatePassword() {
  while (finalPassword.length < passwordLength) {
    i = Math.floor(Math.random() * selection.length);
    char = selection[i];
    finalPassword += char;
  }
}
function writePassword() {
  finalPassword = [];
  generatePassword();
  console.log(finalPassword);
  passwordText = finalPassword;
  var passwordText = document.querySelector("#password");
  passwordText.textContent = finalPassword;
  passwordText.value = finalPassword;
}

generateBtn.addEventListener("click", writePassword);

askPrompt();
generatePassword();
