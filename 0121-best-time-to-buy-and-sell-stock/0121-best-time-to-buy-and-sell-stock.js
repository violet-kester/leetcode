/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = 0;
    let sell = 1;

    for (let i = 0; i < prices.length; i++) {
        if (prices[buy] > prices[sell]) {
            buy = sell;
            sell = buy + 1;
        } else {
            profit = prices[sell] - prices[buy];
            maxProfit = profit > maxProfit ? profit : maxProfit;
            sell++;
        }
    }   
    return maxProfit;
};