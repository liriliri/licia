/* Perform an asynchronous HTTP request.
 *
 * |Name   |Type  |Desc        |
 * |-------|------|------------|
 * |options|object|Ajax options|
 *
 * Available options:
 *
 * |Name         |Type         |Desc                  |
 * |-------------|-------------|----------------------|
 * |url          |string       |Request url           |
 * |data         |string object|Request data          |
 * |dataType=json|string       |Response type         |
 * |success      |function     |Success callback      |
 * |error        |function     |Error callback        |
 * |complete     |function     |Callback after request|
 *
 * ### get
 *
 * Shortcut for type = GET;
 *
 * ### post
 *
 * Shortcut for type = POST;
 *
 * |Name    |Type         |Desc            |
 * |--------|-------------|----------------|
 * |url     |string       |Request url     |
 * |data    |string object|Request data    |
 * |success |function     |Success callback|
 * |dataType|function     |Response type   |
 *
 * ```javascript
 * ajax({
 *     url: 'http://example.com',
 *     data: {test: 'true'},
 *     error: function () {},
 *     success: function (data)
 *     {
 *         // ...
 *     },
 *     dataType: 'json'
 * });
 *
 * ajax.get('http://example.com', {}, function (data)
 * {
 *     // ...
 * });
 * ```
 */

_('isFn noop defaults each isObj');

function exports(options)
{
    defaults(options, exports.setting);

    var type = options.type,
        url = options.url,
        data = options.data,
        dataType = options.dataType,
        success = options.success,
        error = options.error,
        complete = options.complete,
        xhr = options.xhr();

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState !== 4) return;

        var result;

        var status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304)
        {
            result = xhr.responseText;
            try {
                if (dataType === 'json') result = JSON.parse(result);
            /* eslint-disable no-empty */
            } catch (e) {}
            success(result, xhr);
        } else
        {
            error(xhr);
        }

        complete(xhr);
    };

    if (type === 'GET')
    {
        data = serialize(data);
        url += url.indexOf('?') > -1 ? '&' + data : '?' + data;
    } else
    {
        if(isObj(data)) data = serialize(data);
    }

    xhr.open(type, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    type === 'GET' ? xhr.send() : xhr.send(data);

    return xhr;
}

exports.setting = {
    type: 'GET',
    success: noop,
    error: noop,
    complete: noop,
    dataType: 'json',
    data: {},
    xhr: function ()
    {
        return new window.XMLHttpRequest();
    },
    timeout: 0
};

exports.get = function ()
{
    return exports(parseArgs.apply(null, arguments));
};

exports.post = function ()
{
    var options = parseArgs.apply(null, arguments);
    options.type = 'POST';

    return exports(options);
};

function parseArgs(url, data, success, dataType)
{
    if (isFn(data))
    {
        success = data;
        data = {};
    }

    return {
        url: url,
        data: data,
        success: success,
        dataType: dataType
    };
}

function serialize(data)
{
    var ret = [];

    each(data, function (val, key)
    {
        ret.push(key + '=' + encodeURIComponent(val));
    });

    return ret.join('&');
}