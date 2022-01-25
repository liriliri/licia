/* Create a function that negates the result of the predicate function.
 *
 * |Name     |Desc               |
 * |---------|-------------------|
 * |predicate|Predicate to negate|
 * |return   |New function       |
 */

/* example
 * function even(n) {
 *     return n % 2 === 0;
 * }
 * [1, 2, 3, 4, 5, 6].filter(negate(even)); // -> [1, 3, 5]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function negate<T extends types.AnyFn>(predicate: T): T;
 */

_('types');

exports = function(predicate) {
    return function() {
        return !predicate.apply(this, arguments);
    };
};
