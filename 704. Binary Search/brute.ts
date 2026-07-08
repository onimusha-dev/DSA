const nums = [-1, 0, 3, 5, 9, 12]
const target = 9

// 4
function search(nums: number[], target: number): number {
    let result;
    let left = 0;
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            result = mid
            break
        }
        if (nums[mid]! < target) {
            left = mid + 1
            continue
        }
        else {
            right = mid - 1
        }
    }
    return result ?? -1
};

console.log(search(nums, target))