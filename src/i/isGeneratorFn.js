/* Check if value is a generator function.
 *
 * |Name  |Desc                                 |
 * |------|-------------------------------------|
 * |val   |Value to check                       |
 * |return|True if value is a generator function|
 */

/* example
 * isGeneratorFn(function*() {}); // -> true
 * isGeneratorFn(function() {}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isGeneratorFn(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object GeneratorFunction]';
};
