class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -Infinity

        for(let i = 0; i < arr.length; i++) {
            if(i === arr.length - 1) {
                arr[i] = -1;
                break;
            }

            for (let j = i+1; j < arr.length; j++) {
                if(arr[j] > max) max = arr[j]
            }

            arr[i] = max;
            max = -Infinity
        }

        return arr;
    }
}