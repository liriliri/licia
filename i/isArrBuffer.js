/* Check if value is an ArrayBuffer.
 * 
 * |Name  |Type   |Desc                           |
 * |------|-------|-------------------------------|
 * |val   |*      |Value to check                 |
 * |return|boolean|True if value is an ArrayBuffer|
 * 
 * ```javascript
 * isArrBuffer(new ArrayBuffer(8)); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('objToStr'); 

function exports(val) 
{
    return objToStr(val) === '[object ArrayBuffer]';
}