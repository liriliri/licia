/* Check if running in node.
 *
 * ```javascript
 * console.log(isNode); // -> true if running in node
 * ```
 */

_('objToStr');

exports = typeof process !== 'undefined' && objToStr(process) === '[object process]';