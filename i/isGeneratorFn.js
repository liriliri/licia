/* Check if value is a generator function.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is a generator function|
 *
 * ```javascript
 * isGeneratorFn(function * () {}); // -> true;
 * isGeneratorFn(function () {}); // -> false;
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object GeneratorFunction]';
}