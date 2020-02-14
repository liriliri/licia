/* Center align text in a string.
 *
 * |Name  |Desc                    |
 * |------|------------------------|
 * |str   |String to align         |
 * |width |Total width of each line|
 * |return|Center aligned string   |
 */

/* example
 * centerAlign('test', 8); // -> '  test'
 * centerAlign('test\nlines', 8); // -> '  test\n lines'
 * centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function centerAlign(str: string | string[], width?: number): string;
 */

_('longest isArr isUndef map lpad');

exports = function(str, width) {
    let ret = str;
    if (!isArr(ret)) {
        ret = ret.split(regLineBreak);
    }
    if (isUndef(width)) width = longest(str);

    ret = map(ret, function(str) {
        const len = str.length;

        return lpad(str, floor((width - len) / 2) + len);
    });

    return ret.join('\n');
};

const regLineBreak = /\n/g;
const floor = Math.floor;
