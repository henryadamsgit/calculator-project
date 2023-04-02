// VARIABLES TO ACCESS ELEMENTS
const numberButton = document.querySelectorAll("#numbers");
const operatorButton = document.querySelectorAll("#operators");
const cancelButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const displayTotal = document.querySelector("#total");

// GLOBAL SCOPE VARIABLES
let number = "";
let operator = "";
let total = "";

// FUNCTIONS

// FUNCTION performed when a number is clicked
const handleNumberClick = (event) => {
  const incomingNumber = event.target.innerText;
  number = number + incomingNumber;
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
};

// FUNCTION performed when equals button is clicked
const handleEqualsClick = () => {
  if (operator === "+") {
    total = Number(total) + Number(number);
  } else if (operator === "-") {
    total = Number(total) - Number(number);
  } else if (operator === "*") {
    total = Number(total) * Number(number);
  } else if (operator === "/") {
    total = Number(total) / Number(number);
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
