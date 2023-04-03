// VARIABLES TO ACCESS ELEMENTS
const numberButton = document.querySelectorAll("#numbers");
const operatorButton = document.querySelectorAll("#operators");
const cancelButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const displayTotal = document.querySelector("#total");

// GLOBAL SCOPE VARIABLES
let number = "";
let operator = "";
let number1 = "";
let number2 = "";
let total = "";

// FUNCTIONS

// FUNCTION performed when a number is clicked
const handleNumberClick = (event) => {
  const incomingNumber = event.target.innerText;

  // Check if an operator has been clicked before
  if (operator === "") {
    // If no operator has been clicked, update the first number
    number1 += incomingNumber;
    number = number1;
  } else {
    // If an operator has been clicked, update the second number
    number2 += incomingNumber;
    number = operator + number2;
  }

  displayTotal.innerText = number;
};

// FUNCTION performed when an operator is clicked
const handleOperatorClick = (event) => {
  const incomingOperator = event.target.innerText;
  operator = number;
  number = "";
  operator += incomingOperator;
  displayTotal.innerText = operator;
};

// FUNCTION performed when cancel is clicked
const handleCancelClick = () => {
  displayTotal.innerText = "0";
  number = "";
  operator = "";
  number1 = "";
  number2 = "";
  total = "";
};

// FUNCTION performed when equals button is clicked
const handleEqualsClick = () => {
  if (operator === "+") {
    total = number1 + number2;
  } else if (operator === "-") {
    total = number1 - number2;
  } else if (operator === "×") {
    total = number1 * number2;
  } else if (operator === "÷") {
    total = number1 / number2;
  } else {
    total = number;
  }

  displayTotal.innerText = total;
  number = "";
  operator = "";
};

// EVENT LISTENERS

// LISTEN for when numbers are clicked
numberButton.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});
// LISTEN for when operators are clicked
operatorButton.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// LISTEN for when cancel is clicked
cancelButton.addEventListener("click", handleCancelClick);

// LISTEN forwhen equals is clicked

equalsButton.addEventListener("click", handleEqualsClick);
