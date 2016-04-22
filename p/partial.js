/* Partially apply a function by filling in given arguments.
 *
 * |Name    |Type    |Desc                                    |
 * |----------------------------------------------------------|
 * |fn      |function|Function to partially apply arguments to|
 * |partials|...*    |Arguments to be partially applied       |
 * |return  |function|New partially applied function          |
 *
 * ```javascript
 * var sub5 = partial(function (a, b) { return b - a}, 5);
 * sub(20); // -> 15
 * ```
 */

_('bind');

exports = function (fn)
{
    return function ()
    {

    };
};