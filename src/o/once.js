/* Create a function that invokes once.
 *
 * |Name  |Type    |Desc                   |
 * |------|--------|-----------------------|
 * |fn    |function|Function to restrict   |
 * |return|function|New restricted function|
 */

/* example
 * function init() {};
 * var initOnce = once(init);
 * initOnce();
 * initOnce(); // -> init is invoked once
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function once(fn: Function): Function;
 */

_('partial before');

exports = partial(before, 2);
