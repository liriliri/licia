/* Root object reference, `global` in nodeJs, `window` in browser. */

/* module
 * env: all
 */

/* typescript
 * export declare const root: any;
 */

_('isBrowser');

exports = isBrowser ? window : global;
