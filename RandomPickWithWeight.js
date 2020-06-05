var Solution = function(w) {
      this.probabilities = [];
     this.total = 0;
     
     for (let i = 0; i < w.length; i++) {
         this.total += w[i];
         this.probabilities[i] = this.total;
     }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
 const probability = Math.floor(Math.random() * this.total);
     let left = 0;
     let right = this.probabilities.length - 1;
     
     while (left < right) {
         const mid = left + Math.floor((right - left) / 2);
         
         if (this.probabilities[mid] > probability) {
             right = mid;
         } else {
             left = mid + 1;
         }
     }
     return left;
};