/* Theme helper.
 *
 * ### on
 *
 * Bind change event.
 *
 * ### off
 *
 * Unbind change event.
 *
 * ### get
 *
 * Get current theme(light or dark).
 */

/* example
 * theme.on('change', function(theme) {
 *     console.log(theme); // -> 'dark'
 * });
 * theme.get(); // -> 'light'
 */

/* module
 * env: browser
 * since: 1.44.0
 */

/* typescript
 * export declare namespace theme {
 *     interface ITheme extends Emitter {
 *         get(): string;
 *     }
 * }
 * export declare const theme: theme.ITheme;
 */

_('Emitter MediaQuery');

const m = new MediaQuery('(prefers-color-scheme: dark)');

exports = {
    get() {
        return m.isMatch() ? 'dark' : 'light';
    }
};

Emitter.mixin(exports);

m.on('match', () => exports.emit('change', 'dark'));
m.on('unmatch', () => exports.emit('change', 'light'));
