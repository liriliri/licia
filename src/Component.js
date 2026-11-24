/* Imperative UI component base class, inspired by Backbone.View.
 *
 * Extend from Emitter. Manages options and declarative DOM events. Does not
 * take ownership of rendering — subclasses build and update the DOM
 * themselves.
 *
 * Declare `defaults`, `option` and `events` on the subclass prototype.
 * `html()` applies `option` handlers after updating the DOM.
 *
 * ### constructor
 *
 * |Name     |Desc               |
 * |---------|-------------------|
 * |container|Element to mount on|
 * |options  |Component options  |
 *
 * ### defaults
 *
 * Prototype default option values. Can also be a function returning an object.
 *
 * ### option
 *
 * Prototype map of option change handlers. Keys are option names; values are
 * method names or functions `(val, oldVal)`.
 *
 * ### events
 *
 * Prototype DOM events hash, Backbone style: `'click .inc': 'inc'`.
 *
 * ### set
 *
 * Set option value. Emits `changeOption` when value changes and runs `option`
 * handlers.
 *
 * |Name|Desc         |
 * |----|-------------|
 * |name|Option name  |
 * |val |Option value |
 *
 * Set multiple options.
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |options|Key value pairs|
 *
 * ### get
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |name  |Option name        |
 * |return|Value of the option|
 *
 * ### html
 *
 * Get or set container HTML. When setting, runs all `option` handlers.
 *
 * |Name  |Desc        |
 * |------|------------|
 * |html  |Html string |
 * |return|This or html|
 *
 * ### find
 *
 * Find element inside container.
 *
 * |Name    |Desc          |
 * |--------|--------------|
 * |selector|Query selector|
 * |return  |Wrapped result|
 *
 * ### listen
 *
 * Bind DOM event on the component container; automatically unbound in
 * `destroy`.
 *
 * |Name    |Desc             |
 * |--------|-----------------|
 * |type    |Event type       |
 * |selector|Delegate selector|
 * |handler |Event handler    |
 *
 * ### destroy
 *
 * Unbind listeners, empty container, emit `destroy` and remove all emitter
 * listeners.
 *
 * ### Events
 *
 * #### changeOption
 *
 * Triggered when an option value changes via `set`.
 *
 * #### destroy
 *
 * Triggered when component is destroyed.
 */

/* example
 * const Badge = Component.extend({
 *     defaults: { count: 0 },
 *     option: {
 *         count(val) {
 *             this.find('.count').text(String(val));
 *         }
 *     },
 *     initialize(container, options) {
 *         this.callSuper(Component, 'initialize', [container, options]);
 *         this.html('<span class="count"></span>');
 *     }
 * });
 *
 * const Counter = Component.extend({
 *     defaults: { value: 0, disabled: false },
 *     option: {
 *         value(val) {
 *             this.find('.val').text(String(val));
 *             if (this._badge) this._badge.set('count', val);
 *         },
 *         disabled(val) {
 *             this.$container[val ? 'addClass' : 'rmClass']('disabled');
 *         }
 *     },
 *     events: {
 *         'click .inc': 'inc',
 *         'click .dec': 'dec'
 *     },
 *     initialize(container, options) {
 *         this.callSuper(Component, 'initialize', [container, options]);
 *         this.html(
 *             '<button class="dec">-</button>' +
 *                 '<span class="val"></span>' +
 *                 '<button class="inc">+</button>' +
 *                 '<span class="badge"></span>'
 *         );
 *         this._badge = new Badge(this.find('.badge').get(0), {
 *             count: this.get('value')
 *         });
 *     },
 *     destroy() {
 *         this._badge.destroy();
 *         this.callSuper(Component, 'destroy');
 *     },
 *     inc() {
 *         if (this.get('disabled')) return;
 *         this.set('value', this.get('value') + 1);
 *         this.emit('change', this.get('value'));
 *     },
 *     dec() {
 *         if (this.get('disabled')) return;
 *         this.set('value', this.get('value') - 1);
 *         this.emit('change', this.get('value'));
 *     }
 * });
 *
 * const counter = new Counter(document.getElementById('counter'), { value: 1 });
 * counter.on('change', val => console.log(val));
 * counter.set('disabled', true);
 * counter.destroy();
 */

/* module
 * env: browser
 * since: 1.50.0
 */

/* typescript
 * export declare class Component extends Emitter {
 *     container: HTMLElement;
 *     $container: $.$;
 *     options: any;
 *     defaults?: any | (() => any);
 *     option?: types.PlainObj<string | ((val: any, oldVal: any) => void)>;
 *     events?: types.PlainObj<string | types.AnyFn>;
 *     constructor(container: Element, options?: any);
 *     set(name: string, val?: any): Component;
 *     set(options: types.PlainObj<any>): Component;
 *     get(name: string): any;
 *     html(): string;
 *     html(html: string): Component;
 *     find(selector: string): $.$;
 *     listen(type: string, handler: types.AnyFn): Component;
 *     listen(type: string, selector: string, handler: types.AnyFn): Component;
 *     destroy(): void;
 * }
 */

_('Emitter $ $event each extend bind isStr isFn isUndef types');

exports = Emitter.extend({
    className: 'Component',
    initialize(container, options = {}) {
        this.callSuper(Emitter, 'initialize');

        this.container = container;
        this.$container = $(container);
        this._listeners = [];

        this.options = extend({}, getDefaults(this), options);

        this._bindEvents();
    },
    set(name, val) {
        let newOptions = {};

        if (isStr(name)) {
            newOptions[name] = val;
        } else {
            newOptions = name;
        }

        each(newOptions, (val, name) => {
            const oldVal = this.options[name];
            this.options[name] = val;
            if (val === oldVal) {
                return;
            }
            this.emit('changeOption', name, val, oldVal);
            this._dispatchOption(name, val, oldVal);
        });

        return this;
    },
    get(name) {
        return this.options[name];
    },
    html(val) {
        if (isUndef(val)) {
            return this.$container.html();
        }

        this.$container.html(val);
        this._sync();

        return this;
    },
    find(selector) {
        return this.$container.find(selector);
    },
    listen(type, selector, handler) {
        if (isUndef(handler)) {
            handler = selector;
            selector = undefined;
        }

        $event.on(this.container, type, selector, handler);
        this._listeners.push({
            type,
            selector,
            handler
        });

        return this;
    },
    destroy() {
        each(this._listeners, listener => {
            const { type, selector, handler } = listener;
            $event.off(this.container, type, selector, handler);
        });
        this._listeners = [];

        this.$container.html('');
        this.emit('destroy');
        this.removeAllListeners();
    },
    _sync() {
        each(this.options, (val, name) => {
            this._dispatchOption(name, val, undefined);
        });
    },
    _bindEvents() {
        const events = this.events;
        if (!events) {
            return;
        }

        each(events, (handler, key) => {
            const match = key.match(/^(\S+)\s*(.*)$/);
            const type = match[1];
            const selector = match[2] || undefined;
            let fn = handler;

            if (isStr(fn)) {
                fn = this[fn];
            }
            if (!isFn(fn)) {
                return;
            }

            fn = bind(fn, this);

            if (selector) {
                this.listen(type, selector, fn);
            } else {
                this.listen(type, fn);
            }
        });
    },
    _dispatchOption(name, val, oldVal) {
        const handlers = this.option;
        if (!handlers) {
            return;
        }

        const handler = handlers[name];
        if (isStr(handler)) {
            this[handler](val, oldVal);
        } else if (isFn(handler)) {
            handler.call(this, val, oldVal);
        }
    }
});

function getDefaults(comp) {
    const defs = comp.defaults;
    if (isFn(defs)) {
        return defs.call(comp) || {};
    }

    return defs || {};
}
