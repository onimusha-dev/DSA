const s = '({[]}[[[]]]])'

/**
 *  time complexity: 
 *      we are running a for loop for the length of the string 
 *      so O(n)
 *  space complexity: 
 *      the space complexity will be 
 *      O(s)im
 */
function isValid(s: string): boolean {
    const stack: string[] = []
    const record: Record<string, string> = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (const char of s) {
        if (record[char]) {
            const isExists = stack.pop() ?? '#';

            if (isExists !== record[char]) {
                return false;
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0;
}


console.log(isValid(s))