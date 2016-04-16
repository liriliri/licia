/* Create a function bound to a given object.
 *
 * |Name  |Type    |Desc                          |
 * |----------------------------------------------|
 * |fn    |function|The function to bind          |
 * |ctx   |*       |This binding of given function|
 * |[rest]|...*    |Optional arguments            |
 * |return|function|The new bound function        |
 *
 * ```javascript
 * var fn = bind(function (msg)
 * {
 *     console.log(this.name + ':' + msg);
 * }, {name: 'eustia'}, 'I am a utility library.');
 * fn(); // -> 'eustia: I am a utility library.'
 * ```
 */

_('restArgs');

exports = restArgs(function (fn, ctx, rest)
{
    return restArgs(function (callArgs)
    {
        return fn.apply(ctx, rest.concat(callArgs));
    });
});