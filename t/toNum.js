/* Convert value to a number.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |val   |*     |Value to process|
 * |return|number|Resulted number |
 */

/* example
 * toNum('5'); // -> 5
 */

/* module
 * env: all
 * test: all
 */

_('isNum isObj isFn isStr');

exports = function(val) {
    if (isNum(val)) return val;

    if (isObj(val)) {
        var temp = isFn(val.valueOf) ? val.valueOf() : val;
        val = isObj(temp) ? temp + '' : temp;
    }

    if (!isStr(val)) return val === 0 ? val : +val;

    return +val;
};
