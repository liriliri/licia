/* Get object property, don't throw undefined error.
 *
 * |Name  |Type        |Desc                     |
 * |------|------------|-------------------------|
 * |obj   |object      |Object to query          |
 * |path  |array string|Path of property to get  |
 * |return|*           |Target value or undefined|
 *
 * ```javascript
 * var obj = {a: {aa: {aaa: 1}}};
 * safeGet(obj, 'a.aa.aaa'); // -> 1
 * safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
 * safeGet(obj, 'a.b'); // -> undefined
 * ```
 */

_('isStr isUndef');

function exports(obj, path)
{
    if (isStr(path)) path = path.split('.');

    var prop;

    /* eslint-disable no-cond-assign */
    while (prop = path.shift())
    {
        obj = obj[prop];
        if (isUndef(obj)) return;
    }

    return obj;
}