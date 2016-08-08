/* Perform an asynchronous HTTP request. TODO
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
 * ```
 */

_('isFn noop defaults');

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
            } catch (e) {}
            success(result, xhr);
        } else
        {
            error(xhr.statusText || null, xhr);
        }

        complete();
    };

    xhr.open(type, url, true);
    xhr.send();

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

exports.getJSON = function ()
{
    var options = parseArgs.apply(null, arguments);
    options.dataType = 'json';

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
    }
}