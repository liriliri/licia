/* Create a function that negates the result of the predicate function.
 *
 * |Name     |Type    |Desc               |
 * |--------------------------------------|
 * |predicate|function|Predicate to negate|
 * |return   |function|New function       |
 *
 * ```javascript
 * function even(n) { return n % 2 === 0 }
 * filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
 * ```
 */

function exports(predicate)
{
    return function ()
    {
        return !predicate.apply(this, arguments);
    };
}