/* Check if value is a buffer.
 *
 * |Name  |Type   |Desc                     |
 * |------|-------|-------------------------|
 * |val   |*      |The value to check       |
 * |return|boolean|True if value is a buffer|
 */

/* example
 * isBuffer(new Buffer(4)); // -> true
 */

/* module
 * env: all 
 * test: node
 */

/* typescript
 * export declare function isBuffer(val: any): boolean;
 */

_('isFn');

exports = function(val) {
    if (val == null) return false;
    if (val._isBuffer) return true;

    return (
        val.constructor &&
        isFn(val.constructor.isBuffer) &&
        val.constructor.isBuffer(val)
    );
};
