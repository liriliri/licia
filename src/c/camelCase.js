/* Convert string to "camelCase".
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |str   |string|String to convert |
 * |return|string|Camel cased string|
 */

/* example
 * camelCase('foo-bar'); // -> fooBar
 * camelCase('foo bar'); // -> fooBar
 * camelCase('foo_bar'); // -> fooBar
 * camelCase('foo.bar'); // -> fooBar
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function camelCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    var arr = splitCase(str);

    var ret = arr[0];
    arr.shift();

    arr.forEach(capitalize, arr);
    ret += arr.join('');

    return ret;
};

function capitalize(val, idx) {
    this[idx] = val.replace(/\w/, function(match) {
        return match.toUpperCase();
    });
}
