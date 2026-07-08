const tokens = ["2", "1", "+", "3", "*"]
// 9

function evalRPN(tokens: string[]): number {
    const stack: number[] = []

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]

        if (!isNaN(Number(token))) {
            stack.push(Number(token!))

        } else {
            switch (token) {
                case '+': {
                    stack.push(stack.pop()! + stack.pop()!)
                    break;
                }
                case '-': {
                    const a = stack.pop()!
                    const b = stack.pop()!
                    stack.push(b - a)
                    break;
                }
                case '*': {
                    stack.push(stack.pop()! * stack.pop()!)
                    break;
                }
                case '/': {
                    const a = stack.pop()!
                    const b = stack.pop()!
                    stack.push(Math.trunc(b / a))
                    break;
                }
                default:
                    throw new Error(`Unknown operator: ${token}`);
            }
        }
    }
    return stack.pop() ?? 0;
};

console.log(evalRPN(tokens))