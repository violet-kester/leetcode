/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let area = calculateArea([left, height[left]], [right, height[right]]);
        maxArea = area > maxArea ? area : maxArea;
        height[left] < height[right] ? left++ : right--;
    }

    return maxArea;
};

var calculateArea = function (line1, line2) {
    let length = Math.abs(line1[0] - line2[0]);
    let width = Math.min(line1[1], line2[1]);

    return length * width;
}