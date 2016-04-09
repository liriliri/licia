// Built by eustia.
module.exports = (function ()
{
    var _ = {};

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef;

    _.isUndef = (function ()
    {
        /* Checks if value is undefined.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|Returns true if value is undefined, else false|
         *
         * ```javascript
         * _.isUndef(void 0) // -> true
         * _.isUndef(null) // -> false
         * ```
         *
         * Just a shortcut for **x === undefined**, doesn't matter that much whether you
         * use it or not.
         */

        isUndef = function (val)
        {
            return val === void 0;
        };

        return isUndef;
    })();

    /* ------------------------------ _createAssigner ------------------------------ */

    var _createAssigner;

    _._createAssigner = (function ()
    {

        _createAssigner = function (keysFunc, defaults)
        {
            return function (obj)
            {
                var len = arguments.length;

                if (defaults) obj = Object(obj);

                if (len < 2 || obj == null) return obj;

                for (var i = 1; i < len; i++)
                {
                    var src     = arguments[i],
                        keys    = keysFunc(src),
                        keysLen = keys.length;

                    for (var j = 0; j < keysLen; j++)
                    {
                        var key = keys[j];
                        if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                    }
                }

                return obj;
            };
        };

        return _createAssigner;
    })();

    /* ------------------------------ has ------------------------------ */

    var has;

    _.has = (function ()
    {
        /* Checks if key is a direct property.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |object|object|The object to query|
         * |key|string|The path to check|
         * |return|boolean|True if key is a direct property, else false|
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        has = function (obj, key)
        {
            return hasOwnProp.call(obj, key);
        };

        return has;
    })();

    /* ------------------------------ keys ------------------------------ */

    var keys;

    _.keys = (function ()
    {
        /* Creates an array of the own enumerable property names of object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |object|object|The object to query|
         * |return|array|The array of property names|
         */

        keys = Object.keys || function (obj)
        {
            var ret = [], key;

            for (key in obj)
            {
                if (has(obj, key)) ret.push(key);
            }

            return ret;
        };

        return keys;
    })();

    /* ------------------------------ extendOwn ------------------------------ */

    var extendOwn;

    _.extendOwn = (function ()
    {
        // TODO

        extendOwn = _createAssigner(keys);

        return extendOwn;
    })();

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr;

    _.objToStr = (function ()
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The source value|
         * |return|string|String representation of the given value|
         */

        var ObjToStr = Object.prototype.toString;

        objToStr = function (val)
        {
            return ObjToStr.call(val);
        };

        return objToStr;
    })();

    /* ------------------------------ isFn ------------------------------ */

    var isFn;

    _.isFn = (function ()
    {
        /* Check if value is a function.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|True if value is a function, else false|
         */

        isFn = function (val)
        {
            return objToStr(val) === '[object Function]';
        };

        return isFn;
    })();

    /* ------------------------------ isNum ------------------------------ */

    var isNum;

    _.isNum = (function ()
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|True if value is correctly classified, else false|
         */

        isNum = function (val)
        {
            return objToStr(val) === '[object Number]';
        };

        return isNum;
    })();

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike;

    _.isArrLike = (function ()
    {
        // TODO

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        isArrLike = function (val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX;
        };

        return isArrLike;
    })();

    /* ------------------------------ each ------------------------------ */

    var each;

    _.each = (function ()
    {
        // TODO

        each = function (obj, iteratee, ctx)
        {
            var i, len;

            if (isArrLike(obj))
            {
                for (i = 0, len = obj.length; i < len; i++) iteratee.call(ctx, obj[i], i, obj);
            } else
            {
                var _keys = keys(obj);
                for (i = 0, len = _keys.length; i < len; i++)
                {
                    iteratee.call(ctx, obj[_keys[i]], _keys[i], obj);
                }
            }

            return obj;
        };

        return each;
    })();

    /* ------------------------------ isMatch ------------------------------ */

    var isMatch;

    _.isMatch = (function ()
    {
        // TODO

        isMatch = function (obj, attrs)
        {
            var _keys = keys(attrs),
                len   = _keys.length;

            if (obj == null) return !len;

            obj = Object(obj);

            for (var i = 0; i < len; i++)
            {
                var key = keys[i];
                if (attrs[key] !== obj[key] || !(key in obj)) return false;
            }

            return true;
        };

        return isMatch;
    })();

    /* ------------------------------ isObj ------------------------------ */

    var isObj;

    _.isObj = (function ()
    {
        // TODO

        /* function
         * isObj: Checks if value is the language type of Object.
         * value(*): The value to check.
         * return(boolean): Returns true if value is an object, else false.
         */

        isObj = function (val)
        {
            var type = typeof val;

            return type === 'function' || type === 'object';
        };

        return isObj;
    })();

    /* ------------------------------ last ------------------------------ */

    var last;

    _.last = (function ()
    {
        /* Gets the last element of array.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |array|array|The array to query|
         * |return|*|Returns the last element of array|
         */

        last = function (arr)
        {
            var len = arr ? arr.length : 0;

            return len ? arr[len - 1] : undefined;
        };

        return last;
    })();

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim;

    _.ltrim = (function ()
    {
        // TODO

        var regSpace = /^\s+/;

        ltrim = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var start   = 0,
                len     = str.length,
                charLen = chars.length,
                found   = true,
                i, c;

            while (found && start < len)
            {
                found = false;
                i = -1;
                c = str.charAt(start);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        start++;
                        break;
                    }
                }
            }

            return (start >= len) ? '' : str.substr(start, len);
        };

        return ltrim;
    })();

    /* ------------------------------ matcher ------------------------------ */

    var matcher;

    _.matcher = (function ()
    {
        // TODO

        matcher = function (attrs)
        {
            attrs = extendOwn({}, attrs);

            return function (obj)
            {
                return isMatch(obj, attrs);
            };
        };

        return matcher;
    })();

    /* ------------------------------ optimizeCb ------------------------------ */

    var optimizeCb;

    _.optimizeCb = (function ()
    {

        optimizeCb = function (func, ctx, argCount)
        {
            if (isUndef(ctx)) return func;

            switch (argCount == null ? 3 : argCount)
            {
                case 1: return function (val)
                {
                    return func.call(ctx, val);
                };
                case 3: return function (val, idx, collection)
                {
                    return func.call(ctx, val, idx, collection);
                };
                case 4: return function (accumulator, val, idx, collection)
                {
                    return func.call(ctx, accumulator, val, idx, collection);
                }
            }

            return function ()
            {
                return func.apply(ctx, arguments);
            };
        };

        return optimizeCb;
    })();

    /* ------------------------------ safeCb ------------------------------ */

    var safeCb;

    _.safeCb = (function ()
    {
        /* function
         * safeCb: Create callback based on input value.
         */

        safeCb = function (val, ctx, argCount)
        {
            if (val == null) return function (val) { return val };

            if (isFn(val)) return optimizeCb(val, ctx, argCount);

            if (isObj(val)) return matcher(val);

            return function (key)
            {
                return function (obj)
                {
                    return obj == null ? undefined : obj[key];
                }
            };
        };

        return safeCb;
    })();

    /* ------------------------------ map ------------------------------ */

    var map;

    _.map = (function ()
    {
        // TODO

        map = function (obj, iteratee, ctx)
        {
            iteratee = safeCb(iteratee, ctx);

            var _keys   = !isArrLike(obj) && keys(obj),
                len     = (_keys || obj).length,
                results = Array(len);

            for (var i = 0; i < len; i++)
            {
                var curKey = _keys ? _keys[i] : i;
                results[i] = iteratee(obj[curKey], curKey, obj);
            }

            return results;
        };

        return map;
    })();

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim;

    _.rtrim = (function ()
    {
        // TODO

        var regSpace = /\s+$/;

        rtrim = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var end     = str.length - 1,
                charLen = chars.length,
                found   = true,
                i, c;

            while (found && end >= 0)
            {
                found = false;
                i = -1;
                c = str.charAt(end);

                while (++i < charLen)
                {
                    if (c === chars[i])
                    {
                        found = true;
                        end--;
                        break;
                    }
                }
            }

            return (end >= 0) ? str.substring(0, end + 1) : '';
        };

        return rtrim;
    })();

    /* ------------------------------ trim ------------------------------ */

    var trim;

    _.trim = (function ()
    {
        // TODO

        var regSpace = /^\s+|\s+$/g;

        trim = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            return ltrim(rtrim(str, chars), chars);
        };

        return trim;
    })();

    /* ------------------------------ extractBlockCmts ------------------------------ */

    var extractBlockCmts;

    _.extractBlockCmts = (function ()
    {
        /* Extract block comments from source code.
         */

        var regBlockCmt = /(\/\*[\s\S]*?\*\/)/mg;

        extractBlockCmts = function (str)
        {
            var ret = str.match(regBlockCmt);

            if (!ret) return [];

            ret = map(ret, function (comment)
            {
                return trim(map(comment.split('\n'), function (line)
                {
                    return trim(line).replace(/^\/\*+|\*+\/$|^\*+/g, '');
                }).join('\n'));
            });

            return ret;
        };

        return extractBlockCmts;
    })();

    return _;
})();