// TODO

_('Emitter each isArr some slice');

function buildEvent(name, event)
{
    var from = event.from,
        to   = event.to;

    if (!isArr(from)) from = [from];

    return function ()
    {
        var args = slice(arguments, 1);
        args.unshift(name);
        if (some(from, function (val) {return this.current === val}, this))
        {
            this.current = to;
            this.emit.apply(this, args);
        }
    };
}

State = Emitter.extend({
    className: 'State',
    initialize: function (initial, events)
    {
        this.current = initial;

        var self = this;

        each(events, function (event, key)
        {
            self[key] = buildEvent(key, event);
        });
    },
    is: function (state) { return this.current === state }
});