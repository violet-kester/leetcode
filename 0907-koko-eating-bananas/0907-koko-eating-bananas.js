/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        let k = Math.floor((left + right) / 2);
        let totalTime = 0;

        for (let numBananas of piles) {
            totalTime += Math.ceil(numBananas / k);
        }
        if (totalTime <= h) {
            result = Math.min(result, k);
            right = k - 1;
        } else {
            left = k + 1;
        }
    }

    return result;
};