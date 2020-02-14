/* Check if value is an async function.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |val   |Value to check                    |
 * |return|True if value is an async function|
 */

/* example
 * isAsyncFn(function * () {}); // -> false
 * isAsyncFn(function () {}); // -> false
 * isAsyncFn(async function () {}); // -> true
 */

/* module
 * env: all
 * since: 1.17.0
 */

/* typescript
 * export declare function isAsyncFn(val: any): boolean;
 */

_('objToStr');

exports = val => objToStr(val) === '[object AsyncFunction]';
