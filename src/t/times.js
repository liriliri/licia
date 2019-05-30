/* Invoke given function n times.
 *
 * |Name  |Type    |Desc                          |
 * |------|--------|------------------------------|
 * |n     |number  |Times to invoke function      |
 * |fn    |function|Function invoked per iteration|
 * |[ctx] |*       |Function context              |
 * |return|array   |Array of results              |
 */

/* example
 * times(3, String); // -> ['0', '1', '2']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function times<T>(n: number, fn: (n: number) => T, ctx?: any): T[];
 */

_('optimizeCb');

exports = function(n, fn, ctx) {
    const ret = Array(Math.max(0, n));

    fn = optimizeCb(fn, ctx, 1);

    for (let i = 0; i < n; i++) {
        ret[i] = fn(i);
    }

    return ret;
};
