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

_('toSrc stripCmt');

exports = function(fn) {
    var fnStr = stripCmt(toSrc(fn));

    var ret = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'));
    ret = ret.match(regArgNames);

    return ret === null ? [] : ret;
};

var regArgNames = /[^\s,]+/g;
