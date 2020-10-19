/* Create a function that invokes once.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |fn    |Function to restrict   |
 * |return|New restricted function|
 */

/* example
 * function init() {}
 * const initOnce = once(init);
 * initOnce();
 * initOnce(); // -> init is invoked once
 */

/* module
 * env: all
 */

/* typescript
 * export declare function once(fn: types.AnyFn): types.AnyFn;
 */

_('partial before types');

exports = partial(before, 2);
