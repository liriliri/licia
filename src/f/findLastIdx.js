/* Return the last index where the predicate truth test passes.
 *
 * |Name     |Type    |Desc                          |
 * |---------|--------|------------------------------|
 * |arr      |array   |Array to search               |
 * |predicate|function|Function invoked per iteration|
 * |return   |number  |Last index of matched element |
 */

/* example
 * findLastIdx([{
 *     name: 'john',
 *     age: 24
 * }, {
 *     name: 'jane',
 *     age: 23
 * }, {
 *     name: 'kitty',
 *     age: 24
 * }], function (val) {
 *     return val.age === 24;
 * }); // -> 2
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function findLastIdx(arr: any[], predicate: Function): number;
 */

_('findIdx');

exports = function(arr, predicate, ctx) {
    return findIdx(arr, predicate, ctx, -1);
};
