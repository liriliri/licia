/* A simple jsonp implementation.
 *
 * |Name|Desc         |
 * |----|-------------|
 * |opts|Jsonp Options|
 *
 * Available options:
 *
 * |Name          |Desc                  |
 * |--------------|----------------------|
 * |url           |Request url           |
 * |data          |Request data          |
 * |success       |Success callback      |
 * |param=callback|Callback param        |
 * |name          |Callback name         |
 * |error         |Error callback        |
 * |complete      |Callback after request|
 * |timeout       |Request timeout       |
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
 */

/* typescript
 * export declare namespace jsonp {
 *     interface IOptions {
 *         url: string;
 *         data?: any;
 *         success?: Function;
 *         param?: string;
 *         name?: string;
 *         error?: Function;
 *         complete?: Function;
 *         timeout?: number;
 *     }
 * }
 * export declare function jsonp(opts: jsonp.IOptions): void;
 */

_('loadJs defaults noop uniqId query');

exports = function(opts) {
    defaults(opts, exports.settings);

    const name = opts.name || uniqId('jsonp');
    const param = opts.param;
    const timeout = opts.timeout;
    const error = opts.error;
    const success = opts.success;
    const complete = opts.complete;
    let data = opts.data;
    let url = opts.url;
    let timer;
    let isTimeout = false;

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
