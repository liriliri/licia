/* Check if value is a finite primitive number.
 *
 * |Name  |Type   |Desc                            |
 * |------|-------|--------------------------------|
 * |val   |*      |Value to check                  |
 * |return|boolean|True if value is a finite number|
 */

/* example
 * isFinite(3); // -> true
 * isFinite(Infinity); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isFinite(val: any): boolean;
 */

_('root');

const nativeIsFinite = root.isFinite;
const nativeIsNaN = root.isNaN;

exports = function(val) {
    return nativeIsFinite(val) && !nativeIsNaN(parseFloat(val));
};
