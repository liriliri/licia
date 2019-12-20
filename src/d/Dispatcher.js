/* Flux dispatcher.
 *
 * [Related docs](https://facebook.github.io/flux/docs/dispatcher.html)
 */

/* example
 * const dispatcher = new Dispatcher();
 *
 * dispatcher.register(function (payload) {
 *    switch (payload.actionType) {
 *        // Do something
 *    }
 * });
 *
 * dispatcher.dispatch({
 *     actionType: 'action'
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare class Dispatcher {
 *     dispatch(payload: any);
 *     register(cb: Function): void;
 *     waitFor(ids: string[]): void;
 *     unregister(id: string): void;
 *     isDispatching(): boolean;
 * }
 */

_('Class uniqId');

exports = Class({
    initialize: function Dispatcher() {
        this._callbacks = {};
        this._isDispatching = false;
        this._isHandled = {};
        this._isPending = {};
    },
    dispatch(payload) {
        this._startDispatching(payload);

        for (const id in this._callbacks) {
            if (this._isPending[id]) continue;
            this._invokeCb(id);
        }

        this._stopDispatching();
    },
    register(cb) {
        const id = uniqId('ID_');

        this._callbacks[id] = cb;

        return id;
    },
    waitFor(ids) {
        for (let i = 0, len = ids.length; i < len; i++) {
            const id = ids[i];
            if (this._isPending[id]) continue;

            this._invokeCb(id);
        }
    },
    unregister(id) {
        delete this._callbacks[id];
    },
    isDispatching() {
        return this._isDispatching;
    },
    _startDispatching(payload) {
        for (const id in this._callbacks) {
            this._isPending[id] = false;
            this._isHandled[id] = false;
        }

        this._pendingPayload = payload;
        this._isDispatching = true;
    },
    _stopDispatching() {
        delete this._pendingPayload;
        this._isDispatching = false;
    },
    _invokeCb(id) {
        this._isPending[id] = true;
        this._callbacks[id](this._pendingPayload);
        this._isHandled[id] = true;
    }
});
