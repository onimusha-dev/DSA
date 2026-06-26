const s = 'AABABBA'
const k = 1

// 4
function characterReplacement(s: string, k: number): number {
    const freq = new Map<string, number>();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right]!;
        maxFreq = Math.max(maxFreq, freq.get(char)!);
        
        freq.set(char, (freq.get(char) ?? 0) + 1);

        while ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left]!;
            freq.set(leftChar, freq.get(leftChar)! - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

console.log(characterReplacement(s, k))