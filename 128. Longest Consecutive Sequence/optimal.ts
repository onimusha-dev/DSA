const nums = [100, 4, 200, 1, 3, 2]

console.log(nums.length)

/**
 * Time Complexity: O(n)
 *
 * - Creating the Set takes O(n)
 * - The outer loop runs O(n) times
 * - Although there is a nested while loop, it does NOT make the algorithm O(n²)
 *
 * Reason:
 * Each number is visited at most once by the while loop across the entire algorithm.
 * A sequence is only traversed from its starting element
 * (an element where num - 1 does not exist in the set).
 *
 * Therefore:
 *   O(n) + O(n) = O(2n)
 *   => O(n)
 *
 * Space Complexity: O(n)
 *
 * - The Set stores all unique elements from the input.
 */
function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let length = 1;
            let current = num;

            while (set.has(current + 1)) {
                current++
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest;
}

console.log(longestConsecutive(nums))