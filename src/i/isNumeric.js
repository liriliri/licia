/* Check if value is numeric.
 * 
 * |Name  |Type   |Desc                    |
 * |------|-------|------------------------|
 * |val   |*      |Value to check          |
 * |return|boolean|True if value is numeric|
 */

/* example
 * isNumeric(1); // -> true
 * isNumeric('1'); // -> true
 * isNumeric(Number.MAX_VALUE); // -> true
 * isNumeric(0xFF); // -> true
 * isNumeric(''); // -> false
 * isNumeric('1.1.1'); // -> false
 * isNumeric(NaN); // -> false
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function isNumeric(val: any): boolean;
 */

_('isStr isNaN isFinite isArr');

exports = function(val) {
    if (isStr(val)) val = val.replace(regComma, '');

    return !isNaN(parseFloat(val)) && isFinite(val) && !isArr(val);
};

var regComma = /,/g;
