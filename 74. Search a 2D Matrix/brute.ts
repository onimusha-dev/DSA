const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 13;

/**
 *  time complexity:
 *      log(m * log n)
 *  space complexity: O(1)
 */
function searchMatrix(matrix: number[][], target: number): boolean {

    for (let i = 0; i < matrix.length; i++) {
        if (binSearch(matrix[i]!, target)) {
            return true;
        }
    }
    return false
};

// log(n)
function binSearch(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const med = Math.floor((left + right) / 2);

        if (nums[med] === target) {
            return true;
        } else if (nums[med]! < target) {
            left = med + 1;
        } else {
            right = med - 1;
        }
    }

    return false;
}

console.log(searchMatrix(matrix, target))