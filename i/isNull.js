/* Check if value is an Null.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |value |*      |Value to check         |
 * |return|boolean|True if value is an Null|
 *
 * ```javascript
 * isNull(null); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(val)
{
    return val === null;
}
