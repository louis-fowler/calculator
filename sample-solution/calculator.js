// set up variables to store inputs as they Come. final function on equals button to do Math.
//  varibale array to store whole input then run function to doo Math.
display = document.getElementById("display");

let sumArray = [];
let totalNum = "";

// add function to all buttons
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let sym = buttons[i].innerHTML;
    if (sym === "AC") {
      return (
        (sumArray = []),
        (totalNum = ""),
        (display.innerHTML = sumArray.join(" "))
      );
    } else if (sym === "CE") {
      return (sumArray = []), (display.innerHTML = sumArray.join(" "));
    } else if (sym === "=") {
      return quickMafs();
    } else if (isNaN(sym)) {
      sym = sym;
    } else {
      sym = parseInt(sym);
    }
    sumArray.push(sym);
    display.innerHTML = sumArray.join(" ");
  });
}

const quickMafs = () => {
  let firstNum = "";
  let secondNum = "";
  let onlyNum = "";
  let sumCopy = [...sumArray];
  // find nan but not .
  const findNan = sumCopy.find(
    i => i === "X" || i === "-" || i === "+" || i === "/" || i === "%"
  );
  const nanIndex = sumCopy.findIndex(key => key === findNan);
  const arrayLength = sumCopy.length;

  if (nanIndex !== 0) {
    (firstNum = sumCopy.splice(0, nanIndex).join("")),
      (secondNum = sumCopy.splice(1, arrayLength).join(""));
    if (findNan === "X") {
      totalNum = firstNum * secondNum;
    } else if (findNan === "-") {
      totalNum = firstNum - secondNum;
    } else if (findNan === "+") {
      totalNum = +firstNum + +secondNum;
    } else if (findNan === "/") {
      totalNum = firstNum / secondNum;
    } else if (findNan === "%") {
      totalNum = (firstNum / 100) * secondNum;
    }
  } else {
    onlyNum = sumCopy.splice(1, arrayLength).join("");

    if (findNan === "X") {
      totalNum *= onlyNum;
    } else if (findNan === "-") {
      totalNum -= onlyNum;
    } else if (findNan === "+") {
      totalNum += +onlyNum;
    } else if (findNan === "/") {
      totalNum /= onlyNum;
    } else {
      totalNum = (totalNum / 100) * onlyNum;
    }
  }
  sumArray = [];
  display.innerHTML = totalNum;
};
