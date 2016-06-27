/* Create a function that invokes once.
 *
 * |Name  |Type    |Desc                   |
 * |------|--------|-----------------------|
 * |fn    |function|Function to restrict   |
 * |return|function|New restricted function|
 *
 * ```javascript
 * function init() {};
 * var initOnce = once(init);
 * initOnce();
 * initOnce(); // -> init is invoked once
 * ```
 */

_('partial before');

exports = partial(before, 2);