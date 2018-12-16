/* Handle global uncaught errors and promise rejections.
 *
 * ### start
 *
 * Start handling of errors.
 *
 * ### stop
 *
 * Stop handling.
 *
 * ### addListener
 *
 * Add listener for handling errors.
 *
 * |Name|Type    |Desc          |
 * |----|--------|--------------|
 * |fn  |function|Error listener|
 *
 * ### rmListener
 *
 * Remove listener.
 *
 * ### rmAllListeners
 *
 * Remove all listeners.
 */

/* example
 * uncaught.start();
 * uncaught.addListener(err => {
 *     // Do something.
 * });
 */

/* module
 * env: all
 * test: manual
 */

/* typescript
 * export declare const uncaught: {
 *     start(): void;
 *     stop(): void;
 *     addListener(fn: (err: Error) => void): void;
 *     rmListener(fn: (err: Error) => void): void;
 *     rmAllListeners(): void;
 * };
 */

_('isBrowser');

let listeners = [];
let isOn = false;

exports = {
    start() {
        isOn = true;
    },
    stop() {
        isOn = false;
    },
    addListener(fn) {
        listeners.push(fn);
    },
    rmListener(fn) {
        const idx = listeners.indexOf(fn);

        if (idx > -1) {
            listeners.splice(idx, 1);
        }
    },
    rmAllListeners() {
        listeners = [];
    }
};

if (isBrowser) {
    window.addEventListener('error', callListeners);
    window.addEventListener('unhandledrejection', e => {
        callListeners(e.reason);
    });
} else {
    process.on('uncaughtException', callListeners);
    process.on('unhandledRejection', callListeners);
}

function callListeners(err) {
    if (!isOn) return;

    for (let i = 0, len = listeners.length; i < len; i++) {
        listeners[i](err);
    }
}
