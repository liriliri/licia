// TODO

_('map');

var requireMarks = _._requireMarks = _._requireMarks || {};

function _require(name)
{
    if (requireMarks.hasOwnProperty(name)) return _[name];

    var requires = _[name].requires,
        body     = _[name].body,
        len      = requires.length;

    for (var i = 0; i < len; i++) requires[i] = _require(requires[i]);

    requires.push(_);

    var exports = body.apply(_, requires);
    if (exports) _[name] = exports;

    requireMarks[name] = true;

    return _[name];
}

exports = function (requires, method)
{
    if (method == null)
    {
        method   = requires;
        requires = [];
    }

    requires = map(requires, function (val) { return _require(val) });

    method.apply(null, requires);
};