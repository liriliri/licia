/* Element class manipulations.
 *
 * ### add: Add the specified class(es) to each element in the set of matched elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |names  |string array        |Classes to add        |
 *
 * ### has: Determine whether any of the matched elements are assigned the given
 * class.
 *
 * |Name   |Type                |Desc                                 |
 * |-------|--------------------|-------------------------------------|
 * |element|string array element|Elements to manipulate               |
 * |name   |string              |Class name                           |
 * |return |boolean             |True if elements has given class name|
 *
 * ### toggle: Add or remove one or more classes from each element in the set of
 * matched elements, depending on either the class's presence or the value of
 * the state argument.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |name   |string              |Class name to toggle  |
 *
 * ### remove: Remove a single class, multiple classes, or all classes from each
 * element in the set of matched elements.
 *
 * |Name   |Type                |Desc                  |
 * |-------|--------------------|----------------------|
 * |element|string array element|Elements to manipulate|
 * |names  |string              |Class names to remove |
 *
 * ```javascript
 * $class.add('#test', 'class1');
 * $class.add('#test', ['class1', 'class2']);
 * $class.has('#test', 'class1'); // -> true
 * $class.remove('#test', 'class1');
 * $class.has('#test', 'class1'); // -> false
 * $class.toggle('#test', 'class1');
 * $class.has('#test', 'class1'); // -> true
 * ```
 */

_('toArr some $safeEls');

exports = {
    add: function (els, name)
    {
        els = $safeEls(els);
        var names = toArr(name);

        each(els, function (el)
        {
            var classList = [];

            each(names, function (name)
            {
                if (!exports.has(el, name)) classList.push(name);
            });

            if (classList.length !== 0) el.className += ' ' + classList.join(' ');
        });
    },
    has: function (els, name)
    {
        els = $safeEls(els);

        var regName = new RegExp('(^|\\s)' + name + '(\\s|$)');

        return some(els, function (el)
        {
            return regName.test(el.className);
        });
    },
    toggle: function (els, name)
    {
        els = $safeEls(els);

        each(els, function (el)
        {
            if (!exports.has(el, name)) return exports.add(el, name);

            exports.remove(el, name);
        });
    },
    remove: function (els, name)
    {
        els = $safeEls(els);
        var names = toArr(name);

        each(els, function (el)
        {
            each(names, function (name)
            {
                el.classList.remove(name);
            });
        });
    }
};