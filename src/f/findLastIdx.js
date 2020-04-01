/* Return the last index where the predicate truth test passes.
 *
 * |Name     |Desc                          |
 * |---------|------------------------------|
 * |arr      |Array to search               |
 * |predicate|Function invoked per iteration|
 * |return   |Last index of matched element |
 */

/* example
 * findLastIdx(
 *     [
 *         {
 *             name: 'john',
 *             age: 24
 *         },
 *         {
 *             name: 'jane',
 *             age: 23
 *         },
 *         {
 *             name: 'kitty',
 *             age: 24
 *         }
 *     ],
 *     function(val) {
 *         return val.age === 24;
 *     }
 * ); // -> 2
 */

/* module
 * env: all
 */

/* typescript
 * export declare function findLastIdx(arr: any[], predicate: types.AnyFn): number;
 */

_('findIdx types');

exports = function(arr, predicate, ctx) {
    return findIdx(arr, predicate, ctx, -1);
};
