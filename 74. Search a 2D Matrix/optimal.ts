const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
const target = 13;

/**
 *  time complexity:
 *      first loop -> log(log n)
 *      second loop -> log(log m)
 *      -> O(log(n * m))
 *
 *  space complexity: O(1)
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    const rows = matrix.length;
    const cols = matrix[0]!.length;

    // Binary search on rows
    let top = 0;
    let bottom = rows - 1;

    while (top <= bottom) {
        const row = Math.floor((top + bottom) / 2);

        if (target > matrix[row]![cols - 1]!) {
            top = row + 1;
        } else if (target < matrix[row]![0]!) {
            bottom = row - 1;
        } else {
            // Target must be in this row
            let left = 0;
            let right = cols - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (matrix[row]![mid]! === target) {
                    return true;
                } else if (matrix[row]![mid]! < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            return false;
        }
    }

    return false;
}

console.log(searchMatrix(matrix, target))