const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
// true
const board1 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// false

// 
function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < 9; i++) {
        const cols = new Map<string, boolean>();
        const rows = new Map<string, boolean>();

        for (let j = 0; j < 9; j++) {
            const rowVal = board[i]![j]
            const colVal = board[j]![i]

            if (rowVal !== '.') {
                if (rows.has(rowVal!)) return false
                rows.set(rowVal!, true)
            }
            if (colVal !== '.') {
                if (cols.has(colVal!)) return false
                cols.set(colVal!, true)
            }
        }
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                const boxs = new Set();
                for (let k = i; k < i + 3; k++) {
                    for (let l = j; l < j + 3; l++) {
                        const boxVal = board[k]![l];
                        if (boxVal === '.') continue;
                        if (boxs.has(boxVal!)) return false;
                        boxs.add(boxVal!)
                    }
                }
            }
        }
    }

    return true
};

console.log(isValidSudoku(board))
console.log(isValidSudoku(board1))