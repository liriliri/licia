/* Check if value is a file.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |val   |*      |Value to check         |
 * |return|boolean|True if value is a file|
 * 
 * ```javascript
 * isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
 * ```
 */

/* module
 * env: browser
 * test: browser
 */ 

_('objToStr');

function exports(val) 
{
    return objToStr(val) === '[object File]';
} 
