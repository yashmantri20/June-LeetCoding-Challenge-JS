var twoCitySchedCost = function(costs) {
 return costs
        .sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
        .map((cost, index) => 
            index < costs.length / 2 
            ? cost[0] :cost[1])
        .reduce((total, val) => total += val, 0)
};