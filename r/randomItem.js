/* Get a random item from an array.
 *
 * |Name  |Type |Desc                |
 * |------|-----|--------------------|
 * |arr   |array|Array to get        |
 * |return|*    |Randomly picked item|
 * 
 * ```javascript
 * randomItem([1, 2, 3]); // -> 2
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('random'); 

function exports(arr) 
{ 
    return arr[random(0, arr.length - 1)];
} 