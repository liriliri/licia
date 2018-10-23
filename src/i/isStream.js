/* Check if value is a Node.js stream.
 *
 * |Name  |Type   |Desc                             |
 * |------|-------|---------------------------------|
 * |val   |*      |Value to check                   |
 * |return|boolean|True if value is a Node.js stream|
 */

/* example
 * var stream = require('stream');
 * 
 * isStream(new stream.Stream()); // -> true
 */

/* module
 * env: node
 * test: node
 */

_('isObj isFn');

exports = function(val) {
    return val !== null && isObj(val) && isFn(val.pipe);
};
