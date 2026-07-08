const n = 10203004

function sumAndMultiply(n: number): number {
    let num = 0;
    let sum = 0

    for (const x of String(n)) {
        if (x === '0') continue;
        sum += Number(x)
        num = (num * 10) + Number(x)
    }
    return num * sum
};

console.log(sumAndMultiply(n))