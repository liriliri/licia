/* Simple FNV-1a implementation.
 *
 * |Name  |Type  |Desc          |
 * |------|------|--------------|
 * |str   |string|String to hash|
 * |return|number|Hast result   |
 */

/* example
 * fnv1a('test'); // -> 2949673445
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function fnv1a(str: string): number;
 */

// https://github.com/schwarzkopfb/fnv1a
// http://isthe.com/chongo/tech/comp/fnv

const BASE = 0x811c9dc5;

exports = function(str) {
    let ret = BASE;

    for (let i = 0, len = str.length; i < len; i++) {
        ret ^= str.charCodeAt(i);
        ret += (ret << 1) + (ret << 4) + (ret << 7) + (ret << 8) + (ret << 24);
    }

    return ret >>> 0;
};
