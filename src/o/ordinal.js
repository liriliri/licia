/* Add ordinal indicator to number.
 *
 * |Name  |Type  |Desc                   |
 * |------|------|-----------------------|
 * |num   |number|Number to add indicator|
 * |return|string|Result ordinal number  |
 */

/* example
 * ordinal(1); // -> '1st'
 * ordinal(2); // -> '2nd'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function ordinal(num: number): string;
 */

// https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
exports = function(num) {
    let j = num % 10;
    let k = num % 100;
    let indicator = 'th';
    if (j == 1 && k != 11) {
        indicator = 'st';
    }
    if (j == 2 && k != 12) {
        indicator = 'nd';
    }
    if (j == 3 && k != 13) {
        indicator = 'rd';
    }
    return num + indicator;
};
