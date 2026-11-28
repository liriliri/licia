/* Imperative UI component base class, inspired by Backbone.View.
 *
 * Extend from Emitter. Manages options and declarative DOM events. Does not
 * take ownership of rendering — subclasses build and update the DOM
 * themselves.
 *
 * Call `setup()` in the subclass constructor to declare `defaults`, `option`
 * and `events`. `setHtml()` applies `option` handlers after updating the DOM.
 *
 * ### constructor
 *
 * |Name     |Desc               |
 * |---------|-------------------|
 * |container|Element to mount on|
 *
 * ### setup
 *
 * Configure defaults, option handlers and DOM events, then apply options.
 *
 * |Name   |Desc                             |
 * |-------|---------------------------------|
 * |config |`defaults`, `option` and `events`|
 * |options|Component options                |
 * |return |This                             |
 *
 * #### defaults
 *
 * Default option values. Can also be a function returning an object.
 *
 * #### option
 *
 * Map of option change handlers. Keys are option names; values are functions
 * `(val, oldVal)`.
 *
 * #### events
 *
 * DOM events hash: `'click .inc': this.inc`. Handlers are used as-is; bind
 * `this` yourself (e.g. class field arrows).
 *
 * ### setOption
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
 * ### getOption
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |name  |Option name        |
 * |return|Value of the option|
 *
 * ### setHtml
 *
 * Set container HTML. Runs all `option` handlers.
 *
 * |Name|Desc        |
 * |----|------------|
 * |html|Html string |
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
 * Triggered when an option value changes via `setOption`.
 *
 * #### destroy
 *
 * Triggered when component is destroyed.
 */

/* example
 * class Badge extends Component {
 *     constructor(container, options) {
 *         super(container);
 *         this.setup(
 *             {
 *                 defaults: { count: 0 },
 *                 option: {
 *                     count: this.onCount
 *                 }
 *             },
 *             options
 *         );
 *         this.setHtml('<span class="count"></span>');
 *     }
 *     onCount = val => {
 *         this.find('.count').text(String(val));
 *     };
 * }
 *
 * class Counter extends Component {
 *     constructor(container, options) {
 *         super(container);
 *         this.setup(
 *             {
 *                 defaults: { value: 0, disabled: false },
 *                 option: {
 *                     value: this.onValue,
 *                     disabled: this.onDisabled
 *                 },
 *                 events: {
 *                     'click .inc': this.inc,
 *                     'click .dec': this.dec
 *                 }
 *             },
 *             options
 *         );
 *         this.setHtml(
 *             '<button class="dec">-</button>' +
 *                 '<span class="val"></span>' +
 *                 '<button class="inc">+</button>' +
 *                 '<span class="badge"></span>'
 *         );
 *         // @ts-ignore
 *         this._badge = new Badge(this.find('.badge').get(0), {
 *             count: this.getOption('value')
 *         });
 *     }
 *     onValue = val => {
 *         this.find('.val').text(String(val));
 *         // @ts-ignore
 *         if (this._badge) this._badge.setOption('count', val);
 *     };
 *     onDisabled = val => {
 *         this.$container[val ? 'addClass' : 'rmClass']('disabled');
 *     };
 *     inc = () => {
 *         if (this.getOption('disabled')) return;
 *         this.setOption('value', this.getOption('value') + 1);
 *     };
 *     dec = () => {
 *         if (this.getOption('disabled')) return;
 *         this.setOption('value', this.getOption('value') - 1);
 *     };
 *     destroy() {
 *         // @ts-ignore
 *         this._badge.destroy();
 *         super.destroy();
 *     }
 * }
 *
 * const counter = new Counter(document.getElementById('counter'), { value: 1 });
 * counter.on('changeOption', (name, val) => console.log(name, val));
 * counter.setOption('disabled', true);
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
 *     constructor(container: Element);
 *     setup(
 *         config?: {
 *             defaults?: any | (() => any);
 *             option?: types.PlainObj<(val: any, oldVal?: any) => void>;
 *             events?: types.PlainObj<types.AnyFn>;
 *         },
 *         options?: any
 *     ): Component;
 *     setOption(name: string, val?: any): Component;
 *     setOption(options: types.PlainObj<any>): Component;
 *     getOption(name: string): any;
 *     setHtml(html: string): Component;
 *     find(selector: string): $.$;
 *     listen(type: string, handler: types.AnyFn): Component;
 *     listen(type: string, selector: string, handler: types.AnyFn): Component;
 *     destroy(): void;
 * }
 */

_('Emitter $ $event each extend isStr isFn isUndef types');

exports = Emitter.extend({
    className: 'Component',
    initialize(container) {
        this.callSuper(Emitter, 'initialize');

        this.container = container;
        this.$container = $(container);
        this._listeners = [];
        this.options = {};
    },
    setup(config = {}, options = {}) {
        const { defaults, option, events } = config;

        this.option = option;
        this.options = extend({}, getDefaults(defaults, this), options);
        this._bindEvents(events);

        return this;
    },
    setOption(name, val) {
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
    getOption(name) {
        return this.options[name];
    },
    setHtml(val) {
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
    _bindEvents(events) {
        if (!events) {
            return;
        }

        each(events, (handler, key) => {
            if (!isFn(handler)) {
                return;
            }

            const match = key.match(/^(\S+)\s*(.*)$/);
            const type = match[1];
            const selector = match[2] || undefined;

            if (selector) {
                this.listen(type, selector, handler);
            } else {
                this.listen(type, handler);
            }
        });
    },
    _dispatchOption(name, val, oldVal) {
        const handlers = this.option;
        if (!handlers) {
            return;
        }

        const handler = handlers[name];
        if (isFn(handler)) {
            handler(val, oldVal);
        }
    }
});

function getDefaults(defaults, comp) {
    if (isFn(defaults)) {
        return defaults.call(comp) || {};
    }

    return defaults || {};
}
