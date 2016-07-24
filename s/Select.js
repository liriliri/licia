/* Simple wrapper of querySelectorAll to make dom selection easier.
 *
 * ### Constructor
 *
 * |Name    |Type  |Desc               |
 * |--------|------|-------------------|
 * |selector|string|Dom selector string|
 *
 * ```javascript
 * var test = new Select('#test');
 * ```
 */

_('Class isStr each');

function mergeArr(first, second)
{
    var len = second.length,
        i = first.length;

    for (var j = 0; j < len; j++) first[i++] = second[j];

    first.length = i;

    return first;
}

exports = Class({
    className: 'Select',
    initialize: function (selector)
    {
        this.length = 0;

        if (!selector) return this;

        if (isStr(selector)) return rootSelect.find(selector);

        if (selector.nodeType)
        {
            this[0] = selector;
            this.length = 1;
        }
    },
    find: function (selector)
    {
        var ret = new Select;

        this.each(function ()
        {
            mergeArr(ret, this.querySelectorAll(selector));
        });

        return ret;
    },
    each: function (fn)
    {
        each(this, function (element, idx)
        {
            fn.call(element, idx, element);
        });

        return this;
    }
});

var rootSelect = new exports(document);
