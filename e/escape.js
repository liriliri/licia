/* Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
 *
 * |Name  |Type  |Desc            |
 * |------------------------------|
 * |str   |string|String to escape|
 * |return|string|Escaped string  |
 *
 * ```javascript
 * escape('You & Me'); -> // -> 'You &amp; Me'
 * ```
 */

_('_createEscaper');

exports = _createEscaper(0);