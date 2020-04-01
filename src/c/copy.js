/* Copy text to clipboard using document.execCommand.
 *
 * |Name|Desc             |
 * |----|-----------------|
 * |text|Text to copy     |
 * |cb  |Optional callback|
 */

/* example
 * copy('text', function(err) {
 *     // Handle errors.
 * });
 */

/* module
 * env: browser
 */

/* typescript
 * export declare function copy(text: string, cb?: types.AnyFn): void;
 */

_('extend noop types');

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
