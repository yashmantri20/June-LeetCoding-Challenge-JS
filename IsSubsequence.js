var isSubsequence = function(s, t) {
    let i = 0
    if(s.lenght === 0 && t.lenght === 0) return true 
    if(s.length === 0) return true
    
    for(var j = 0; j<t.length; j+=1){
        if(s[i] === t[j]) i+=1
        
        if(i === s.length) return true
    }
    
    return false
    
};

