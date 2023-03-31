// VARIABLES TO ACCESS ELEMENTS
const numberButton = document.querySelectorAll("#numbers");
const operatorButton = document.querySelectorAll("#operators");
const cancelButton = document.querySelector("#cancel");
const displayTotal = document.querySelector("#total");
const displayCalculation = document.querySelector("#equals");

// VARIABLES THAT STORE ALL NUMBERS AND ALL OPERATORS

// GLOBAL SCOPE
let number = "";
let operator = "";
let cancel = "";
let total = "";

// when button is clicked, store tezt that is in the button

// FUNCTIONS

const reverseString = (displayTotal) => {
  return displayTotal.reverse().join();
};

//performs when a number is clicked
const handleNumberClick = (event) => {
  const incomingNumber = event.target.innerText;
  number = incomingNumber + number;
  displayTotal.innerText = number;
};

// when an operator is clicked
const handleOperatorClick = (event) => {
  const incomingOperator = event.target.innerText;
  operator = number + incomingOperator;
  displayTotal.innerText = operator;
};

// when cancel is clicked
const handleCancelClick = (event) => {
  const incomingCancel = event.target.innerText;
  displayTotal.innerText = "0";
};

//
//EVENT LISTENERS
// when numbers are clicked
numberButton.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});
//when operators are clicked
operatorButton.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});
// when cancel is clicked
//cancelButton((button) => {
// button.addEventListener("click", handleCancelClick);
//});

//when equals is clicked
