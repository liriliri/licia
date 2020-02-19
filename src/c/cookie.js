/* Simple api for handling browser cookies.
 *
 * ### get
 *
 * Get cookie value.
 *
 * |Name  |Desc                      |
 * |------|--------------------------|
 * |key   |Cookie key                |
 * |return|Corresponding cookie value|
 *
 * ### set
 *
 * Set cookie value.
 *
 * |Name   |Desc          |
 * |-------|--------------|
 * |key    |Cookie key    |
 * |val    |Cookie value  |
 * |options|Cookie options|
 * |return |Module cookie |
 *
 * ### remove
 *
 * Remove cookie value.
 *
 * |Name   |Desc          |
 * |-------|--------------|
 * |key    |Cookie key    |
 * |options|Cookie options|
 * |return |Module cookie |
 */

/* example
 * cookie.set('a', '1', {path: '/'});
 * cookie.get('a'); // -> '1'
 * cookie.remove('a');
 */

/* module
 * env: browser
 */

/* typescript
 * export declare namespace cookie {
 *     interface IOptions {
 *         path?: string;
 *         expires?: number;
 *         domain?: string;
 *         secure?: boolean;
 *     }
 *     interface ICookie {
 *         get(key: string, options?: cookie.IOptions): string;
 *         set(key: string, val: string, options?: cookie.IOptions): ICookie;
 *         remove(key: string, options?: cookie.IOptions): ICookie;
 *     }
 * }
 * export declare const cookie: cookie.ICookie;
 */

_('defaults isNum isUndef decodeUriComponent');

const defOpts = { path: '/' };

function setCookie(key, val, options) {
    if (!isUndef(val)) {
        options = options || {};
        options = defaults(options, defOpts);

        if (isNum(options.expires)) {
            const expires = new Date();
            expires.setMilliseconds(
                expires.getMilliseconds() + options.expires * 864e5
            );
            options.expires = expires;
        }

        val = encodeURIComponent(val);
        key = encodeURIComponent(key);

        document.cookie = [
            key,
            '=',
            val,
            options.expires && '; expires=' + options.expires.toUTCString(),
            options.path && '; path=' + options.path,
            options.domain && '; domain=' + options.domain,
            options.secure ? '; secure' : ''
        ].join('');

        return exports;
    }

    const cookies = document.cookie ? document.cookie.split('; ') : [];
    let result = key ? undefined : {};

    for (let i = 0, len = cookies.length; i < len; i++) {
        let c = cookies[i];
        const parts = c.split('=');
        const name = decodeUriComponent(parts.shift());

        c = parts.join('=');
        c = decodeUriComponent(c);

        if (key === name) {
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
    remove(key, options) {
        options = options || {};
        options.expires = -1;

        return setCookie(key, '', options);
    }
};
