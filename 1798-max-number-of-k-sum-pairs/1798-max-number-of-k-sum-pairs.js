/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    let sortedNums = nums.sort((a, b) => a - b);

    while (left < right) {
        if (sortedNums[left] + sortedNums[right] === k) {
            count++;
            left++;
            right--;
        } else if (sortedNums[left] + sortedNums[right] < k) {
            left++;
        } else {
            right--;
        }
    }

    return count;
};