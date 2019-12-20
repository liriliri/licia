/* Capture keyboard input to trigger given events.
 *
 * ### on
 *
 * Register keyboard listener.
 *
 * |Name    |Type    |Desc        |
 * |--------|--------|------------|
 * |key     |string  |Key string  |
 * |listener|function|Key listener|
 *
 * ### off
 *
 * Unregister keyboard listener.
 */

/* example
 * hotkey.on('k', function () {
 *     console.log('k is pressed');
 * });
 * function keyDown() {}
 * hotkey.on('shift+a, shift+b', keyDown);
 * hotkey.off('shift+a', keyDown);
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare const hotkey: {
 *     on(key: string, listener: Function): void;
 *     off(key: string, listener: Function): void;
 * };
 */

_('Emitter keyCode each unique trim map');

exports = {
    on(keys, listener) {
        keys = keys.split(regComma);

        each(keys, function(key) {
            emitter.on(normalizeKey(key), listener);
        });
    },
    off(keys, listener) {
        keys = keys.split(regComma);

        each(keys, function(key) {
            emitter.off(normalizeKey(key), listener);
        });
    }
};

const emitter = new Emitter();

document.addEventListener('keydown', function(e) {
    const keys = [];

    if (e.ctrlKey) keys.push('ctrl');
    if (e.shiftKey) keys.push('shift');

    keys.push(keyCode(e.keyCode));

    emitter.emit(normalizeKey(keys.join('+')), e);
});

function normalizeKey(keyStr) {
    let keys = keyStr.split(regPlus);
    keys = map(keys, function(key) {
        return trim(key);
    });
    keys = unique(keys);
    keys.sort();

    return keys.join('+');
}

const regComma = /,/g;
const regPlus = /\+/g;
