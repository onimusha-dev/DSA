class MinStack {
    private stack: number[];
    private map = new Map<number, number>();

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        this.stack.push(value);

        if (this.stack.length === 1) {
            this.map.set(0, value);
        } else {
            const prevMin = this.map.get(this.stack.length - 2)!;
            this.map.set(this.stack.length - 1, Math.min(prevMin, value));
        }
    }

    pop(): void {
        if (this.stack.length === 0) return;

        this.map.delete(this.stack.length - 1);
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]!;
    }

    getMin(): number {
        return this.map.get(this.stack.length - 1)!;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */