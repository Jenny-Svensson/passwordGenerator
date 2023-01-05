const pwEl = document.querySelector("#pw");
const copyEl = document.querySelector("#copy");

const lenEl = document.querySelector("#len");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");

const generateEl = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

// Functions

// let lowercases be random
function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

// let uppercases be random
function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

// let numbers be random
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

// let symbols be random
function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
  const len = lenEl.value;
  let password = "";
  for (let i = 0; i < len; i++) {
    const checked = generateChecked();
    password += checked;
  }
  pwEl.innerText = password;
}

function generateChecked() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUpperCase());
  }
  if (lowerEl.checked) {
    xs.push(getLowerCase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";
  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", copyPassword);

function copyPassword() {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("copied!");
}
