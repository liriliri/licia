/* Check if value is string, number, boolean or null.
 *
 * |Name  |Type   |Desc                        |
 * |------|-------|----------------------------|
 * |val   |*      |Value to check              |
 * |return|boolean|True if value is a primitive|
 *
 * ```javascript
 * isPrimitive(5); // -> true
 * isPrimitive('abc'); // -> true
 * isPrimitive(false); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(val) {
    var type = typeof val;

    return val == null || (type !== 'function' && type !== 'object');
}
