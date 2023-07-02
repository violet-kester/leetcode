/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let swapIdx = 0;
    let current = 0;

    while (current < nums.length) {
        if (nums[current] === 0) {
            current++;
        } else {
            [nums[swapIdx], nums[current]] = [nums[current], nums[swapIdx]];
            current++;
            swapIdx++;
        }
    }
};