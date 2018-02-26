// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    let obj = {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    // Return an object containing the minimum number of coins needed to make change
    let h = Math.trunc(currency / 50);
    let q = Math.trunc((currency - (50 * h)) / 25);
    let d = Math.trunc((currency - (50 * h + 25 * q)) / 10);
    let n = Math.trunc((currency - (50 * h + 25 * q + 10 * d)) / 5);
    let p = currency - (50 * h + 25 * q + 10 * d + n * 5);
    if (h > 0) obj["H"] = h;
    if (q > 0) obj["Q"] = q;
    if (d > 0) obj["D"] = d;
    if (n > 0) obj["N"] = n;
    if (p > 0) obj["P"] = p;
    return obj;
}
