/* Root object reference, `global` in nodeJs, `window` in browser. */

_('isBrowser');

exports = isBrowser ? window : global;