const nums = [2, 7, 11, 15]


function twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1

    const map = new Map<number, number>()

    let i = 0;
    while (i < nums.length) {
        const need = target - nums[i]!

        if (map.has(need)) {
            return [i, map.get(need)!]
        }
        map.set(nums[i]!, i)
        i++
    }
    return []
}

console.log(twoSum(nums, 9))