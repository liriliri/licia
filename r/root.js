/* Root object reference, `global` in nodeJs, `window` in browser. */

exports = (typeof window === 'object') ? window : global;