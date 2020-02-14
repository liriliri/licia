/* Check if value is a Node.js stream.
 *
 * |Name  |Desc                             |
 * |------|---------------------------------|
 * |val   |Value to check                   |
 * |return|True if value is a Node.js stream|
 */

/* example
 * const stream = require('stream');
 *
 * isStream(new stream.Stream()); // -> true
 */

/* module
 * env: node
 */

/* typescript
 * export declare function isStream(val: any): boolean;
 */

_('isObj isFn');

exports = function(val) {
    return val !== null && isObj(val) && isFn(val.pipe);
};
