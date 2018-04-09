/* Check if value looks like a promise.
 * 
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |val   |*      |Value to check                    |
 * |return|boolean|True if value looks like a promise|
 * 
 * ```javascript
 * isPromise(new Promise(function () {})); // -> true
 * isPromise({}); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('isObj isFn');

function exports(val) 
{
    return isObj(val) && isFn(val.then);
} 