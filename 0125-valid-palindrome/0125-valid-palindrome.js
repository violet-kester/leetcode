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
        while ((left < right) && (alphanum.indexOf(chars[left]) === -1)) {
            left++;
        }
        while ((left < right) && (alphanum.indexOf(chars[right]) === -1)) {
            right--;
        }
        if (chars[left] === chars[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};