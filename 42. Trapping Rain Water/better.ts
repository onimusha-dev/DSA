const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

// 6
/**
 * Time Complexity: O(n)
 * - Each pointer (left and right) moves at most n times.
 *
 * Space Complexity: O(1)
 * - Only a few variables are used regardless of input size.
 */
function trap(height: number[]): number {
    if (height.length === 0) return 0;

    let res = 0;
    let left = 0, right = height.length - 1;

    let maxLeft = height[left]!;
    let maxRight = height[right]!;

    while (left < right) {
        if (maxLeft < maxRight) {
            left++
            maxLeft = Math.max(maxLeft, height[left]!)
            res += maxLeft - height[left]!
        } else {
            right--
            maxRight = Math.max(maxRight, height[right]!)
            res += maxRight - height[right]!
        }
    }
    return res;
};

console.log(trap(height))