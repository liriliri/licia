/* Get a function parameter's names.
 *
 * |Name  |Type    |Desc                      |
 * |------|--------|--------------------------|
 * |fn    |function|Function to get parameters|
 * |return|array   |Names                     |
 */

/* example
 * fnParams(function (a, b) {}); // -> ['a', 'b']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function fnParams(fn: Function): string[];
 */

_('toSrc stripCmt startWith');

exports = function(fn) {
    const fnStr = stripCmt(toSrc(fn));

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

var regArgNames = /[^\s,]+/g;
