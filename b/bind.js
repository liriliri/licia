/* function
 * bind: Create a function bound to a given object.
 * function(function): The function to bind.
 * context(*): This binding of given function.
 * [rest](...*): Optional arguments.
 * return(function): Returns the new bound function.
 *
 * ```javascript
 * var fn = _.bind(function (msg)
 * {
 *     console.log(this.name + ':' + msg);
 * }, {name: 'eustia'}, 'I am a utility library.');
 * fn(); // -> 'eustia: I am a utility library.'
 * ```
 */

_('restArgs');

bind = restArgs(function (fn, ctx, rest)
{
    return restArgs(function (callArgs)
    {
        return fn.apply(ctx, rest.concat(callArgs));
    });
});