/* String hash function using djb2.
 * 
 * |Name  |Type  |Desc          |
 * |------|------|--------------|
 * |str   |string|String to hash|
 * |return|number|Hash result   |
 */

/* example
 * strHash('test'); // -> 2090770981
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function strHash(str: string): number
 */

function exports(str) {
    var hash = 5381;

    var i = str.length;
    while (i) {
        hash = (hash << 5) + hash + str.charCodeAt(--i);
    }

    return hash >>> 0; // Make sure it's always positive.
}
