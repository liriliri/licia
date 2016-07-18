/* Class manipulation.
 *
 * ```javascript
 * $class.add('#test', 'class1');
 * $class.has('#test', 'class1'); // -> true
 * $class.remove('#test', 'class1');
 * $class.has('#test', 'class1'); // -> false
 * $class.toggle('#test', 'class1');
 * $class.has('#test', 'class1'); // -> true
 * ```
 */

_('toArr some $safeNodes');

exports = {
    add: function (nodes, name)
    {
        nodes = $safeNodes(nodes);
        var names = toArr(name);

        each(nodes, function (node)
        {
            var classList = [];

            each(names, function (name)
            {
                if (!exports.has(node, name)) classList.push(name);
            });

            if (classList.length !== 0) node.className += ' ' + classList.join(' ');
        });
    },
    has: function (nodes, name)
    {
        nodes = $safeNodes(nodes);

        var regName = new RegExp('(^|\\s)' + name + '(\\s|$)');

        return some(nodes, function (node)
        {
            return regName.test(node.className);
        });
    },
    toggle: function (nodes, name)
    {
        nodes = $safeNodes(nodes);

        each(nodes, function (node)
        {
            if (!exports.has(node, name)) return exports.add(node, name);

            exports.remove(node, name);
        });
    },
    remove: function (nodes, name)
    {
        nodes = $safeNodes(nodes);
        var names = toArr(name);

        each(nodes, function (node)
        {
            each(names, function (name)
            {
                node.classList.remove(name);
            });
        });
    }
};