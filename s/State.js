/* Simple state machine.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name   |Type  |Desc                  |
 * |-------|------|----------------------|
 * |initial|string|Initial state         |
 * |events |string|Events to change state|
 *
 * ### is
 *
 * Check current state.
 *
 * |Name  |Type   |Desc                                    |
 * |------|-------|----------------------------------------|
 * |value |string |State to check                          |
 * |return|boolean|True if current state equals given value|
 *
 * ```javascript
 * var state = new State('empty', {
 *     load: {from: 'empty', to: 'pause'},
 *     play: {from: 'pause', to: 'play'},
 *     pause: {from: ['play', 'empty'], to: 'pause'},
 *     unload: {from: ['play', 'pause'], to: 'empty'}
 * });
 *
 * state.is('empty'); // -> true
 * state.load();
 * state.is('pause'); // -> true
 * state.on('play', function (src)
 * {
 *     console.log(src); // -> 'eustia'
 * });
 * state.on('error', function (err, event)
 * {
 *     // Error handler
 * });
 * state.play('eustia');
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('Emitter each isArr some slice toArr');

exports = Emitter.extend({
    className: 'State',
    initialize: function(initial, events) {
        this.callSuper(Emitter, 'initialize');

        this.current = initial;

        var self = this;

        each(events, function(event, key) {
            self[key] = buildEvent(key, event);
        });
    },
    is: function(state) {
        return this.current === state;
    }
});

function buildEvent(name, event) {
    var from = toArr(event.from),
        to = event.to;

    return function() {
        var args = toArr(arguments);
        args.unshift(name);

        var hasEvent = some(
            from,
            function(val) {
                return this.current === val;
            },
            this
        );

        if (hasEvent) {
            this.current = to;
            this.emit.apply(this, args);
        } else {
            this.emit(
                'error',
                new Error(this.current + ' => ' + to + ' error'),
                name
            );
        }
    };
}
