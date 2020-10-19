/* Convert value to a string.
 *
 * |Name  |Desc            |
 * |------|----------------|
 * |val   |Value to convert|
 * |return|Result string   |
 */

/* example
 * toStr(null); // -> ''
 * toStr(1); // -> '1'
 * toStr(false); // -> 'false'
 * toStr([1, 2, 3]); // -> '1,2,3'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function toStr(val: any): string;
 */

exports = function(val) {
    return val == null ? '' : val.toString();
};
