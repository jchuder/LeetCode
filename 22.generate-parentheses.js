/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let leftLen = (rightLen = n);
  let result = [];

  while (leftLen !== 0) {
    let temp = "";
    let current = "(".repeat(leftLen) + ")".repeat(rightLen);
    leftLen -= 1;

    if (leftLen === 0) {
      result.push(current.repeat(n));
      continue;
    }

    rightLen = leftLen;

    console.log(leftLen, rightLen, current);
    result.push(current);
  }

  return result;
};
// @lc code=end

/**
 * Ans
 * 1: ["()"]
 * 2: ["(())", "()()"]
 * 3: ["((()))","(()())","(())()","()(())","()()()"]
 *
 */

// console.log(1, generateParenthesis(1), "\n");
// console.log(2, generateParenthesis(2), "\n");
console.log(3, generateParenthesis(3), "\n");
