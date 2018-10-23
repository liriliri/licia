/* Create a function bound to a given object.
 *
 * |Name     |Type    |Desc                    |
 * |---------|--------|------------------------|
 * |fn       |function|Function to bind        |
 * |ctx      |*       |This binding of given fn|
 * |[...rest]|*       |Optional arguments      |
 * |return   |function|New bound function      |
 */

/* example
 * var fn = bind(function (msg) {
 *     console.log(this.name + ':' + msg);
 * }, {name: 'eustia'}, 'I am a utility library.');
 * fn(); // -> 'eustia: I am a utility library.'
 */

/* module
 * env: all
 * test: all
 */

_('restArgs');

exports = restArgs(function(fn, ctx, rest) {
    return restArgs(function(callArgs) {
        return fn.apply(ctx, rest.concat(callArgs));
    });
});
