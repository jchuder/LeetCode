/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const numStack = [];
  const operators = {
    "+": (a, b) => {
      console.log("+");
      return a + b;
    },
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };
  for (t of tokens) {
    if (t in operators) {
      const back = numStack.pop();
      const front = numStack.pop();
      numStack.push(operators[t](front, back));
    } else {
      numStack.push(Number(t));
    }
  }
  return numStack.pop();
};

evalRPN(["4", "-2", "/", "2", "-3", "+", "-"]);

function isNumber(string) {
  return isNaN(+string) ? false : true;
}

function calculateAndRoundDown(formula) {
  return parseInt(eval(formula));
}
// @lc code=end
