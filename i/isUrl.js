/* Loosely validate an url.
 * 
 * |Name  |Type   |Desc                               |
 * |------|-------|-----------------------------------|
 * |val   |string |Value to check                     |
 * |return|boolean|True if value is an url like string|
 *
 * ```javascript
 * isUrl('http://www.example.com?foo=bar&param=test'); // -> true
 * ```
 */

function exports(val) 
{
    return regUrl.test(val);
}

var regUrl = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
