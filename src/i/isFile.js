/* Check if value is a file.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |val   |Value to check         |
 * |return|True if value is a file|
 */

/* example
 * isFile(new File(['test'], 'test.txt', { type: 'text/plain' })); // -> true
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function isFile(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object File]';
};
