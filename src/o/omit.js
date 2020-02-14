/* Opposite of pick.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |obj   |Source object  |
 * |filter|Object filter  |
 * |return|Filtered object|
 */

/* example
 * omit({a: 1, b: 2}, 'a'); // -> {b: 2}
 * omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
 * omit({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
 *     return val % 2;
 * }); // -> {b: 2, d: 4}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function omit(obj: any, filter: string | string[] | Function): any;
 */

_('pick');

exports = function(obj, filter) {
    return pick(obj, filter, true);
};
