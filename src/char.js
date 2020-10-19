/* Return string representing a character whose Unicode code point is the given integer.
 *
 * |Name  |Desc                                  |
 * |------|--------------------------------------|
 * |num   |Integer to convert                    |
 * |return|String representing corresponding char|
 */

/* example
 * char(65); // -> 'A'
 * char(97); // -> 'a'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function char(num: number): string;
 */

exports = function(num) {
    return String.fromCodePoint(num);
};
