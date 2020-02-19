/* Convert string to "camelCase".
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |str   |String to convert |
 * |return|Camel cased string|
 */

/* example
 * camelCase('foo-bar'); // -> fooBar
 * camelCase('foo bar'); // -> fooBar
 * camelCase('foo_bar'); // -> fooBar
 * camelCase('foo.bar'); // -> fooBar
 */

/* module
 * env: all
 */

/* typescript
 * export declare function camelCase(str: string): string;
 */

_('splitCase');

exports = function(str) {
    const arr = splitCase(str);

    let ret = arr[0];
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
