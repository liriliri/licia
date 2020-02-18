/* Simple state machine.
 *
 * Extend from Emitter.
 *
 * ### constructor
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |initial|Initial state         |
 * |events |Events to change state|
 *
 * ### is
 *
 * Check current state.
 *
 * |Name  |Desc                                    |
 * |------|----------------------------------------|
 * |value |State to check                          |
 * |return|True if current state equals given value|
 */

/* example
 * const state = new State('empty', {
 *     load: {from: 'empty', to: 'pause'},
 *     play: {from: 'pause', to: 'play'},
 *     pause: {from: ['play', 'empty'], to: 'pause'},
 *     unload: {from: ['play', 'pause'], to: 'empty'}
 * });
 *
 * state.is('empty'); // -> true
 * state.load();
 * state.is('pause'); // -> true
 * state.on('play', function (src) {
 *     console.log(src); // -> 'eustia'
 * });
 * state.on('error', function (err, event) {
 *     // Error handler
 * });
 * state.play('eustia');
 */

/* module
 * env: all
 */

/* typescript
 * export declare class State extends Emitter {
 *     constructor(initial: string, events: any);
 *     is(state: string): boolean;
 *     [event: string]: any;
 * }
 */

_('Emitter each some toArr');

exports = Emitter.extend({
    className: 'State',
    initialize(initial, events) {
        this.callSuper(Emitter, 'initialize');

        this.current = initial;

        const self = this;

        each(events, function(event, key) {
            self[key] = buildEvent(key, event);
        });
    },
    is(state) {
        return this.current === state;
    }
});

function buildEvent(name, event) {
    const from = toArr(event.from);
    const to = event.to;

    return function() {
        const args = toArr(arguments);
        args.unshift(name);

        const hasEvent = some(
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
