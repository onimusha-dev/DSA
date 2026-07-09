const numbers = [3]
const target = 3

function twoSum(numbers: number[], target: number): number[] {

    // we know that the numbers are sorted so we just do need to use a two pointer
    let left = 0;
    let right = numbers.length - 1

    while (left < right) {
        const sum = numbers[left]! + numbers[right]!

        if (sum === target) {
            return [left + 1, right + 1]
        }
        sum < target ? left++ : right--
    }
    return []
};

console.log(twoSum(numbers, target))