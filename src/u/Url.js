/* Simple url manipulator.
 *
 * ### constructor
 *
 * |Name        |Desc      |
 * |------------|----------|
 * |url=location|Url string|
 *
 * ### setQuery
 *
 * Set query value.
 *
 * |Name  |Desc       |
 * |------|-----------|
 * |name  |Query name |
 * |val   |Query value|
 * |return|this       |
 *
 * |Name  |Desc        |
 * |------|------------|
 * |query |query object|
 * |return|this        |
 *
 * ### rmQuery
 *
 * Remove query value.
 *
 * |Name  |Desc      |
 * |------|----------|
 * |name  |Query name|
 * |return|this      |
 *
 * ### parse
 *
 * [static] Parse url into an object.
 *
 * |Name  |Desc      |
 * |------|----------|
 * |url   |Url string|
 * |return|Url object|
 *
 * ### stringify
 *
 * [static] Stringify url object into a string.
 *
 * |Name  |Desc      |
 * |------|----------|
 * |url   |Url object|
 * |return|Url string|
 *
 * An url object contains the following properties:
 *
 * |Name    |Desc                                                                                  |
 * |--------|--------------------------------------------------------------------------------------|
 * |protocol|The protocol scheme of the URL (e.g. http:)                                           |
 * |slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
 * |auth    |Authentication information portion (e.g. username:password)                           |
 * |hostname|Host name without port number                                                         |
 * |port    |Optional port number                                                                  |
 * |pathname|URL path                                                                              |
 * |query   |Parsed object containing query string                                                 |
 * |hash    |The "fragment" portion of the URL including the pound-sign (#)                        |
 */

/* example
 * const url = new Url('http://example.com:8080?eruda=true');
 * console.log(url.port); // -> '8080'
 * url.query.foo = 'bar';
 * url.rmQuery('eruda');
 * url.toString(); // -> 'http://example.com:8080/?foo=bar'
 */

/* module
 * env: all
 */

/* typescript
 * export declare namespace Url {
 *     interface IUrl {
 *         protocol: string;
 *         auth: string;
 *         hostname: string;
 *         hash: string;
 *         query: any;
 *         port: string;
 *         pathname: string;
 *         slashes: boolean;
 *     }
 * }
 * export declare class Url {
 *     protocol: string;
 *     auth: string;
 *     hostname: string;
 *     hash: string;
 *     query: any;
 *     port: string;
 *     pathname: string;
 *     slashes: boolean;
 *     constructor(url?: string);
 *     setQuery(name: string, val: string): Url;
 *     setQuery(query: { [name: string]: string }): Url;
 *     rmQuery(name: string | string[]): Url;
 *     toString(): string;
 *     static parse(url: string): Url.IUrl;
 *     static stringify(object: Url.IUrl): string;
 * }
 */

_('Class extend trim query isEmpty each isArr toArr isBrowser isObj');

exports = Class(
    {
        className: 'Url',
        initialize(url) {
            if (!url && isBrowser) url = window.location.href;
            extend(this, exports.parse(url || ''));
        },
        setQuery(name, val) {
            const query = this.query;

            if (isObj(name)) {
                each(name, function(val, key) {
                    query[key] = val;
                });
            } else {
                query[name] = val;
            }

            return this;
        },
        rmQuery(name) {
            const query = this.query;

            if (!isArr(name)) name = toArr(name);
            each(name, function(key) {
                delete query[key];
            });

            return this;
        },
        toString() {
            return exports.stringify(this);
        }
    },
    {
        parse(url) {
            const ret = {
                protocol: '',
                auth: '',
                hostname: '',
                hash: '',
                query: {},
                port: '',
                pathname: '',
                slashes: false
            };
            let rest = trim(url);
            let slashes = false;

            let proto = rest.match(regProto);
            if (proto) {
                proto = proto[0];
                ret.protocol = proto.toLowerCase();
                rest = rest.substr(proto.length);
            }

            if (proto) {
                slashes = rest.substr(0, 2) === '//';
                if (slashes) {
                    rest = rest.slice(2);
                    ret.slashes = true;
                }
            }

            if (slashes) {
                let host = rest;
                let hostEnd = -1;
                for (let i = 0, len = hostEndingChars.length; i < len; i++) {
                    const pos = rest.indexOf(hostEndingChars[i]);
                    if (pos !== -1 && (hostEnd === -1 || pos < hostEnd))
                        hostEnd = pos;
                }

                if (hostEnd > -1) {
                    host = rest.slice(0, hostEnd);
                    rest = rest.slice(hostEnd);
                }

                const atSign = host.lastIndexOf('@');

                if (atSign !== -1) {
                    ret.auth = decodeURIComponent(host.slice(0, atSign));
                    host = host.slice(atSign + 1);
                }

                ret.hostname = host;
                let port = host.match(regPort);
                if (port) {
                    port = port[0];
                    if (port !== ':') ret.port = port.substr(1);
                    ret.hostname = host.substr(0, host.length - port.length);
                }
            }

            const hash = rest.indexOf('#');

            if (hash !== -1) {
                ret.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
            }

            const queryMark = rest.indexOf('?');

            if (queryMark !== -1) {
                ret.query = query.parse(rest.substr(queryMark + 1));
                rest = rest.slice(0, queryMark);
            }

            ret.pathname = rest || '/';

            return ret;
        },
        stringify(obj) {
            let ret =
                obj.protocol +
                (obj.slashes ? '//' : '') +
                (obj.auth ? encodeURIComponent(obj.auth) + '@' : '') +
                obj.hostname +
                (obj.port ? ':' + obj.port : '') +
                obj.pathname;

            if (!isEmpty(obj.query)) ret += '?' + query.stringify(obj.query);
            if (obj.hash) ret += obj.hash;

            return ret;
        }
    }
);

const regProto = /^([a-z0-9.+-]+:)/i;
const regPort = /:[0-9]*$/;
const hostEndingChars = ['/', '?', '#'];
