/* Parse and stringify url query strings.
 *
 * ### parse
 *
 * Parse a query string into an object.
 *
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |str   |string|Query string|
 * |return|object|Query object|
 *
 * ### stringify
 *
 * Stringify an object into a query string.
 *
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |obj   |object|Query object|
 * |return|string|Query string|
 */

/* example
 * query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
 * query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
 * query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare const query: {
 *     parse(str: string): any;
 *     stringify(object: any): string;
 * };
 */

_('trim each isUndef isArr map isEmpty filter isObj');

exports = {
    parse: function(str) {
        const ret = {};

        str = trim(str).replace(regIllegalChars, '');

        each(str.split('&'), function(param) {
            const parts = param.split('=');

            let key = parts.shift(),
                val = parts.length > 0 ? parts.join('=') : null;

            key = decodeURIComponent(key);
            val = decodeURIComponent(val);

            if (isUndef(ret[key])) {
                ret[key] = val;
            } else if (isArr(ret[key])) {
                ret[key].push(val);
            } else {
                ret[key] = [ret[key], val];
            }
        });

        return ret;
    },
    stringify: function(obj, arrKey) {
        return filter(
            map(obj, function(val, key) {
                if (isObj(val) && isEmpty(val)) return '';
                if (isArr(val)) return exports.stringify(val, key);

                return (
                    (arrKey
                        ? encodeURIComponent(arrKey)
                        : encodeURIComponent(key)) +
                    '=' +
                    encodeURIComponent(val)
                );
            }),
            function(str) {
                return str.length > 0;
            }
        ).join('&');
    }
};

const regIllegalChars = /^(\?|#|&)/g;
