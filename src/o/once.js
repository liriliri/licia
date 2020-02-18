/* Create a function that invokes once.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |fn    |Function to restrict   |
 * |return|New restricted function|
 */

/* example
 * function init() {};
 * const initOnce = once(init);
 * initOnce();
 * initOnce(); // -> init is invoked once
 */

/* module
 * env: all
 */

/* typescript
 * export declare function once(fn: Function): Function;
 */

_('partial before');

exports = partial(before, 2);
