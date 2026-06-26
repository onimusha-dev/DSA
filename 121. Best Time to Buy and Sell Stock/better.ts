const prices = [7, 1, 5, 3, 6, 4]

// 5
function maxProfit(prices: number[]): number {
    let buy = 0;
    let sell = 0;
    let maxProfit = 0;

    while (buy < prices.length) {
        if (prices[sell]! > prices[buy]!) {
            maxProfit = Math.max(
                maxProfit,
                prices[sell]! - prices[buy]!
            );
        } else {
            buy = sell;
        }
        sell++;
    }
    return maxProfit;
}
console.log(maxProfit(prices))