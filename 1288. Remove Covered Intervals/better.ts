const intervals = [[1, 4], [3, 6], [2, 8]]

function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1]! - a[1]!;
        }
        return a[0]! - b[0]!;
    });

    let remaining = 1;
    let maxEnd = intervals[0]![1]!;

    for (let i = 1; i < intervals.length; i++) {
        const end = intervals[i]![1]!;

        if (end > maxEnd) {
            remaining++;
            maxEnd = end;
        }
    }

    return remaining;
}

console.log(removeCoveredIntervals(intervals))