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
    const seen = new Set();

    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            const value = board[row]![col];

            if (value === '.') continue;

            const rowKey = `${value}-r${row}`;
            const colKey = `${value}-c${col}`;
            const boxKey = `${value}-b${Math.floor(row / 3)}-${Math.floor(col / 3)}`;

            if (seen.has(rowKey) ||
                seen.has(colKey) ||
                seen.has(boxKey)) {
                return false;
            }
            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);
        }
    }
    return true
};
console.log(isValidSudoku(board))
console.log(isValidSudoku(board1))