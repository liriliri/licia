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
 *
 * ```javascript
 * hotkey.on('k', function () 
 * {
 *     console.log('k is pressed');
 * });
 * function keyDown() {}
 * hotkey.on('shift+a, shift+b', keyDown);
 * hotkey.off('shift+a', keyDown);
 * ```
 */

/* module
 * env: browser
 * test: browser
 */

_('Emitter keyCode each unique trim map');

exports = {
    on: function(keys, listener) {
        keys = keys.split(regComma);

        each(keys, function(key) {
            emitter.on(normalizeKey(key), listener);
        });
    },
    off: function(keys, listener) {
        keys = keys.split(regComma);

        each(keys, function(key) {
            emitter.off(normalizeKey(key), listener);
        });
    }
};

var emitter = new Emitter();

document.addEventListener('keydown', function(e) {
    var keys = [];

    if (e.ctrlKey) keys.push('ctrl');
    if (e.shiftKey) keys.push('shift');

    keys.push(keyCode(e.keyCode));

    emitter.emit(normalizeKey(keys.join('+')), e);
});

function normalizeKey(keyStr) {
    var keys = keyStr.split(regPlus);
    keys = map(keys, function(key) {
        return trim(key);
    });
    keys = unique(keys);
    keys.sort();

    return keys.join('+');
}

var regComma = /,/g,
    regPlus = /\+/g;
