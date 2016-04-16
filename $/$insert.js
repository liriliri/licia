_('each $safeNodes');

exports = {
    before: insertFactory('beforebegin'),
    after: insertFactory('afterend'),
    append: insertFactory('beforeend'),
    prepend: insertFactory('afterbegin')
};

function insertFactory(type)
{
    return function (nodes, val)
    {
        nodes = $safeNodes(nodes);

        each(nodes, function (node)
        {
            node.insertAdjacentHTML(type, val);
        });
    };
}