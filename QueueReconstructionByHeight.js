var reconstructQueue = function(people) {
    let sol = [];
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    for(let i=0; i<people.length; i++) {
        sol.splice(people[i][1], 0, people[i]);
    }
    
    return sol;
};