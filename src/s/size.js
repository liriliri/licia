/* Get size of object or length of array like object.
 *
 * |Name  |Type        |Desc                 |
 * |------|------------|---------------------|
 * |obj   |array object|Collection to inspect|
 * |return|number      |Collection size      |
 */

/* example
 * size({a: 1, b: 2}); // -> 2
 * size([1, 2, 3]); // -> 3
 */

/* module
 * env: all
 * test: all
 */

_('isArrLike keys');

function exports(obj) {
    return isArrLike(obj) ? obj.length : keys(obj).length;
}
