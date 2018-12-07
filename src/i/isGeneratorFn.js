/* Check if value is a generator function.
 *
 * |Name  |Type   |Desc                                 |
 * |------|-------|-------------------------------------|
 * |val   |*      |Value to check                       |
 * |return|boolean|True if value is a generator function|
 */

/* example
 * isGeneratorFn(function * () {}); // -> true;
 * isGeneratorFn(function () {}); // -> false;
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isGeneratorFn(val: any): boolean;
 */

_('objToStr');

exports = function(val) {
    return objToStr(val) === '[object GeneratorFunction]';
};
