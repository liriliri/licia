/* Check if running in node.
 *
 * ```javascript
 * console.log(isNode); // -> true if running in node
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

exports = typeof process !== 'undefined' && objToStr(process) === '[object process]';