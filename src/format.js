/* Format string in a printf-like format.
 *
 * |Name     |Desc                               |
 * |---------|-----------------------------------|
 * |str      |String to format                   |
 * |...values|Values to replace format specifiers|
 * |return   |Formatted string                   |
 *
 * ### Format Specifiers
 *
 * |Specifier|Desc                |
 * |---------|--------------------|
 * |%s       |String              |
 * |%d, %i   |Integer             |
 * |%f       |Floating point value|
 * |%o       |Object              |
 */

/* example
 * format('%s_%s', 'foo', 'bar'); // -> 'foo_bar'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function format(str: string, ...values: any[]): string;
 */

_('restArgs toInt toNum toStr');

exports = restArgs(function(str, values) {
    let ret = '';

    for (let i = 0, len = str.length; i < len; i++) {
        const c = str[i];

        if (c !== '%' || values.length === 0) {
            ret += c;
            continue;
        }

        i++;

        const val = values.shift();

        switch (str[i]) {
            case 'i':
            case 'd':
                ret += toInt(val);
                break;
            case 'f':
                ret += toNum(val);
                break;
            case 's':
                ret += toStr(val);
                break;
            case 'o':
                ret += tryStringify(val);
                break;
            default:
                i--;
                values.unshift(val);
                ret += c;
        }
    }

    return ret;
});

function tryStringify(obj) {
    try {
        return JSON.stringify(obj);
    } catch (err) {
        return '[Error Stringify]';
    }
}
