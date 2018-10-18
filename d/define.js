/* Define a module, should be used along with use.
 *
 * |Name      |Type    |Desc        |
 * |----------|--------|------------|
 * |name      |string  |Module name |
 * |[requires]|array   |Dependencies|
 * |method    |function|Module body |
 *
 * The module won't be executed until it's used by use function.
 */

/* example
 * define('A', function () {
 *     return 'A';
 * });
 * define('B', ['A'], function (A) {
 *     return 'B' + A;
 * });
 */

/* module
 * env: all
 * test: all
 */

_('toArr');

function exports(name, requires, method) {
    if (arguments.length === 2) {
        method = requires;
        requires = [];
    }

    define(name, requires, method);
}

var modules = (exports._modules = {});

function define(name, requires, method) {
    modules[name] = {
        requires: toArr(requires),
        body: method
    };
}
