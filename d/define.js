/* TODO
 */

var requireMarks = _._requireMarks = _._requireMarks || {};

function _define(name, requires, method)
{
    _[name] = {
        requires: requires,
        body    : method
    };

    delete requireMarks[name];
}

exports = function (name, requires, method)
{
    if (arguments.length === 2)
    {
        method   = requires;
        requires = [];
    }

    _define(name, requires, method);
};