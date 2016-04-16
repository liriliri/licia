_('invert keys');

var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
};

var unescapeMap = invert(escapeMap);

exports = function (type)
{
    var map = escapeMap;

    if (type === 1) map = unescapeMap;

    var escaper = function (match) { return map[match] };

    var source        = '(?:' + keys(map).join('|') + ')',
        testRegexp    = new RegExp(source),
        replaceRegexp = new RegExp(source, 'g');

    return function(str)
    {
        str = str == null ? '' : '' + str;

        return testRegexp.test(str) ? str.replace(replaceRegexp, escaper) : str;
    };
};