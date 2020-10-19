/* Get a function parameter's names.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |fn    |Function to get parameters|
 * |return|Names                     |
 */

/* example
 * fnParams(function(a, b) {}); // -> ['a', 'b']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function fnParams(fn: types.AnyFn | string): string[];
 */

_('toSrc stripCmt startWith isStr types');

exports = function(fn) {
    const fnStr = stripCmt(isStr(fn) ? fn : toSrc(fn));

    let open;
    let close;

    if (
        !startWith(fnStr, 'async') &&
        !startWith(fnStr, 'function') &&
        !startWith(fnStr, '(')
    ) {
        // Arrow function with no brackets
        open = 0;
        close = fnStr.indexOf('=>');
    } else {
        open = fnStr.indexOf('(') + 1;
        close = fnStr.indexOf(')');
    }

    let ret = fnStr.slice(open, close);
    ret = ret.match(regArgNames);

    return ret === null ? [] : ret;
};

const regArgNames = /[^\s,]+/g;
