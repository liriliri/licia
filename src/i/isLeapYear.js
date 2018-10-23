/* Check if a year is a leap year.
 * 
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |year  |number |Year to check              |
 * |return|boolean|True if year is a leap year|
 */

/* example
 * isLeapYear(2000); // -> true
 * isLeapYear(2002); // -> false
 */

/* module
 * env: all
 * test: all
 */

exports = function(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
