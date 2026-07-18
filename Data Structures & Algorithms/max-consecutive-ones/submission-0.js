class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let count = 0;
        let maxCount = 0;
        let lastIndex = nums.length
        for (let i = 0; i < lastIndex; i++) {
            if(nums[i] === 1) {
                count = count + 1
                if (count > maxCount) maxCount = count;
            } else {
                count = 0
            }
        }
        return maxCount;
    }
}