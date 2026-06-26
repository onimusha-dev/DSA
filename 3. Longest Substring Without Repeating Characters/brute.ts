const s = 'abcabcbb'

/**
 * Time Complexity: O(n²)
 * - The outer loop iterates through every starting index.
 * - The inner loop expands the substring until a duplicate is found.
 * - In the worst case (all unique characters), the inner loop runs O(n) times for each outer loop iteration.
 *
 * Space Complexity: O(n)
 * - A Map is used to store characters in the current substring.
 * - In the worst case, all characters are unique and the Map grows to size O(n).
 */
function lengthOfLongestSubstring(s: string): number {
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        const map = new Map<string, boolean>();
        let sub = '';

        for (let j = i; j < s.length; j++) {
            const char = s[j];
            if (map.has(char!)) {
                break
            } else {
                sub = sub + char;
                map.set(char!, true)
            }
            length = Math.max(sub.length, length);
        }
    }
    return length;
};

console.log(lengthOfLongestSubstring(s))