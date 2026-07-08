const nums = [3, 5, 65, 76, 34, 6, 5, 3, 545, 2, 3, 5, 657, 87, 99]
const target = 438;

function findb(nums: number[], target: number): number[] {
    // to generate all the sub arrays
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let sum = 0;
            const x = []

            // make the sum 
            for (let a = i; a < j; a++) {
                x.push(nums[a]!)
                sum += nums[a]!;
            }
            if (sum === target) {
                return x
            }
        }
    }

    return []
}

function find(nums: number[], target: number): number[] {

    let left = 0;
    let right = nums.length - 1;
    // to generate all the sub arrays
    

    
    return []
}

console.log(find(nums, target))