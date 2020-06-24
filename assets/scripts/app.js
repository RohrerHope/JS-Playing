const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field.
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log.
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //From vendor file.
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== "Add" &&
    calculationType !== "Substract" &&
    calculationType !== "Multiply" &&
    calculationType !== "Divide"
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "Add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Substract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "Divide") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("Add");
}

function substract() {
  calculateResult("Substract");
}

function multiply() {
  calculateResult("Multiply");
}

function divide() {
  calculateResult("Divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
