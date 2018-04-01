/* Perform an asynchronous HTTP request.
 *
 * |Name   |Type  |Desc        |
 * |-------|------|------------|
 * |options|object|Ajax options|
 *
 * Available options:
 *
 * |Name                                         |Type         |Desc                      |
 * |---------------------------------------------|-------------|---------------------------|
 * |url                                          |string       |Request url                |
 * |data                                         |string object|Request data               |
 * |dataType=json                                |string       |Response type(json, xml)   |
 * |contentType=application/x-www-form-urlencoded|string       |Request header Content-Type|
 * |success                                      |function     |Success callback           |
 * |error                                        |function     |Error callback             |
 * |complete                                     |function     |Callback after request     |
 * |timeout                                      |number       |Request timeout            |
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
 * |[data]  |string object|Request data    |
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

/* module
 * env: browser
 * test: manual
 */

_('isFn noop defaults isObj query');

function exports(options)
{
    defaults(options, exports.setting);

    var type = options.type,
        url = options.url,
        data = options.data,
        dataType = options.dataType,
        success = options.success,
        error = options.error,
        timeout = options.timeout,
        complete = options.complete,
        xhr = options.xhr(),
        abortTimeout;

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState !== 4) return;

        clearTimeout(abortTimeout);

        var result;

        var status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304)
        {
            result = xhr.responseText;
            if (dataType === 'xml') result = xhr.responseXML;
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
        data = query.stringify(data);
        url += url.indexOf('?') > -1 ? '&' + data : '?' + data;
    } else if (options.contentType === 'application/x-www-form-urlencoded')
    {
        if(isObj(data)) data = query.stringify(data);
    } else if (options.contentType === 'application/json') {
        if(isObj(data)) data = JSON.stringify(data);
    }

    xhr.open(type, url, true);
    xhr.setRequestHeader('Content-Type', options.contentType);

    if (timeout > 0)
    {
        abortTimeout = setTimeout(function ()
        {
            xhr.onreadystatechange = noop;
            xhr.abort();
            error(xhr, 'timeout');
            complete(xhr);
        }, timeout);
    }
    xhr.send(type === 'GET' ? null : data);

    return xhr;
}

exports.setting = {
    type: 'GET',
    success: noop,
    error: noop,
    complete: noop,
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded',
    data: {},
    xhr: function () { return new XMLHttpRequest() },
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
        dataType = success;
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
