/* Simple url manipulator.
 *
 * ### constructor
 *
 * |Name                 |Type  |Desc      |
 * |---------------------|------|----------|
 * |[url=window.location]|string|Url string|
 *
 * ### setQuery
 *
 * Set query value.
 *
 * |Name  |Type  |Desc       |
 * |------|------|-----------|
 * |name  |string|Query name |
 * |value |string|Query value|
 * |return|Url   |this       |
 *
 * |Name  |Type  |Desc        |
 * |------|------|------------|
 * |names |object|query object|
 * |return|Url   |this        |
 *
 * ### rmQuery
 *
 * Remove query value.
 *
 * |Name  |Type        |Desc      |
 * |------|------------|----------|
 * |name  |string array|Query name|
 * |return|Url         |this      |
 *
 * ### parse
 *
 * [static] Parse url into an object.
 *
 * |Name  |Type  |Desc      |
 * |------|------|----------|
 * |url   |string|Url string|
 * |return|object|Url object|
 *
 * ### stringify
 *
 * [static] Stringify url object into a string.
 *
 * |Name  |Type  |Desc      |
 * |------|------|----------|
 * |url   |object|Url object|
 * |return|string|Url string|
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
 *
 * ```javascript
 * var url = new Url('http://example.com:8080?eruda=true');
 * console.log(url.port); // -> '8080'
 * url.query.foo = 'bar';
 * url.rmQuery('eruda');
 * utl.toString(); // -> 'http://example.com:8080/?foo=bar'
 * ```
 */

_('Class extend trim query isEmpty each toArr');

exports = Class({
    className: 'Url',
    initialize: function (url)
    {
        extend(this, exports.parse(url || window.location));
    },
    setQuery: function (name, val)
    {
        var query = this.query;

        if (isObj(name))
        {
            each(name, function (val, key)
            {
                query[key] = val;
            });
        } else
        {
            query[name] = val;
        }

        return this;
    },
    rmQuery: function (name)
    {
        var query = this.query;

        if (!isArr(name)) name = toArr(name);
        each(name, function (key)
        {
            delete query[key];
        });

        return this;
    },
    toString: function ()
    {
        return exports.stringify(this);
    }
}, {
    parse: function (url)
    {
        var ret = {
                protocol: '',
                auth: '',
                hostname: '',
                hash: '',
                query: {},
                port: '',
                pathname: '',
                slashes: false
            },
            rest = trim(url);

        var proto = rest.match(regProto);
        if (proto)
        {
            proto = proto[0];
            ret.protocol = proto.toLowerCase();
            rest = rest.substr(proto.length);
        }

        if (proto)
        {
            var slashes = rest.substr(0, 2) === '//';
            if (slashes)
            {
                rest = rest.slice(2);
                ret.slashes = true;
            }
        }

        if (slashes)
        {
            var hostEnd = -1;
            for (var i = 0, len = hostEndingChars.length; i < len; i++)
            {
                var pos = rest.indexOf(hostEndingChars[i]);
                if (pos !== -1 && (hostEnd === -1 || pos < hostEnd)) hostEnd = pos;
            }

            var host = rest.slice(0, hostEnd);
            rest = rest.slice(hostEnd);

            var atSign = host.lastIndexOf('@');

            if (atSign !== -1)
            {
                ret.auth = decodeURIComponent(host.slice(0, atSign));
                host = host.slice(atSign + 1);
            }

            ret.hostname = host;
            var port = host.match(regPort);
            if (port)
            {
                port = port[0];
                if (port !== ':') ret.port = port.substr(1);
                ret.hostname = host.substr(0, host.length - port.length);
            }
        }

        var hash = rest.indexOf('#');

        if (hash !== -1)
        {
            ret.hash = rest.substr(hash);
            rest = rest.slice(0, hash);
        }

        var queryMark = rest.indexOf('?');

        if (queryMark !== -1)
        {
            ret.query = query.parse(rest.substr(queryMark + 1));
            rest = rest.slice(0, queryMark);
        }

        ret.pathname = rest || '/';

        return ret;
    },
    stringify: function (obj)
    {
        var ret = obj.protocol +
                  (obj.slashes ? '//' : '') +
                  (obj.auth ? encodeURIComponent(obj.auth) + '@' : '') +
                  obj.hostname +
                  (obj.port ? (':' + obj.port) : '') +
                  obj.pathname;

        if (!isEmpty(obj.query)) ret += '?' + query.stringify(obj.query);
        if (obj.hash) ret += obj.hash;

        return ret;
    }
});

var regProto = /^([a-z0-9.+-]+:)/i,
    regPort = /:[0-9]*$/,
    hostEndingChars = ['/', '?', '#'];
