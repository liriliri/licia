/* A simple jsonp implementation.
 *
 * |Name|Type  |Desc         |
 * |----|------|-------------|
 * |opts|object|Jsonp Options|
 * 
 * Available options:
 * 
 * |Name          |Type    |Desc                  |
 * |--------------|--------|----------------------|
 * |url           |string  |Request url           |
 * |data          |object  |Request data          |
 * |success       |function|Success callback      |
 * |param=callback|string  |Callback param        |
 * |[name]        |string  |Callback name         |
 * |error         |function|Error callback        |
 * |complete      |function|Callback after request|
 * |timeout       |number  |Request timeout       |
 */

/* example
 * jsonp({
 *     url: 'http://example.com',
 *     data: {test: 'true'},
 *     success: function (data) {
 *         // ...
 *     }
 * });
 */

/* module
 * env: browser
 * test: browser
 */

_('loadJs defaults noop uniqId query');

exports = function(opts) {
    defaults(opts, exports.settings);

    var name = opts.name || uniqId('jsonp'),
        param = opts.param,
        timeout = opts.timeout,
        error = opts.error,
        success = opts.success,
        complete = opts.complete,
        data = opts.data,
        url = opts.url,
        timer,
        isTimeout = false;

    if (timeout > 0) {
        timer = setTimeout(function() {
            isTimeout = true;
            error(new Error('Timeout'));
            complete();
        }, timeout);
    }

    window[name] = function(data) {
        success(data);
        complete();
        window[name] = noop;
    };

    data[param] = name;
    data = query.stringify(data);
    url += url.indexOf('?') > -1 ? '&' + data : '?' + data;

    loadJs(url, function(isLoaded) {
        if (isTimeout) return;
        if (timer) clearTimeout(timer);
        if (!isLoaded) {
            error(new Error());
            complete();
        }
    });
};

exports.settings = {
    data: {},
    param: 'callback',
    success: noop,
    error: noop,
    complete: noop,
    timeout: 0
};
