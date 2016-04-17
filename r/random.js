/* Produces a random number between min and max(inclusive).
 *
 * |Name  |Type  |Desc                      |
 * |----------------------------------------|
 * |min   |number|The minimum possible value|
 * |max   |number|The maximum possible value|
 * |return|number|The random number         |
 *
 * ```javascript
 * random(1, 5); // -> an integer between 0 and 5
 * random(5); // -> an integer between 0 and 5
 * random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
 * ```
 */

exports = function (min, max, floating)
{
    if (max == null)
    {
        max = min;
        min = 0;
    }

    var ret = Math.random() * (max - min + 1);

    if (!floating) ret = Math.floor(ret);

    return min + ret;
};