/* Turn XMLHttpRequest into promise like.
 * 
 * Note: This is not a complete fetch pollyfill.
 * 
 * |Name     |Type   |Desc           |
 * |---------|-------|---------------|
 * |url      |string |Request url    |
 * |[options]|object |Request options|
 * |return   |Promise|Request promise|
 */

/* example
 * fetch('test.json', {
 *     method: 'GET',
 *     timeout: 3000,
 *     headers: {},
 *     body: ''
 * }).then(function (res) {
 *     return res.json();
 * }).then(function (data) {
 *     console.log(data);   
 * });
 */

/* module
 * env: browser
 * test: manual
 */

/* typescript
 * declare namespace fetch {
 *     interface IOptions {
 *         method?: string;
 *         timeout?: number;
 *         headers?: { [name: string]: string };
 *         body?: any;
 *     }
 *     interface IHeader {
 *         keys(): string[]; 
 *         entries(): Array<string[]>;
 *         get(name: string): string;
 *         has(name: string): boolean;
 *     }
 *     interface IResult {
 *         ok: boolean;
 *         status: number;
 *         statusText: string;
 *         url: string;
 *         clone(): IResult;
 *         text(): Promise<string>;
 *         json(): Promise<any>;
 *         xml(): Promise<Document | null>;
 *         blob(): Promise<Blob>;
 *         headers: IHeaders;
 *     }
 * }
 * export declare function fetch(
 *     url: string, 
 *     options?: fetch.IOptions
 * ): Promise<fetch.IResult>;
 */

_('Promise each defaults noop');

exports = function(url, options) {
    options = options || {};

    defaults(options, exports.setting);

    return new Promise(function(resolve, reject) {
        var xhr = options.xhr(),
            headers = options.headers,
            body = options.body,
            timeout = options.timeout,
            abortTimer;

        xhr.withCredentials = options.credentials == 'include';

        xhr.onload = function() {
            clearTimeout(abortTimer);
            resolve(getRes(xhr));
        };

        xhr.onerror = reject;

        xhr.open(options.method, url, true);

        each(headers, function(val, key) {
            xhr.setRequestHeader(key, val);
        });

        if (timeout > 0) {
            setTimeout(function() {
                xhr.onload = noop;
                xhr.abort();
                reject(Error('timeout'));
            }, timeout);
        }

        xhr.send(body);
    });
};

var regHeaders = /^(.*?):\s*([\s\S]*?)$/gm;

function getRes(xhr) {
    var keys = [],
        all = [],
        headers = {},
        header;

    xhr.getAllResponseHeaders().replace(regHeaders, function(m, key, val) {
        key = key.toLowerCase();
        keys.push(key);
        // Duplicated headers is possible.
        all.push([key, val]);
        header = headers[key];
        headers[key] = header ? header + ',' + val : val;
    });

    return {
        ok: xhr.status >= 200 && xhr.status < 400,
        status: xhr.status,
        statusText: xhr.statusText,
        url: xhr.responseURL,
        clone: function() {
            return getRes(xhr);
        },
        text: function() {
            return Promise.resolve(xhr.responseText);
        },
        json: function() {
            return Promise.resolve(xhr.responseText).then(JSON.parse);
        },
        xml: function() {
            return Promise.resolve(xhr.responseXML);
        },
        blob: function() {
            return Promise.resolve(new Blob([xhr.response]));
        },
        headers: {
            keys: function() {
                return keys;
            },
            entries: function() {
                return all;
            },
            get: function(name) {
                return headers[name.toLowerCase()];
            },
            has: function(name) {
                return has(headers, name);
            }
        }
    };
}

exports.setting = {
    method: 'GET',
    headers: {},
    timeout: 0,
    xhr: function() {
        return new XMLHttpRequest();
    }
};
