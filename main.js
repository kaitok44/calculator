let numOne = 0;
let numTwo = 0;
const outputDisplay = document.querySelector("#output-display");
const operator = document.querySelector("#operator");
const numbers = document.querySelector(".numbers");

numbers.addEventListener("click", ({ target }) => {
  if (!target.hasAttribute("value")) {
    return;
  }
  outputDisplay.textContent += target.value;
});

operator.addEventListener("click", () => {});

function addNum(numOne, numTwo) {
  return numOne + numTwo;
}

function subtractNum(numOne, numTwo) {
  return numOne - numTwo;
}

function multiplyNum(numOne, numTwo) {
  return numOne * numTwo;
}

function divideNum(numOne, numTwo) {
  return numOne / numTwo;
}

const operate = function (numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return addNum(numOne, numTwo);
    case "-":
      return subtractNum(numOne, numTwo);
    case "x":
      return multiplyNum(numOne, numTwo);
    case "÷":
      return divideNum(numOne, numTwo);
  }
};
