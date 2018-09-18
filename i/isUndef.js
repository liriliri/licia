/* Check if value is undefined.
 *
 * |Name  |Type   |Desc                      |
 * |------|-------|--------------------------|
 * |val   |*      |Value to check            |
 * |return|boolean|True if value is undefined|
 *
 * ```javascript
 * isUndef(void 0); // -> true
 * isUndef(null); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isUndef(val: any): boolean
 */

function exports(val) {
    return val === void 0;
}
