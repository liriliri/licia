/* Merge together the values of each of the arrays with the values at the corresponding position.
 *
 * |Name  |Desc                         |
 * |------|-----------------------------|
 * |...arr|Arrays to process            |
 * |return|New array of grouped elements|
 */

/* example
 * zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function zip(...arr: Array<any[]>): Array<any[]>;
 */

_('restArgs unzip');

exports = restArgs(unzip);
