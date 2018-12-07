/* Get a random item from an array.
 *
 * |Name  |Type |Desc                |
 * |------|-----|--------------------|
 * |arr   |array|Array to get        |
 * |return|*    |Randomly picked item|
 */

/* example
 * randomItem([1, 2, 3]); // -> 2
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function randomItem(arr: any[]): any;
 */

_('random');

exports = function(arr) {
    return arr[random(0, arr.length - 1)];
};
