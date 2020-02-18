/* Wrap the function inside a wrapper function, passing it as the first argument.
 *
 * |Name   |Desc            |
 * |-------|----------------|
 * |fn     |Function to wrap|
 * |wrapper|Wrapper function|
 * |return |New function    |
 */

/* example
 * const p = wrap(escape, function(fn, text) {
 *     return '<p>' + fn(text) + '</p>';
 * });
 * p('You & Me'); // -> '<p>You &amp; Me</p>'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function wrap(fn: Function, wrapper: Function): Function;
 */

_('partial');

exports = function(fn, wrapper) {
    return partial(wrapper, fn);
};
