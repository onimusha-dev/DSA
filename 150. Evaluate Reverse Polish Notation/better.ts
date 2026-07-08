const tokens = ["2", "1", "+", "3", "*"]
// 9

function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    const set = new Set(['-', '+', '/', '*'])

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]!

        if (set.has(token)) {
            const right = stack.pop()!
            const left = stack.pop()!

            switch (token) {
                case '+':
                    stack.push(left + right)
                    break;
                case '-':
                    stack.push(left - right)
                    break;
                case '*':
                    stack.push(left * right)
                    break;
                case '/':
                    stack.push(Math.trunc(left / right))
                    break;
                default:
                    throw Error(`invalid ${token}!`)
            }
        } else {
            stack.push(Number(token))
        }
    }
    return stack.pop() ?? 0;
};

console.log(evalRPN(tokens))