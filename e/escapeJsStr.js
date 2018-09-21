/* Escape string to be a valid JavaScript string literal between quotes.
 *
 * http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
 *
 * |Name  |Type  |Desc            |
 * |------|------|----------------|
 * |str   |string|String to escape|
 * |return|string|Escaped string  |
 * 
 * ```javascript
 * escapeJsStr('\"\n'); // -> '\\"\\\\n'
 * ```
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function escapeJsStr(str: string): string
 */ 

_('toStr');

function exports(str) {
    return toStr(str).replace(regEscapeChars, function(char) {
        switch (char) {
            case '"':
            case "'":
            case '\\':
                return '\\' + char;
            case '\n':
                return '\\n';
            case '\r':
                return '\\r';
            // Line separator
            case '\u2028':
                return '\\u2028';
            // Paragraph separator
            case '\u2029':
                return '\\u2029';
        }
    });
}

var regEscapeChars = /["'\\\n\r\u2028\u2029]/g;
