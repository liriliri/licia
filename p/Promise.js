/* Lightweight Promise implemetation. TODO
 *
 * [Promises spec](https://github.com/promises-aplus/promises-spec)
 * 
 * ```javascript
 * 
 * ```
 */

_('Class isObj isFn State');

exports = Class({
    initialize: function Promise(fn) 
    {
        if (!isObj(this)) throw new TypeError('Promises must be constructed via new');      
        if (!isFn(fn)) throw new TypeError(fn + ' is not a function');

        this._state = new State('pending', {});
        this._handled = false;
        this._value = undefined;
        this._deferreds = [];

        this._doResolve(fn);
    },
    _resolve: function () 
    {

    },
    _reject: function () 
    {

    },
    _doResolve: function (fn)
    {
        var self = this,
            done = false;

        try 
        {
            fn(function (val) 
            {
                if (done) return;
                done = true;
                self._resolve(val);
            }, function (reason)
            {
                if (done) return;
                done = true;
                self._reject(reason);
            });
        } catch (e) 
        {
            if (done) return;
            done = true;
            this._reject(e);
        }
    }
});
