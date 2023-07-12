/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let freq = {}
    for (let num of nums) {
        if (freq[num] === 1) return true;
        freq[num] = 1;
    }
    return false;
};