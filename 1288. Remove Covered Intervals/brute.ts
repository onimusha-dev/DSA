const intervals = [[1, 4], [3, 6], [2, 8]]

function removeCoveredIntervals(intervals: number[][]): number {
    let remaining = intervals.length;

    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i]!;

        for (let j = 0; j < intervals.length; j++) {
            if (i === j) continue;

            const other = intervals[j]!;

            // Is current covered by other?
            if (
                other[0]! <= current[0]! &&
                other[1]! >= current[1]!
            ) {
                remaining--;
                break; // Don't count the same interval twice
            }
        }
    }

    return remaining;
}


console.log(removeCoveredIntervals(intervals))