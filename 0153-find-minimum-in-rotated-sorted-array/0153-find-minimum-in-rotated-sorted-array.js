/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = nums[0];

    while (left < right) {
        let mid = Math.floor((left + right) / 2);;
        min = Math.min(min, nums[mid]);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid - 1;
        } 
    }

    return Math.min(min, nums[left]);
};