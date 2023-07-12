/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = (Math.min(height[left], height[right]) * (right - left))
        maxArea = Math.max(area, maxArea);
        height[left] < height[right] ? left++ : right--;
    }

    return maxArea;
};