/* Create a function bound to a given object.
 *
 * |Name   |Desc                    |
 * |-------|------------------------|
 * |fn     |Function to bind        |
 * |ctx    |This binding of given fn|
 * |...args|Optional arguments      |
 * |return |New bound function      |
 */

/* example
 * const fn = bind(
 *     function(msg) {
 *         console.log(this.name + ':' + msg);
 *     },
 *     { name: 'eustia' },
 *     'I am a utility library.'
 * );
 * fn(); // -> 'eustia: I am a utility library.'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function bind(
 *     fn: types.AnyFn,
 *     ctx: any,
 *     ...args: any[]
 * ): types.AnyFn;
 */

_('restArgs types');

exports = restArgs(function(fn, ctx, args) {
    return restArgs(function(callArgs) {
        return fn.apply(ctx, args.concat(callArgs));
    });
});
