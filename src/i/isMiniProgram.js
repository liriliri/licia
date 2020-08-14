/* Check if running in wechat mini program.
 */

/* example
 * console.log(isMiniProgram); // -> true if running in mini program.
 */

/* module
 * env: all
 */

/* typescript
 * export declare const isMiniProgram: boolean;
 */

_('isFn');

/* eslint-disable no-undef */
exports = typeof wx !== 'undefined' && isFn(wx.openLocation);
