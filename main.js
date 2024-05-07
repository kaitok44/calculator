let numOne = 0;
let numTwo = 0;
let operator = "";

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
    case "*":
      return multiplyNum(numOne, numTwo);
    case "/":
      return divideNum(numOne, numTwo);
  }
};
