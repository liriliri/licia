/* Check if value is an error.
 *
 * |Name  |Type   |Desc                     |
 * |------|-------|-------------------------|
 * |val   |*      |Value to check           |
 * |return|boolean|True if value is an error|
 */

/* example
 * isErr(new Error()); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isErr(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object Error]';
};
