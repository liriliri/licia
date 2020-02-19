/* Element class manipulations.
 *
 * ### add
 *
 * Add the specified class(es) to each element in the set of matched elements.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |names  |Classes to add        |
 *
 * ### has
 *
 * Determine whether any of the matched elements are assigned the given class.
 *
 * |Name   |Desc                                 |
 * |-------|-------------------------------------|
 * |element|Elements to manipulate               |
 * |name   |Class name                           |
 * |return |True if elements has given class name|
 *
 * ### toggle
 *
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |name   |Class name to toggle  |
 *
 * ### remove
 *
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 *
 * |Name   |Desc                  |
 * |-------|----------------------|
 * |element|Elements to manipulate|
 * |name   |Class names to remove |
 */

/* example
 * $class.add('#test', 'class1');
 * $class.add('#test', ['class1', 'class2']);
 * $class.has('#test', 'class1'); // -> true
 * $class.remove('#test', 'class1');
 * $class.has('#test', 'class1'); // -> false
 * $class.toggle('#test', 'class1');
 * $class.has('#test', 'class1'); // -> true
 */

/* module
 * env: browser
 */

/* typescript
 * export declare const $class: {
 *     add(element: $safeEls.El, name: string | string[]): void;
 *     has(element: $safeEls.El, name: string): boolean;
 *     toggle(element: $safeEls.El, name: string): void;
 *     remove(element: $safeEls.El, name: string): void;
 * };
 */

_('toArr some $safeEls isStr each');

exports = {
    add(els, name) {
        els = $safeEls(els);
        const names = safeName(name);

        each(els, function(el) {
            const classList = [];

            each(names, function(name) {
                if (!exports.has(el, name)) classList.push(name);
            });

            if (classList.length !== 0) {
                el.className += (el.className ? ' ' : '') + classList.join(' ');
            }
        });
    },
    has(els, name) {
        els = $safeEls(els);

        const regName = new RegExp('(^|\\s)' + name + '(\\s|$)');

        return some(els, function(el) {
            return regName.test(el.className);
        });
    },
    toggle(els, name) {
        els = $safeEls(els);

        each(els, function(el) {
            if (!exports.has(el, name)) return exports.add(el, name);

            exports.remove(el, name);
        });
    },
    remove(els, name) {
        els = $safeEls(els);
        const names = safeName(name);

        each(els, function(el) {
            each(names, function(name) {
                el.classList.remove(name);
            });
        });
    }
};

function safeName(name) {
    return isStr(name) ? name.split(/\s+/) : toArr(name);
}
