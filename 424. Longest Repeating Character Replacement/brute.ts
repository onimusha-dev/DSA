const s = 'ABAB'
const k = 2

// 4
function characterReplacement(s: string, k: number): number {
    let maxLength = 0;

    // 1. generate all the sub strings
    // 2. replace the miss matched characters so it full fills our constrains
    // 3. if there is any extra character left after replacing move to next 
    for (let i = 0; i < s.length; i++) {
        const map = new Map();

        for (let j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                map.set(s[j], map.get(s[j]! + 1))
            }


        }
    }
    return maxLength;
};

console.log(characterReplacement(s, k))