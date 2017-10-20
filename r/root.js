/* Root object reference, `global` in nodeJs, `window` in browser. */

/* module
 * env: all
 * test: all
 */

_('isBrowser');

exports = isBrowser ? window : global;