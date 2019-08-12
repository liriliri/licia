/* jQuery like style dom manipulator.
 *
 * ### Available methods
 *
 * offset, hide, show, first, last, get, eq, on, off, html, text, val, css, attr,
 * data, rmAttr, remove, addClass, rmClass, toggleClass, hasClass, append, prepend,
 * before, after
 */

/* example
 * var $btn = $('#btn');
 * $btn.html('eustia');
 * $btn.addClass('btn');
 * $btn.show();
 * $btn.on('click', function () {
 *     // Do something...
 * });
 */

/* module
 * env: browser
 * test: browser
 */

/* typescript
 * export declare namespace $ {
 *     class $ extends Select {
 *         find(selector: string): $;
 *         each(fn: Function): $;
 *         offset(): $offset.IOffset;
 *         hide(): $;
 *         show(): $;
 *         first(): $;
 *         last(): $;
 *         get(index: number): Element;
 *         eq(index: number): Element;
 *         on(event: string, selector: string, handler: Function): $;
 *         on(event: string, handler: Function): $;
 *         off(event: string, selector: string, handler: Function): $;
 *         off(event: string, handler: Function): $;
 *         html(): string;
 *         html(value: string): $;
 *         text(): string;
 *         text(value: string): $;
 *         val(): string;
 *         val(value: string): $;
 *         css(name: string): string;
 *         css(name: string, value: string): $;
 *         css(properties: { [name: string]: string }): $;
 *         attr(name: string): string;
 *         attr(name: string, value: string): $;
 *         attr(attributes: { [name: string]: string }): $;
 *         data(name: string): string;
 *         data(name: string, value: string): $;
 *         data(attributes: { [name: string]: string }): $;
 *         rmAttr(name: string): $;
 *         remove(): $;
 *         addClass(name: string | string[]): $;
 *         rmClass(name: string): $;
 *         toggleClass(name: string): $;
 *         hasClass(name: string): boolean;
 *         parent(): $;
 *         append(content: string): $;
 *         prepend(content: string): $;
 *         before(content: string): $;
 *         after(content: string): $;
 *     }
 * }
 * declare function $(selector: string | Element): $.$;
 */

_(
    'Select $offset $show $css $attr $property last $remove $data $event $class $insert isUndef isStr'
);

exports = function(selector) {
    return new Select(selector);
};

Select.methods({
    offset: function() {
        return $offset(this);
    },
    hide: function() {
        return this.css('display', 'none');
    },
    show: function() {
        $show(this);

        return this;
    },
    first: function() {
        return exports(this[0]);
    },
    last: function() {
        return exports(last(this));
    },
    get: function(idx) {
        return this[idx];
    },
    eq: function(idx) {
        return exports(this[idx]);
    },
    on: function(event, selector, handler) {
        $event.on(this, event, selector, handler);

        return this;
    },
    off: function(event, selector, handler) {
        $event.off(this, event, selector, handler);

        return this;
    },
    html: function(val) {
        var result = $property.html(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    text: function(val) {
        var result = $property.text(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    val: function(val) {
        var result = $property.val(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    css: function(name, val) {
        var result = $css(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    attr: function(name, val) {
        var result = $attr(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    data: function(name, val) {
        var result = $data(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    rmAttr: function(name) {
        $attr.remove(this, name);

        return this;
    },
    remove: function() {
        $remove(this);

        return this;
    },
    addClass: function(name) {
        $class.add(this, name);

        return this;
    },
    rmClass: function(name) {
        $class.remove(this, name);

        return this;
    },
    toggleClass: function(name) {
        $class.toggle(this, name);

        return this;
    },
    hasClass: function(name) {
        return $class.has(this, name);
    },
    parent: function() {
        return exports(this[0].parentNode);
    },
    append: function(val) {
        $insert.append(this, val);

        return this;
    },
    prepend: function(val) {
        $insert.prepend(this, val);

        return this;
    },
    before: function(val) {
        $insert.before(this, val);

        return this;
    },
    after: function(val) {
        $insert.after(this, val);

        return this;
    }
});

function isGetter(name, val) {
    return isUndef(val) && isStr(name);
}
