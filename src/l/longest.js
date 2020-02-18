/* Get the longest item in an array.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |arr   |Array to inspect|
 * |return|Longest item    |
 */

/* example
 * longest(['a', 'abcde', 'abc']); // -> 'abcde'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function longest(arr: string[]): string;
 */

_('size');

exports = function(arr) {
    if (arr.length < 1) return;

    let ret = arr[0],
        retSize = size(arr[0]);

    for (let i = 1, len = arr.length; i < len; i++) {
        const elSize = size(arr[i]);
        if (elSize > retSize) {
            ret = arr[i];
            retSize = elSize;
        }
    }

    return ret;
};
