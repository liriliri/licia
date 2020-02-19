/* Perform an asynchronous HTTP request.
 *
 * |Name   |Desc        |
 * |-------|------------|
 * |options|Ajax options|
 *
 * Available options:
 *
 * |Name                                         |Desc                       |
 * |---------------------------------------------|---------------------------|
 * |type=get                                     |Request type               |
 * |url                                          |Request url                |
 * |data                                         |Request data               |
 * |dataType=json                                |Response type(json, xml)   |
 * |contentType=application/x-www-form-urlencoded|Request header Content-Type|
 * |success                                      |Success callback           |
 * |error                                        |Error callback             |
 * |complete                                     |Callback after request     |
 * |timeout                                      |Request timeout            |
 *
 * ### get
 *
 * Shortcut for type = GET;
 *
 * ### post
 *
 * Shortcut for type = POST;
 *
 * |Name    |Desc            |
 * |--------|----------------|
 * |url     |Request url     |
 * |data    |Request data    |
 * |success |Success callback|
 * |dataType|Response type   |
 */

/* example
 * ajax({
 *     url: 'http://example.com',
 *     data: {test: 'true'},
 *     error() {},
 *     success(data) {
 *         // ...
 *     },
 *     dataType: 'json'
 * });
 *
 * ajax.get('http://example.com', {}, function (data) {
 *     // ...
 * });
 */

/* module
 * env: browser
 * test: manual
 */

/* typescript
 * export declare namespace ajax {
 *     function get(
 *         url: string,
 *         data: string | {},
 *         success: Function,
 *         dataType?: string
 *     ): XMLHttpRequest;
 *     function get(url: string, success: Function, dataType?: string): XMLHttpRequest;
 *     function post(
 *         url: string,
 *         data: string | {},
 *         success: Function,
 *         dataType?: string
 *     ): XMLHttpRequest;
 *     function post(url: string, success: Function, dataType?: string): XMLHttpRequest;
 * }
 * export declare function ajax(options: {
 *     type?: string;
 *     url: string;
 *     data?: string | {};
 *     dataType?: string;
 *     contentType?: string;
 *     success?: Function;
 *     error?: Function;
 *     complete?: Function;
 *     timeout?: number;
 * }): XMLHttpRequest;
 */

_('isFn noop defaults isObj query');

exports = function(options) {
    defaults(options, exports.setting);

    const type = options.type;
    let url = options.url;
    let data = options.data;
    const dataType = options.dataType;
    const success = options.success;
    const error = options.error;
    const timeout = options.timeout;
    const complete = options.complete;
    const xhr = options.xhr();
    let abortTimeout;

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;

        clearTimeout(abortTimeout);

        let result;

        const status = xhr.status;
        if ((status >= 200 && status < 300) || status === 304) {
            result = xhr.responseText;
            if (dataType === 'xml') result = xhr.responseXML;
            try {
                if (dataType === 'json') result = JSON.parse(result);
                /* eslint-disable no-empty */
            } catch (e) {}
            success(result, xhr);
        } else {
            error(xhr);
        }

        complete(xhr);
    };

    if (type === 'GET') {
        data = query.stringify(data);
        url += url.indexOf('?') > -1 ? '&' + data : '?' + data;
    } else if (options.contentType === 'application/x-www-form-urlencoded') {
        if (isObj(data)) data = query.stringify(data);
    } else if (options.contentType === 'application/json') {
        if (isObj(data)) data = JSON.stringify(data);
    }

    xhr.open(type, url, true);
    xhr.setRequestHeader('Content-Type', options.contentType);

    if (timeout > 0) {
        abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = noop;
            xhr.abort();
            error(xhr, 'timeout');
            complete(xhr);
        }, timeout);
    }
    xhr.send(type === 'GET' ? null : data);

    return xhr;
};

exports.setting = {
    type: 'GET',
    success: noop,
    error: noop,
    complete: noop,
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded',
    data: {},
    xhr() {
        return new XMLHttpRequest();
    },
    timeout: 0
};

exports.get = function() {
    return exports(parseArgs.apply(null, arguments));
};

exports.post = function() {
    const options = parseArgs.apply(null, arguments);
    options.type = 'POST';

    return exports(options);
};

function parseArgs(url, data, success, dataType) {
    if (isFn(data)) {
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
