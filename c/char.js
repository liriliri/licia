/* Return string representing a character whose Unicode code point is the given integer.
 *
 * |Name  |Type  |Desc                                  |
 * |------|------|--------------------------------------|
 * |num   |number|Integer to convert                    |
 * |return|string|String representing corresponding char|
 */

/* example
 * char(65); // -> 'A'
 * char(97); // -> 'a'
 */

function exports(num) {
    return String.fromCodePoint(num);
}
