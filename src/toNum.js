/* Convert value to a number.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |val   |Value to process|
 * |return|Result number   |
 */

/* example
 * toNum('5'); // -> 5
 */

/* module
 * env: all
 */

/* typescript
 * export declare function toNum(val: any): number;
 */

_('isNum isObj isFn isStr');

exports = function(val) {
    if (isNum(val)) return val;

    if (isObj(val)) {
        const temp = isFn(val.valueOf) ? val.valueOf() : val;
        val = isObj(temp) ? temp + '' : temp;
    }

    if (!isStr(val)) return val === 0 ? val : +val;

    return +val;
};
