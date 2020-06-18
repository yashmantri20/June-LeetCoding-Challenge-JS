var hIndex = function(citations) {
        
    let start = 0, end = citations.length-1;
    
    while (start <= end) {
        
        let mid = Math.floor((start+end)/2);
        
        if (citations.length - mid - 1 < citations[mid]) {
            
            end = mid - 1;
        } else {
            
            start = mid + 1;
        }
    }
    
    return citations.length - start;
};