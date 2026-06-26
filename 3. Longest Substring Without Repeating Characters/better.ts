const s = 'pwwkew'

// 3
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right]

        while (set.has(char!)) {
            set.delete(s[left]!)
            left++
        }

        set.add(char!)

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );  // +1 as arrays start from 0
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring(s))