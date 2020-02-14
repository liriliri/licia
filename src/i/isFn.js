/* Check if value is a function.
 *
 * |Name  |Desc                       |
 * |------|---------------------------|
 * |val   |Value to check             |
 * |return|True if value is a function|
 *
 * Generator function is also classified as true.
 */

/* example
 * isFn(function() {}); // -> true
 * isFn(function*() {}); // -> true
 * isFn(async function() {}); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isFn(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    const objStr = objToStr(val);

    return (
        objStr === '[object Function]' ||
        objStr === '[object GeneratorFunction]' ||
        objStr === '[object AsyncFunction]'
    );
};
