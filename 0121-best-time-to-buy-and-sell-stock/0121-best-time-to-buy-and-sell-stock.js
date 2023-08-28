/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // left and right pointers iterate over days `i`
    let buyDay = 0; // left pointer
    let sellDay = 1; // right pointer
    let profit = 0;
    let currentMaxProfit = 0;

    while (sellDay < prices.length) {
        profit = prices[sellDay] - prices[buyDay];
        // if profit is negative,
        // update left and right pointers
        if (profit <= 0) {
            // set buy day to sell day - the current minimum value
            buyDay = sellDay;
            // increment sell day
            sellDay++;
        } else {
            // calculate and set current max profit
            currentMaxProfit = profit > currentMaxProfit ? profit : currentMaxProfit;
            // increment sell day
            sellDay++;
        }
    }

    return currentMaxProfit;
};