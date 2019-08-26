/* Wrap the function inside a wrapper function, passing it as the first argument.
 *
 * |Name   |Type    |Desc            |
 * |-------|--------|----------------|
 * |fn     |function|Function to wrap|
 * |wrapper|function|Wrapper function|
 * |return |function|New function    |
 */

/* example
 * const p = wrap(escape, function(fn, text) {
 *     return '<p>' + fn(text) + '</p>';
 * });
 * p('You & Me'); // -> '<p>You &amp; Me</p>'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function wrap(fn: Function, wrapper: Function): Function;
 */

_('partial');

exports = function(fn, wrapper) {
    return partial(wrapper, fn);
};
