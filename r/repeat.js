/* Repeat string n-times.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to repeat|
 * |n     |number|Repeat times    |
 * |return|string|Repeated string |
 *
 * ```javascript
 * repeat('a', 3); // -> 'aaa'
 * repeat('ab', 2); // -> 'abab'
 * repeat('*', 0); // -> ''
 * ```
 */

/* module
 * env: all
 * test: all
 */

exports = function(str, n) {
    var ret = '';

    if (n < 1) return '';

    while (n > 0) {
        if (n & 1) ret += str;
        n >>= 1;
        str += str;
    }

    return ret;
};
