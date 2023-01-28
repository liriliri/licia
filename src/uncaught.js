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
 * |Name|Desc          |
 * |----|--------------|
 * |fn  |Error listener|
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
 * env: node browser
 * test: manual
 * since: 1.2.0
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

_('isBrowser SingleEmitter');

let isOn = false;

exports = {
    start() {
        isOn = true;
    },
    stop() {
        isOn = false;
    }
};

SingleEmitter.mixin(exports);

if (isBrowser) {
    window.addEventListener('error', event => {
        if (event.error) {
            callListeners(event.error);
        } else if (event.message) {
            // errors from worker
            const e = new Error(event.message);
            e.stack = `Error: ${event.message} \n at ${event.filename}:${event.lineno}:${event.colno}`;
            callListeners(e);
        }
    });
    window.addEventListener('unhandledrejection', e => {
        callListeners(e.reason);
    });
} else {
    process.on('uncaughtException', callListeners);
    process.on('unhandledRejection', callListeners);
}

function callListeners(err) {
    if (!isOn) return;

    exports.emit(err);
}
