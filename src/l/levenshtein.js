/* Levenshtein distance implementation.
 *
 * |Name  |Desc                                |
 * |------|------------------------------------|
 * |a     |First string                        |
 * |b     |Second string                       |
 * |return|Levenshtein distance between a and b|
 */

/* example
 * levenshtein('cat', 'cake'); // -> 2
 */

/* module
 * env: all
 * since: 1.4.8
 */

/* typescript
 * export declare function levenshtein(a: string, b: string): number;
 */

const vector = [];
const bChars = [];

// https://github.com/Yomguithereal/talisman/
exports = function(a, b) {
    if (a === b) return 0;

    // Make a is the shorter one
    if (a.length > b.length) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    let aLen = a.length;
    let bLen = b.length;

    if (!aLen) return bLen;
    if (!bLen) return aLen;

    // Ignore common suffix
    while (aLen > 0 && a.charCodeAt(aLen - 1) === b.charCodeAt(bLen - 1)) {
        aLen--;
        bLen--;
    }
    if (!aLen) return bLen;

    // Ignore common prefix
    let start = 0;
    while (start < aLen && a.charCodeAt(start) === b.charCodeAt(start)) {
        start++;
    }
    aLen -= start;
    bLen -= start;
    if (!aLen) return bLen;

    let current = 0;
    let left;
    let above;
    let charA;

    let i = 0;
    while (i < bLen) {
        bChars[i] = b.charCodeAt(start + i);
        vector[i] = ++i;
    }

    /* | | |o|a|
     * | |0|1|2|
     * |r|1|1|2|←
     * |o|2|1|2|
     * |a|3|2|1|
     *      ↑
     * a: oa
     * b: roa
     * row: [1, 2, 3]
     */
    for (let i = 0; i < aLen; i++) {
        left = i;
        current = i + 1;
        charA = a.charCodeAt(start + i);
        for (let j = 0; j < bLen; j++) {
            above = current;
            current = left;
            left = vector[j];
            if (charA !== bChars[j]) {
                if (left < current) current = left;
                if (above < current) current = above;
                current++;
            }
            vector[j] = current;
        }
    }

    return current;
};
