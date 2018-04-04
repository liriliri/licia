/* Check if values are close(almost equal) to each other.
 *
 * `abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`
 *
 * |Name       |Type   |Desc                    |
 * |-----------|-------|------------------------|
 * |a          |number |Number to compare       |
 * |b          |number |Number to compare       |
 * |relTol=1e-9|number |Relative tolerance      |
 * |absTol=0   |number |Absolute tolerance      |
 * |return     |boolean|True if values are close|
 * 
 * ```javascript
 * isClose(1, 1.0000000001); // -> true
 * isClose(1, 2); // -> false
 * isClose(1, 1.2, 0.3); // -> true
 * isClose(1, 1.2, 0.1, 0.3); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isNum'); 

function exports(a, b, relTol, absTol) 
{
    if (!isNum(relTol)) relTol = 1e-9;
    if (!isNum(absTol)) absTol = 0;

    return abs(a - b) <= max(relTol * max(abs(a), abs(b)), absTol);
}

var abs = Math.abs,
    max = Math.max;