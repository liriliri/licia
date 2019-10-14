/* Check if value is a file.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |val   |*      |Value to check         |
 * |return|boolean|True if value is a file|
 */

/* example
 * isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function isFile(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object File]';
};
