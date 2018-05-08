/* Check if value is a Map object.
 *
 * |Name  |Type   |Desc                  |
 * |------|-------|----------------------|
 * |val   |*      |Value to check        |
 * |return|boolean|True if value is a Map|
 * 
 * ```javascript
 * isMap(new Map()); // -> true
 * isMap(new WeakMap()); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('objToStr'); 

function exports(val) 
{
    return objToStr(val) === '[object Map]';
} 