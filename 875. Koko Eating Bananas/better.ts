const piles = [3, 6, 7, 11]
const h = 8

function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours <= h) {
            // This speed works, try a smaller one.
            right = mid;
        } else {
            // Too slow, need a higher speed.
            left = mid + 1;
        }
    }

    return left;
}

console.log(minEatingSpeed(piles, h))