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
  if (operator === "%") {
    if (operator === "") {
      firstNumber = calculatePercentage(firstNumber).toString();
      displayTotal.innerText = firstNumber;
    } else {
      secondNumber = calculatePercentage(secondNumber).toString();
      displayTotal.innerText = secondNumber;
    }
  }
  displayTotal.innerText = operator;
};

const handleCancelClick = () => {
  displayTotal.innerText = "0";
  operator = "";
  firstNumber = "";
  secondNumber = "";
  total = "";
};

const handlePercentageClick = (number) => {
  return number / 100;
};

const handleEqualsClick = () => {
  if (operator === "+") {
    if (secondNumber === "0") {
      alert("Error: you cannot add 0");
      return;
    }
    total = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator === "-") {
    if (secondNumber === "0") {
      alert("Error: you cannot minus 0");
      return;
    }
    total = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (operator === "×") {
    if (secondNumber === "0") {
      alert("Error: you cannot divide by 0");
      return;
    }
    total = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator === "÷") {
    if (secondNumber === "0") {
      alert("Error: you cannot multiply by 0");
      return;
    }
    total = parseFloat(firstNumber) / parseFloat(secondNumber);
  } else if (operator === "%") {
    total = parseFloat(firstNumber) / 100;
  } else {
    alert("Error, please try again...");
  }
  if (Number.isInteger(total)) {
    displayTotal.innerText = total.toString();
  } else {
    displayTotal.innerText = total.toFixed(2);
  }
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
