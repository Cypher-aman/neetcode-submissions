class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

     isNumeric(str) {
        return typeof str === 'string' && str.trim() !== '' && !isNaN(Number(str));
    }


    calPoints(operations) {

        const arr = [];
        let j = 0;
        let total = 0;
        for (let i = 0; i < operations.length; i++) {
            if(!isNaN(operations[i])) {
                arr[j] = Number(operations[i]);
                j++
            } else if (operations[i] === '+'){
                const sum = arr[j-1] + arr[j-2]
                arr[j] = sum
                j++;
            } else if (operations[i] === 'C') {
                j--
                arr.pop();
            } else if (operations[i] === 'D') {
                const double = 2 * arr[j-1];
                arr[j] = double
                j++
            }
        }

        for (let i = 0; i < j; i++) {
            total += arr[i]
        }

        return total
    }
}