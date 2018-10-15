/* Opposite of filter.
 *
 * |Name     |Type    |Desc                                   |
 * |---------|--------|---------------------------------------|
 * |obj      |array   |Collection to iterate over             |
 * |predicate|function|Function invoked per iteration         |
 * |[ctx]    |*       |Predicate context                      |
 * |return   |array   |Array of all values that pass predicate|
 *
 * ```javascript
 * reject([1, 2, 3, 4, 5], function (val) {
 *     return val % 2 === 0;
 * }); // -> [1, 3, 5]
 * ```
 */

_('safeCb negate filter');

function exports(obj, predicate, ctx) {
    predicate = safeCb(negate(predicate), ctx);

    return filter(obj, predicate);
}
