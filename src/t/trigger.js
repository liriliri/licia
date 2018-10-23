/* Trigger browser events.
 *
 * |Name         |Type   |Desc              |
 * |-------------|-------|------------------|
 * |[el=document]|element|Element to trigger|
 * |type         |string |Event type        |
 * |opts         |object |Options           |
 */

/* example
 * trigger(el, 'mouseup');
 * trigger('keydown', {keyCode: 65});
 */

/* module
 * env: browser
 * test: browser
 */

_('isStr defaults extend');

// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
function exports(el, type, opts) {
    if (isStr(el)) {
        opts = type;
        type = el;
        el = document;
    }

    opts = opts || {};
    defaults(opts, defOpts);

    var event = document.createEvent('Event');
    event.initEvent(type, opts.bubbles, opts.cancelable);
    delete opts.bubbles;
    delete opts.cancelable;
    extend(event, opts);

    el.dispatchEvent(event);
}

var defOpts = {
    bubbles: true,
    cancelable: true
};
