/* Check if running in wechat mini program.
 *
 * ```javascript
 * console.log(isMiniProgram); // -> true if running in mini program.
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('isFn'); 

/* eslint-disable no-undef */
exports = typeof wx !== 'undefined' && isFn(wx.openLocation);