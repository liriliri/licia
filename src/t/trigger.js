/* Trigger browser events.
 *
 * |Name         |Type   |Desc              |
 * |-------------|-------|------------------|
 * |[el=document]|element|Element to trigger|
 * |type         |string |Event type        |
 * |options      |object |Options           |
 */

/* example
 * trigger(document.getElementById('#test'), 'mouseup');
 * trigger('keydown', {keyCode: 65});
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare function trigger(el: Element, type: string, options?: any);
 * export declare function trigger(type: string, options?: any);
 */

_('isStr defaults extend');

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
exports = function(el, type, opts) {
    if (isStr(el)) {
        opts = type;
        type = el;
        el = document;
    }

    opts = opts || {};
    defaults(opts, defOpts);

    const event = document.createEvent('Event');
    event.initEvent(type, opts.bubbles, opts.cancelable);
    delete opts.bubbles;
    delete opts.cancelable;
    extend(event, opts);

    el.dispatchEvent(event);
};

const defOpts = {
    bubbles: true,
    cancelable: true
};
