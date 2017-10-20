/* Cast value into a property path array.
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |str   |*     |Value to inspect   |
 * |[obj] |object|Object to query    |
 * |return|array |Property path array|
 * 
 * ```javascript
 * castPath('a.b.c'); // -> ['a', 'b', 'c']
 * castPath(['a']); // -> ['a']
 * castPath('a[0].b'); // -> ['a', '0', 'b']
 * castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('has isArr');

function exports(str, obj) 
{
    if (isArr(str)) return str;
    if (obj && has(obj, str)) return [str];

    var ret = [];

    str.replace(regPropName, function(match, number, quote, str) 
    {
        ret.push(quote ? str.replace(regEscapeChar, '$1') : (number || match));
    });

    return ret;
}

// Lodash _stringToPath
var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    regEscapeChar = /\\(\\)?/g;