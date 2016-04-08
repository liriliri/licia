// TODO

_('Class State isFn isObj each');

function getThen(val)
{
    if (val && (isObj(val) || isFn(val)))
    {
        var then = val.then;
        if (isFn(then)) return then;
    }

    return null;
}

function doResolve(fn, onFulfilled, onRejected)
{
    var done = false;

    try
    {
        fn(function (val)
        {
            if (done) return;
            done = true;
            onFulfilled(val);
        }, function (err)
        {
            if (done) return;
            done = true;
            onRejected(err);
        });
    } catch (e)
    {
        if (done) return;
        done = true;
        onRejected(e);
    }
}

Promise = Promise || Class({
    initialize: function (fn)
    {
        this._state = new State('pending', {
            fulfill: {
                from: 'pending',
                to  : 'fulfilled'
            },
            reject: {
                from: 'pending',
                to  : 'rejected'
            }
        });
        this._value    = null;
        this._handlers = [];

        var self = this;

        this._state.on('fulfill', function (result)
        {
            self._value = result;
            each(self._handlers, self._handle, this);
            self._handlers = null;
        }).on('reject', function (err)
        {
            self._value = err;
            each(self._handlers, self._handle, this);
            self._handlers = null;
        });

        doResolve(fn, function ()
        {

        })
    },
    _handle: function (handler)
    {
        var state = this._state,
            value = this._value;

        if (state.is('pending'))
        {
            this._handlers.push(handler);
        } else
        {
            if (state.is('fulfilled') && isFn(handler.onFulfilled))
            {
                handler.onFulfilled(value);
            }
            if (state.is('rejected') && isFn(handler.onRejected))
            {
                handler.onRejected(value);
            }
        }
    },
    _resolve: function (result)
    {

    },
    done: function (onFulfilled, onRejected)
    {
        var self = this;

        setTimeout(function ()
        {
            self._handle({
                onFulfilled: onFulfilled,
                onRejected : onRejected
            });
        }, 0)
    },
    then: function (onFulfilled, onRejected)
    {

    }
});