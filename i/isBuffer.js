/* Check if value is a buffer.
 *
 * |Name  |Type   |Desc                     |
 * |------|-------|-------------------------|
 * |val   |*      |The value to check       |
 * |return|boolean|True if value is a buffer|
 *
 * ```javascript
 * isBuffer(new Buffer(4)); // -> true
 * ```
 */

_('isFn');

function exports(val)
{
    if (val == null) return false;
    if (val._isBuffer) return true;

    return val.constructor && isFn(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}