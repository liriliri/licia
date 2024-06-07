/* Capture keyboard input to trigger given events.
 *
 * ### on
 *
 * Register keyboard listener.
 *
 * |Name    |Desc          |
 * |--------|--------------|
 * |key     |Key string    |
 * |options |Hotkey options|
 * |listener|Key listener  |
 *
 * Options:
 *
 * |Name            |Desc          |
 * |----------------|--------------|
 * |element=document|Target element|
 *
 * ### off
 *
 * Unregister keyboard listener.
 */

/* example
 * const container = document.getElementById('container');
 * hotkey.on(
 *     'k',
 *     {
 *         element: container
 *     },
 *     function() {
 *         console.log('k is pressed');
 *     }
 * );
 * function keyDown() {}
 * hotkey.on('shift+a, shift+b', keyDown);
 * hotkey.off('shift+a', keyDown);
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace hotkey {
 *     interface IOptions {
 *         element?: HTMLElement;
 *     }
 * }
 * export declare const hotkey: {
 *     on(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
 *     on(key: string, listener: types.AnyFn): void;
 *     off(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
 *     off(key: string, listener: types.AnyFn): void;
 * };
 */

_('Emitter keyCode each unique trim map types isFn');

exports = {
    on(keys, options, listener) {
        if (isFn(options)) {
            listener = options;
            options = {};
        }

        keys = keys.split(regComma);

        each(keys, function(key) {
            key = normalizeKey(key);
            if (options.element) {
                const { element } = options;
                const hotkeyListeners = element._hotkeyListeners || {};
                element._hotkeyListeners = hotkeyListeners;
                hotkeyListeners[key] = hotkeyListeners[key] || [];
                const hotkeyListener = function(e) {
                    if (key === getKeysFromEvent(e)) {
                        listener(e);
                    }
                };
                hotkeyListeners[key].push({
                    listener: hotkeyListener,
                    origin: listener
                });
                element.addEventListener('keydown', hotkeyListener);
            } else {
                emitter.on(key, listener);
            }
        });
    },
    off(keys, options, listener) {
        if (isFn(options)) {
            listener = options;
            options = {};
        }

        keys = keys.split(regComma);

        each(keys, function(key) {
            key = normalizeKey(key);
            if (options.element) {
                const { element } = options;
                const hotkeyListeners = element._hotkeyListeners;
                if (hotkeyListeners && hotkeyListeners[key]) {
                    const listeners = hotkeyListeners[key];
                    let hotkeyListener;
                    for (let i = 0, len = listeners.length; i < len; i++) {
                        if (listeners[i].origin === listener) {
                            hotkeyListener = listeners[i].listener;
                            listeners.splice(i, 1);
                        }
                    }
                    if (hotkeyListener) {
                        element.removeEventListener('keydown', hotkeyListener);
                    }
                }
            } else {
                emitter.off(key, listener);
            }
        });
    }
};

const emitter = new Emitter();

document.addEventListener('keydown', function(e) {
    emitter.emit(getKeysFromEvent(e), e);
});

function getKeysFromEvent(e) {
    const keys = [];

    if (e.ctrlKey) keys.push('ctrl');
    if (e.shiftKey) keys.push('shift');

    keys.push(keyCode(e.keyCode));

    return normalizeKey(keys.join('+'));
}

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
