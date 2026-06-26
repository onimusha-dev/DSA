const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

/**
 * Time Complexity: O(n)
 * - Four linear passes over the input array.
 * - O(4n) simplifies to O(n).
 *
 * Space Complexity: O(n)
 * - Uses three auxiliary arrays:
 *   leftMax, rightMax, and minLeftOrRight.
 * - O(3n) simplifies to O(n).
 * 
 * ============== If you remove minLeftOrRight and compute the minimum on the fly ========
 * Time Complexity: O(n)
 *
 * Space Complexity: O(n)
 * - Uses two auxiliary arrays:
 *   leftMax and rightMax.
 */
function trap(height: number[]): number {
    const leftMax: number[] = Array(height.length).fill(0)
    const rightMax: number[] = Array(height.length).fill(0);
    // const minLeftOrRight: number[] = Array(height.length).fill(0);
    let maxHeight = 0;

    for (let i = 1; i < height.length; i++) {
        const left = Math.max(leftMax[i - 1]!, height[i - 1]!)
        leftMax[i] = left;
    }

    for (let i = height.length - 2; i >= 0; i--) {
        const right = Math.max(rightMax[i + 1]!, height[i + 1]!)
        rightMax[i] = right;
    }

    // for (let i = 1; i < height.length; i++) {
    //     minLeftOrRight[i] = Math.min(rightMax[i]!, leftMax[i]!);
    // }

    for (let i = 1; i < height.length; i++) {
        const waterLevel = Math.min(rightMax[i]!, leftMax[i]!);
        maxHeight += Math.max(0, waterLevel - height[i]!)
    }

    return maxHeight;
};

console.log(trap(height))