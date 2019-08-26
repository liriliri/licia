/* Copy text to clipboard using document.execCommand.
 *
 * |Name|Type    |Desc             |
 * |----|--------|-----------------|
 * |text|string  |Text to copy     |
 * |[cb]|function|Optional callback|
 */

/* example
 * copy('text', function (err) {
 *     // Handle errors.
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function copy(text: string, cb?: Function): void;
 */

_('extend noop');

exports = function(text, cb) {
    cb = cb || noop;

    const el = document.createElement('textarea');
    const body = document.body;

    extend(el.style, {
        fontSize: '12pt',
        border: '0',
        padding: '0',
        margin: '0',
        position: 'absolute',
        left: '-9999px'
    });

    el.value = text;

    body.appendChild(el);

    // Prevent showing ios keyboard.
    el.setAttribute('readonly', '');
    el.select();
    el.setSelectionRange(0, text.length);

    try {
        document.execCommand('copy');
        cb();
    } catch (e) {
        cb(e);
    } finally {
        body.removeChild(el);
    }
};
