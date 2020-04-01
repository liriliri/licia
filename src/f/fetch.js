/* Turn XMLHttpRequest into promise like.
 *
 * Note: This is not a complete fetch pollyfill.
 *
 * |Name   |Desc           |
 * |-------|---------------|
 * |url    |Request url    |
 * |options|Request options|
 * |return |Request promise|
 */

/* example
 * fetch('test.json', {
 *     method: 'GET',
 *     timeout: 3000,
 *     headers: {},
 *     body: ''
 * })
 *     .then(function(res) {
 *         return res.json();
 *     })
 *     .then(function(data) {
 *         console.log(data);
 *     });
 */

/* module
 * env: browser
 * test: manual
 */

/* typescript
 * export declare namespace fetch {
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
 *         headers: {
 *             keys(): string[];
 *             entries(): Array<string[]>;
 *             get(name: string): string;
 *             has(name: string): boolean;
 *         };
 *     }
 * }
 * export declare function fetch(
 *     url: string,
 *     options?: {
 *         method?: string;
 *         timeout?: number;
 *         headers?: { [name: string]: string };
 *         body?: any;
 *     }
 * ): Promise<fetch.IResult>;
 */

_('Promise each defaults noop has');

exports = function(url, options) {
    options = options || {};

    defaults(options, exports.setting);

    return new Promise(function(resolve, reject) {
        const xhr = options.xhr();
        const headers = options.headers;
        const body = options.body;
        const timeout = options.timeout;
        let abortTimer;

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

const regHeaders = /^(.*?):\s*([\s\S]*?)$/gm;

function getRes(xhr) {
    const keys = [];
    const all = [];
    const headers = {};
    let header;

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
        clone() {
            return getRes(xhr);
        },
        text() {
            return Promise.resolve(xhr.responseText);
        },
        json() {
            return Promise.resolve(xhr.responseText).then(JSON.parse);
        },
        xml() {
            return Promise.resolve(xhr.responseXML);
        },
        blob() {
            return Promise.resolve(new Blob([xhr.response]));
        },
        headers: {
            keys() {
                return keys;
            },
            entries() {
                return all;
            },
            get(name) {
                return headers[name.toLowerCase()];
            },
            has(name) {
                return has(headers, name);
            }
        }
    };
}

exports.setting = {
    method: 'GET',
    headers: {},
    timeout: 0,
    xhr() {
        return new XMLHttpRequest();
    }
};
