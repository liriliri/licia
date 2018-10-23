/* Convert base of a number.
 *
 * |Name  |Type         |Desc             |
 * |------|-------------|-----------------|
 * |num   |number string|Number to convert|
 * |from  |number       |Base from        |
 * |to    |number       |Base to          |
 * |return|string       |Converted number |
 */

/* example
 * convertBase('10', 2, 10); // -> '2'
 * convertBase('ff', 16, 2); // -> '11111111'
 */

/* module
 * env: all
 * test: all
 */

exports = function(num, from, to) {
    return parseInt(num, from).toString(to);
};
