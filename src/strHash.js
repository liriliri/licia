/* String hash function using djb2.
 *
 * |Name  |Desc          |
 * |------|--------------|
 * |str   |String to hash|
 * |return|Hash result   |
 */

/* example
 * strHash('test'); // -> 2090770981
 */

/* module
 * env: all
 */

/* typescript
 * export declare function strHash(str: string): number;
 */

exports = function(str) {
    let hash = 5381;

    let i = str.length;
    while (i) {
        hash = (hash << 5) + hash + str.charCodeAt(--i);
    }

    return hash >>> 0; // Make sure it's always positive.
};
