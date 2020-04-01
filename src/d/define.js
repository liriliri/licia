/* Define a module, should be used along with use.
 *
 * |Name    |Desc        |
 * |--------|------------|
 * |name    |Module name |
 * |requires|Dependencies|
 * |method  |Module body |
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
 */

/* typescript
 * export declare function define(
 *     name: string,
 *     requires: string[],
 *     method: types.AnyFn
 * ): void;
 * export declare function define(name: string, method: types.AnyFn): void;
 */

_('toArr types');

exports = function(name, requires, method) {
    if (arguments.length === 2) {
        method = requires;
        requires = [];
    }

    define(name, requires, method);
};

const modules = (exports._modules = {});

function define(name, requires, method) {
    modules[name] = {
        requires: toArr(requires),
        body: method
    };
}
