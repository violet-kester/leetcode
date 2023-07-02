/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProducts = [];
    let rightProducts = [];

    leftProducts[0] = 1;
    for (let l = 1; l < nums.length; l++) {
        leftProducts[l] = leftProducts[l - 1] * nums[l - 1];
    }

    rightProducts[nums.length - 1] = 1;
    for (let r = nums.length - 2; r >= 0; r--) {
        rightProducts[r] = rightProducts[r + 1] * nums[r + 1];
    }
    
    const answer = nums.map((num, i) => {
        return leftProducts[i] * rightProducts[i];
    })
    return answer;
};