// VARIABLES TO ACCESS ELEMENTS
const numberButtons = document.querySelectorAll("#numbers");
const operatorButtons = document.querySelectorAll("#operators");
const cancelButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const displayTotal = document.querySelector("#total");

// GLOBAL SCOPE VARIABLES
let operator = "";
let firstNumber = "";
let secondNumber = "";
let total = "";

// FUNCTIONS
const handleNumberClick = (event) => {
  const incomingNumber = event.target.innerText;
  if (operator === "") {
    firstNumber += incomingNumber;
    displayTotal.innerText = firstNumber;
  } else {
    secondNumber += incomingNumber;
    displayTotal.innerText = secondNumber;
  }
};

const handleOperatorClick = (event) => {
  const incomingOperator = event.target.innerText;
  operator = incomingOperator;
  displayTotal.innerText = operator;
};

const handleCancelClick = () => {
  displayTotal.innerText = "0";
  operator = "";
  firstNumber = "";
  secondNumber = "";
  total = "";
};

const handleEqualsClick = () => {
  if (operator === "+") {
    total = firstNumber + secondNumber;
  } else if (operator === "-") {
    total = firstNumber - secondNumber;
  } else if (operator === "×") {
    total = firstNumber * secondNumber;
  } else if (operator === "÷") {
    total = firstNumber / secondNumber;
  } else {
    alert("Error, please try again...");
  }
  displayTotal.innerText = total;
};

// EVENT LISTENERS
numberButtons.forEach((button) => {
  button.addEventListener("click", handleNumberClick);
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});
cancelButton.addEventListener("click", handleCancelClick);

equalsButton.addEventListener("click", handleEqualsClick);
