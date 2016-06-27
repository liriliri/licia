/* Check if value is a finite primitive number.
 *
 * |Name  |Type   |Desc                            |
 * |------|-------|--------------------------------|
 * |val   |*      |Value to check                  |
 * |return|boolean|True if value is a finite number|
 *
 * ```javascript
 * isFinite(3); // -> true
 * isFinite(Infinity); // -> false
 * ```
 */

_('root');

var nativeIsFinite = root.isFinite,
    nativeIsNaN = root.isNaN;

function exports(val)
{
    return nativeIsFinite(val) && !nativeIsNaN(parseFloat(val));
}