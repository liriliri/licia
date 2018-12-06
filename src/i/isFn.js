/* Check if value is a function.
 *
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |val   |*      |Value to check             |
 * |return|boolean|True if value is a function|
 *
 * Generator function is also classified as true.
 */

/* example
 * isFn(function() {}); // -> true
 * isFn(function*() {}); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isFn(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    var objStr = objToStr(val);

    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]'
    );
};
