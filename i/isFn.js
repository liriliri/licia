/* Check if value is a function.
 *
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |val   |*      |Value to check             |
 * |return|boolean|True if value is a function|
 *
 * Generator function is also classified as true.
 *
 * ```javascript
 * isFn(function() {}); // -> true
 * isFn(function*() {}); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('objToStr');

function exports(val) {
    var objStr = objToStr(val);

    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]'
    );
}
