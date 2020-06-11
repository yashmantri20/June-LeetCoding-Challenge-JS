class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        from collections import Counter
        d = Counter(nums)
        i,c=0,0
        for i in range(0,3): 
            if i in d:
                for j in range(d[i]):
                    nums[j+c] = i
                c+=d[i] 
