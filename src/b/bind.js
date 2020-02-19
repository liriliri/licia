/* Create a function bound to a given object.
 *
 * |Name   |Desc                    |
 * |-------|------------------------|
 * |fn     |Function to bind        |
 * |ctx    |This binding of given fn|
 * |...rest|Optional arguments      |
 * |return |New bound function      |
 */

/* example
 * const fn = bind(function (msg) {
 *     console.log(this.name + ':' + msg);
 * }, {name: 'eustia'}, 'I am a utility library.');
 * fn(); // -> 'eustia: I am a utility library.'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function bind(fn: Function, ctx: any, ...rest: any[]): Function;
 */

_('restArgs');

exports = restArgs(function(fn, ctx, rest) {
    return restArgs(function(callArgs) {
        return fn.apply(ctx, rest.concat(callArgs));
    });
});
