/* Split different string case to an array.
 *
 * |Name  |Desc           |
 * |------|---------------|
 * |str   |String to split|
 * |return|Result array   |
 */

/* example
 * splitCase('foo-bar'); // -> ['foo', 'bar']
 * splitCase('foo bar'); // -> ['foo', 'bar']
 * splitCase('foo_bar'); // -> ['foo', 'bar']
 * splitCase('foo.bar'); // -> ['foo', 'bar']
 * splitCase('fooBar'); // -> ['foo', 'bar']
 * splitCase('foo-Bar'); // -> ['foo', 'bar']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function splitCase(str: string): string[];
 */

const regUpperCase = /([A-Z])/g;
const regSeparator = /[_.\- ]+/g;
const regTrim = /(^-)|(-$)/g;

exports = function(str) {
    str = str
        .replace(regUpperCase, '-$1')
        .toLowerCase()
        .replace(regSeparator, '-')
        .replace(regTrim, '');

    return str.split('-');
};
