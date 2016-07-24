/* Simple api for handling browser cookies.
 *
 * ### get
 *
 * Get cookie value.
 *
 * |Name  |Type  |Desc                      |
 * |------|------|--------------------------|
 * |key   |string|Cookie key                |
 * |return|string|Corresponding cookie value|
 *
 * ### set
 *
 * Set cookie value.
 *
 * |Name     |Type   |Desc          |
 * |---------|-------|--------------|
 * |key      |string |Cookie key    |
 * |val      |string |Cookie value  |
 * |[options]|object |Cookie options|
 * |return   |exports|Module cookie |
 *
 * ### remove
 *
 * Remove cookie value.
 *
 * |Name     |Type   |Desc          |
 * |---------|-------|--------------|
 * |key      |string |Cookie key    |
 * |[options]|object |Cookie options|
 * |return   |exports|Module cookie |
 *
 * ```javascript
 * cookie.set('a', '1', {path: '/'});
 * cookie.get('a'); // -> '1'
 * cookie.remove('a');
 * ```
 */

_('defaults isNum isUndef');

var defOpts = { path: '/' };

function setCookie(key, val, options)
{
    if (!isUndef(val))
    {
        options = options || {};
        options = defaults(options, defOpts);

        if (isNum(options.expires))
        {
            var expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + options.expires * 864e+5);
            options.expires = expires;
        }

        val = encodeURIComponent(val);
        key = encodeURIComponent(key);

        document.cookie = [
            key, '=', val,
            options.expires && '; expires=' + options.expires.toUTCString(),
            options.path && '; path=' + options.path,
            options.domain  && '; domain=' + options.domain,
            options.secure ? '; secure' : ''
        ].join('');

        return exports;
    }

    var cookies = document.cookie ? document.cookie.split('; ') : [],
        result = key ? undefined : {};

    for (var i = 0, len = cookies.length; i < len; i++)
    {
        var c = cookies[i],
            parts = c.split('='),
            name = decodeURIComponent(parts.shift());

        c = parts.join('=');
        c = decodeURIComponent(c);

        if (key === name)
        {
            result = c;
            break;
        }

        if (!key) result[name] = c;
    }

    return result;
}

exports = {
    get: setCookie,
    set: setCookie,
    remove: function (key, options)
    {
        options = options || {};
        options.expires = -1;

        return setCookie(key, '', options);
    }
};