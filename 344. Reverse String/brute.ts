/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const x = new Array(s.length).fill('')
    let left = 0
    let right = s.length - 1

    while (left <= right) {
        const temp = s[left];
        s[left] = s[right]!
        s[right] = s[left]
    }
};