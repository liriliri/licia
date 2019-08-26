/* Repeat string n-times.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to repeat|
 * |n     |number|Repeat times    |
 * |return|string|Repeated string |
 */

/* example
 * repeat('a', 3); // -> 'aaa'
 * repeat('ab', 2); // -> 'abab'
 * repeat('*', 0); // -> ''
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function repeat(str: string, n: number): string;
 */

exports = function(str, n) {
    let ret = '';

    if (n < 1) return '';

    while (n > 0) {
        if (n & 1) ret += str;
        n >>= 1;
        str += str;
    }

    return ret;
};
