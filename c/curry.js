/* Function currying.
 *
 * |Name  |Type    |Desc                |
 * |------|--------|--------------------|
 * |fn    |function|Function to curry   |
 * |return|function|New curried function|
 *
 * ```javascript
 * var add = curry(function (a, b) { return a + b });
 * var add1 = add(1);
 * add1(2); // -> 3
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('toArr');

function exports(fn)
{
    var len = fn.length;

    return function curriedFn()
    {
        var args = toArr(arguments);

        if (args.length < len)
        {
            return function ()
            {
                return curriedFn.apply(null, args.concat(toArr(arguments)));
            };
        }

        return fn.apply(null, args);
    };
}