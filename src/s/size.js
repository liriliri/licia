/* Get size of object or length of array like object.
 *
 * |Name  |Desc                 |
 * |------|---------------------|
 * |obj   |Collection to inspect|
 * |return|Collection size      |
 */

/* example
 * size({a: 1, b: 2}); // -> 2
 * size([1, 2, 3]); // -> 3
 */

/* module
 * env: all
 */

/* typescript
 * export declare function size(obj: any): number;
 */

_('isArrLike keys');

exports = function(obj) {
    return isArrLike(obj) ? obj.length : keys(obj).length;
};
