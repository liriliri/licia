/* Check if value is an error.
 *
 * |Name  |Desc                     |
 * |------|-------------------------|
 * |val   |Value to check           |
 * |return|True if value is an error|
 */

/* example
 * isErr(new Error()); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isErr(val: any): val is Error;
 */

_('objToStr');

exports = function(val) {
    switch (objToStr(val)) {
        case '[object Error]':
        case '[object DOMException]':
            return true;
        default:
            return val instanceof Error;
    }
};
