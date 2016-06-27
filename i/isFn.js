/* Check if value is a function.
 *
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |val   |*      |The value to check         |
 * |return|boolean|True if value is a function|
 *
 * Generator function is also classified as true.
 *
 * ```javascript
 * isFn(function() {}); // -> true
 * isFn(function*() {}); // -> true
 * ```
 */

_('objToStr');

exports = function (val)
{
    var objStr = objToStr(val);

    return objStr === '[object Function]' || objStr === '[object GeneratorFunction]';
};