const displayOne = document.querySelector(".display1");
const displayTwo = document.querySelector(".display2");
const tempResult = document.querySelector(".temp-result");
const operation = document.querySelectorAll(".operation");
const number = document.querySelectorAll(".number");
const equals = document.querySelector(".equals");
const clearAll = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");
const dot = document.querySelector(".dot");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

number.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.textContent === "." && haveDot) {
      return;
    }
    dis2Num += e.target.textContent;
    displayTwo.textContent = dis2Num;
  });
});

operation.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.textContent;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  displayOne.textContent = dis1Num;
  displayTwo.textContent = "";
  dis2Num = "";
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "÷") {
    if (dis2Num === "0") {
      result = "lmao";
    } else {
      result = parseFloat(result) / parseFloat(dis2Num);
    }
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equals.addEventListener("click", () => {
  if (!dis1Num || !dis2Num) result;
  haveDot = false;
  mathOperation();
  clearVar();
  displayTwo.textContent = result;
  dis2Num = result;
  dis1Num = "";
});

clearAll.addEventListener("click", () => {
  displayOne.textContent = "";
  displayTwo.textContent = "";
  dis1Num = "";
  dis2Num = "";
  result = "";
});

backspace.addEventListener("click", () => {
  displayTwo.textContent = displayTwo.textContent.toString().slice(0, -1);
  dis2Num = displayTwo.textContent;
});

window.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    clickButton(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "%" || e.key === "x") {
    clickOperation(e.key);
  } else if (e.key === "/") {
    clickOperation("÷");
  } else if (e.key === "Enter" || e.key === "=") {
    equals.click();
  } else if (e.key === ".") {
    dot.click();
  } else if (e.key === "Backspace") {
    backspace.click();
  } else if (e.key === "Escape") {
    clearAll.click();
  }
});

function clickButton(key) {
  number.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operation.forEach((button) => {
    if (button.textContent === key) {
      button.click();
    }
  });
}
