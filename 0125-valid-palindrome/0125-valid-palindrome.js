/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let chars = s.toLowerCase().split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (chars[left] === chars[right]) {
            console.log(chars[left], chars[right]);
            left++;
            right--;
        } else if (alphanum.indexOf(chars[left]) === -1) {
            left++;
        } else if (alphanum.indexOf(chars[right]) === -1) {
            right--;
        } else {
            return false;
        }
    }
    return true;
};