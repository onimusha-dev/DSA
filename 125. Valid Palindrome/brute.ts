const s = 'A man, a plan, a canal: Panama'
const r = "race a car"

// time complexity: O(n/2 + n) -> 3n/2 -> n
// the for loop will run till end 
// and the while loop will run for the lalf time 
// space will be O(s) in the worst case
function isPalindrome(s: string): boolean {
    let str: string = '';

    for (const char of s) {
        const code = char.charCodeAt(0);
        if ((code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57)    // digit
        ) {
            str += char.toLowerCase()
        }
    }

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

console.log(isPalindrome(s))