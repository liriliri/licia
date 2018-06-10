/* Check if a year is a leap year.
 * 
 * |Name  |Type   |Desc                       |
 * |------|-------|---------------------------|
 * |year  |number |Year to check              |
 * |return|boolean|True if year is a leap year|
 * 
 * ```javascript
 * isLeapYear(2000); // -> true
 * isLeapYear(2002); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
