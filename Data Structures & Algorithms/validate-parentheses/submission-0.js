class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    reverse(paran) {
        if(paran === '}') return "{"
        if(paran === ']') return "["
        if(paran === ')') return "("
    }
    isValid(s) {

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if(s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);
            else if (stack[stack.length - 1] === this.reverse(s[i])) stack.pop();
            else return false
        }

        return stack.length === 0
    }
}