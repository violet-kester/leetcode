/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    let row = 0;

    // find row containing target value
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            row = mid;
            break;
        } else if (target < matrix[mid][0]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    // return false if target is out of range
    if (row === 0 && target < matrix[0][0]) return false;
    if (row === matrix.length - 1 && target > matrix[row][matrix[row].length - 1]) {
        return false;
    }

    // find column containing target value
    let left = 0;
    let right = matrix[row].length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
};