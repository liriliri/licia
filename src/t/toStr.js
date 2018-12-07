/* Convert value to a string.
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |val   |*     |Value to convert|
 * |return|string|Resulted string |
 */

/* example
 * toStr(null); // -> ''
 * toStr(1); // -> '1'
 * toStr(false); // -> 'false'
 * toStr([1, 2, 3]); // -> '1,2,3'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function toStr(val: any): string;
 */

exports = function(val) {
    return val == null ? '' : val.toString();
};
