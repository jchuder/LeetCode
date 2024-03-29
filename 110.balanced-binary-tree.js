/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // 記錄binarytree是否平衡
    let flag = true;
    const maxDepth = (root) => {
        if (root == null) return 0;
        if (!flag) return;
        let leftMaxDepth = maxDepth(root.left);
        let rightMaxDepth = maxDepth(root.right);
        // 左右最大深度 > 1，就不是
        if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
            flag = false;
        }
        return 1 + Math.max(leftMaxDepth, rightMaxDepth);
    };
    maxDepth(root);
    return flag;
};
// @lc code=end

