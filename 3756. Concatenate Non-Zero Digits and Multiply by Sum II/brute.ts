const s = "10203004", queries = [[0, 7], [1, 3], [4, 6]]

function sumAndMultiply(s: string, queries: number[][]): number[] {
    const results = []

    for (const querie of queries) {
        const stringNum = s.slice(querie[0], querie[1]! + 1)
        console.log(stringNum)
        const result = get(stringNum);

        results.push(result)

    }
    return results;
};

function get(nums: string): number {
    let x = 0;
    let sum = 0;

    for (const num of nums) {
        if (num === '0') continue
        sum += Number(num);
        x = (x * 10) + Number(num)
    }
    console.log(x)
    return x * sum
}

console.log(sumAndMultiply(s, queries))