/* Center align text in a string.
 *
 * |Name   |Type        |Desc                    |
 * |-------|------------|------------------------|
 * |str    |string array|String to align         |
 * |[width]|number      |Total width of each line|
 * |return |string      |Center aligned string   |
 */

/* example
 * centerAlign('test', 8); // -> '  test'
 * centerAlign('test\nlines', 8); // -> '  test\n lines'
 * centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function centerAlign(str: string | string[], width?: number): string;
 */

_('longest isArr isUndef map lpad');

exports = function(str, width) {
    var ret = str;
    if (!isArr(ret)) {
        ret = ret.split(regLineBreak);
    }
    if (isUndef(width)) width = longest(str);

    ret = map(ret, function(str) {
        var len = str.length;

        return lpad(str, floor((width - len) / 2) + len);
    });

    return ret.join('\n');
};

var regLineBreak = /\n/g,
    floor = Math.floor;
