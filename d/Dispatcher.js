/* Flux dispatcher.
 *
 * [Related docs](https://facebook.github.io/flux/docs/dispatcher.html)
 */

/* example
 * var dispatcher = new Dispatcher();
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

_('Class uniqId');

exports = Class({
    initialize: function Dispatcher() {
        this._callbacks = {};
        this._isDispatching = false;
        this._isHandled = {};
        this._isPending = {};
    },
    dispatch: function(payload) {
        this._startDispatching(payload);

        for (var id in this._callbacks) {
            if (this._isPending[id]) continue;
            this._invokeCb(id);
        }

        this._stopDispatching();
    },
    register: function(cb) {
        var id = uniqId('ID_');

        this._callbacks[id] = cb;

        return id;
    },
    waitFor: function(ids) {
        for (var i = 0, len = ids.length; i < len; i++) {
            var id = ids[i];
            if (this._isPending[id]) continue;

            this._invokeCb(id);
        }
    },
    unregister: function(id) {
        delete this._callbacks[id];
    },
    isDispatching: function() {
        return this._isDispatching;
    },
    _startDispatching: function(payload) {
        for (var id in this._callbacks) {
            this._isPending[id] = false;
            this._isHandled[id] = false;
        }

        this._pendingPayload = payload;
        this._isDispatching = true;
    },
    _stopDispatching: function() {
        delete this._pendingPayload;
        this._isDispatching = false;
    },
    _invokeCb: function(id) {
        this._isPending[id] = true;
        this._callbacks[id](this._pendingPayload);
        this._isHandled[id] = true;
    }
});
