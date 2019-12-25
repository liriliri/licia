/* Check if value is an async function.
 *
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |val   |*      |Value to check                    |
 * |return|boolean|True if value is an async function|
 */

/* example
 * isAsyncFn(function * () {}); // -> false
 * isAsyncFn(function () {}); // -> false
 * isAsyncFn(async function () {}); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isAsyncFn(val: any): boolean;
 */

_('objToStr');

exports = val => objToStr(val) === '[object AsyncFunction]';
