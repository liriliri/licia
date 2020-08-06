/* Check if character is full width.
 *
 * |Name     |Desc                           |
 * |---------|-------------------------------|
 * |codePoint|Unicode code point             |
 * |return   |True if character is full width|
 */

/* example
 * isFullWidth('a'.codePointAt(0)); // -> false
 * isFullWidth(','.codePointAt(0)); // -> false
 * isFullWidth('我'.codePointAt(0)); // -> true
 * isFullWidth('，'.codePointAt(0)); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isFullWidth(codePoint: number): boolean;
 */

_('isInt');

// https://github.com/sindresorhus/is-fullwidth-code-point
exports = function isFullWidth(c) {
    if (!isInt(c)) {
        return false;
    }

    /* https://unicode.org/Public/UNIDATA/EastAsianWidth.txt
     * Characters with East_Asian_Width property W or F.
     */
    return (
        c >= 0x1100 &&
        (c <= 0x115f ||
            c === 0x2329 ||
            c === 0x232a ||
            (0x2e80 <= c && c <= 0x3247 && c !== 0x303f) ||
            (0x3250 <= c && c <= 0x4dbf) ||
            (0x4e00 <= c && c <= 0xa4c6) ||
            (0xa960 <= c && c <= 0xa97c) ||
            (0xac00 <= c && c <= 0xd7a3) ||
            (0xf900 <= c && c <= 0xfaff) ||
            (0xfe10 <= c && c <= 0xfe19) ||
            (0xfe30 <= c && c <= 0xfe6b) ||
            (0xff01 <= c && c <= 0xff60) ||
            (0xffe0 <= c && c <= 0xffe6) ||
            (0x1b000 <= c && c <= 0x1b001) ||
            (0x1f200 <= c && c <= 0x1f251) ||
            (0x20000 <= c && c <= 0x3fffd))
    );
};
