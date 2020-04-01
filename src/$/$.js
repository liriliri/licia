/* jQuery like style dom manipulator.
 *
 * ### Available methods
 *
 * offset, hide, show, first, last, get, eq, on, off, html, text, val, css, attr,
 * data, rmAttr, remove, addClass, rmClass, toggleClass, hasClass, append, prepend,
 * before, after
 */

/* example
 * const $btn = $('#btn');
 * $btn.html('eustia');
 * $btn.addClass('btn');
 * $btn.show();
 * $btn.on('click', function() {
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
 *         each(fn: types.AnyFn): $;
 *         offset(): $offset.IOffset;
 *         hide(): $;
 *         show(): $;
 *         first(): $;
 *         last(): $;
 *         get(index: number): Element;
 *         eq(index: number): $;
 *         on(event: string, selector: string, handler: types.AnyFn): $;
 *         on(event: string, handler: types.AnyFn): $;
 *         off(event: string, selector: string, handler: types.AnyFn): $;
 *         off(event: string, handler: types.AnyFn): $;
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
    'Select $offset $show $css $attr $property last $remove $data $event $class $insert isUndef isStr types'
);

exports = selector => new Select(selector);

Select.methods({
    offset() {
        return $offset(this);
    },
    hide() {
        return this.css('display', 'none');
    },
    show() {
        $show(this);

        return this;
    },
    first() {
        return exports(this[0]);
    },
    last() {
        return exports(last(this));
    },
    get(idx) {
        return this[idx];
    },
    eq(idx) {
        return exports(this[idx]);
    },
    on(event, selector, handler) {
        $event.on(this, event, selector, handler);

        return this;
    },
    off(event, selector, handler) {
        $event.off(this, event, selector, handler);

        return this;
    },
    html(val) {
        const result = $property.html(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    text(val) {
        const result = $property.text(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    val(val) {
        const result = $property.val(this, val);

        if (isUndef(val)) return result;

        return this;
    },
    css(name, val) {
        const result = $css(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    attr(name, val) {
        const result = $attr(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    data(name, val) {
        const result = $data(this, name, val);

        if (isGetter(name, val)) return result;

        return this;
    },
    rmAttr(name) {
        $attr.remove(this, name);

        return this;
    },
    remove() {
        $remove(this);

        return this;
    },
    addClass(name) {
        $class.add(this, name);

        return this;
    },
    rmClass(name) {
        $class.remove(this, name);

        return this;
    },
    toggleClass(name) {
        $class.toggle(this, name);

        return this;
    },
    hasClass(name) {
        return $class.has(this, name);
    },
    parent() {
        return exports(this[0].parentNode);
    },
    append(val) {
        $insert.append(this, val);

        return this;
    },
    prepend(val) {
        $insert.prepend(this, val);

        return this;
    },
    before(val) {
        $insert.before(this, val);

        return this;
    },
    after(val) {
        $insert.after(this, val);

        return this;
    }
});

const isGetter = (name, val) => isUndef(val) && isStr(name);
