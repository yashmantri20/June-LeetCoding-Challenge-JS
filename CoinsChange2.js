var change = function(amount, coins) {
    var dp = [];
    dp[0] = 1;
    
    for (var i = 0; i < coins.length; ++ i) {
        for (var j = coins[i]; j <= amount; ++ j) {
            dp[j] = (dp[j] || 0) + (dp[j - coins[i]] || 0);
        }
    }
    
    return isNaN(dp[amount]) ? 0 : dp[amount];
};