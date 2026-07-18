class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

        let duplicate = [];
        let k = 0;
        let storeIndex = 0
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                nums[storeIndex] = nums[i]
                storeIndex++
                k++
            }
        }
        
        return k
    }
}