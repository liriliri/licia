// Built by eustia.
module.exports = (function ()
{
        var _ = {};

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys = _.allKeys = (function (exports)
    {
        /* Retrieve all the names of object's own and inherited properties.
         *
         * |Name  |Type  |Desc                           |
         * |---------------------------------------------|
         * |obj   |object|The object to query            |
         * |return|array |The array of all property names|
         *
         * > Members of Object's prototype won't be retrieved.
         *
         * ```javascript
         * var obj = Object.create({zero: 0});
         * obj.one = 1;
         * allKeys(obj) // -> ['zero', 'one']
         * ```
         */

        exports = function (obj)
        {
            var ret = [], key;

            for (key in obj) ret.push(key);

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef = _.isUndef = (function (exports)
    {
        /* Check if value is undefined.
         *
         * |Name  |Type   |Desc                      |
         * |-----------------------------------------|
         * |val   |*      |The value to check        |
         * |return|boolean|True if value is undefined|
         *
         * ```javascript
         * isUndef(void 0); // -> true
         * isUndef(null); // -> false
         * ```
         */

        exports = function (val)
        {
            return val === void 0;
        };

        return exports;
    })({});

    /* ------------------------------ has ------------------------------ */

    var has = _.has = (function (exports)
    {
        /* Checks if key is a direct property.
         *
         * |Name  |Type   |Desc                            |
         * |-----------------------------------------------|
         * |obj   |object |The object to query             |
         * |key   |string |The path to check               |
         * |return|boolean|True if key is a direct property|
         *
         * ```javascript
         * has({one: 1}, 'one'); // -> true
         * ```
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        exports = function (obj, key)
        {
            return hasOwnProp.call(obj, key);
        };

        return exports;
    })({});

    /* ------------------------------ keys ------------------------------ */

    var keys = _.keys = (function (exports)
    {
        /* Create an array of the own enumerable property names of object.
         *
         * |Name  |Type  |Desc                       |
         * |-----------------------------------------|
         * |obj   |object|The object to query        |
         * |return|array |The array of property names|
         */

        exports = Object.keys || function (obj)
        {
            var ret = [], key;

            for (key in obj)
            {
                if (has(obj, key)) ret.push(key);
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ identity ------------------------------ */

    var identity = _.identity = (function (exports)
    {
        /* Return the first argument given.
         *
         * |Name  |Type|Desc       |
         * |-----------------------|
         * |val   |*   |Any value  |
         * |return|*   |Given value|
         *
         * ```javascript
         * identity('a'); // -> 'a'
         * ```
         */

        exports = function (val)
        {
            return val;
        };

        return exports;
    })({});

    /* ------------------------------ repeat ------------------------------ */

    var repeat = _.repeat = (function (exports)
    {
        /* Repeat string n-times.
         *
         * |Name  |Type  |Desc                |
         * |----------------------------------|
         * |str   |string|The string to repeat|
         * |n     |number|Repeat times        |
         * |return|string|Repeated string     |
         *
         * ```javascript
         * repeat('a', 3); // -> 'aaa'
         * repeat('ab', 2); // -> 'abab'
         * repeat('*', 0); // -> ''
         * ```
         */

        exports = function (str, n)
        {
            var ret = '';

            if (n < 1) return '';

            while (n > 0)
            {
                if (n & 1) ret += str;
                n >>= 1;
                str += str;
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr = _.objToStr = (function (exports)
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name  |Type  |Desc                                    |
         * |------------------------------------------------------|
         * |value |*     |Source value                            |
         * |return|string|String representation of the given value|
         */

        var ObjToStr = Object.prototype.toString;

        exports = function (val)
        {
            return ObjToStr.call(val);
        };

        return exports;
    })({});

    /* ------------------------------ isArr ------------------------------ */

    var isArr = _.isArr = (function (exports)
    {
        /* Check if value is an `Array` object.
         *
         * |Name  |Type   |Desc                              |
         * |-------------------------------------------------|
         * |val   |*      |The value to check                |
         * |return|boolean|True if value is an `Array` object|
         *
         * ```javascript
         * isArr([]); // -> true
         * isArr({}); // -> false
         * ```
         */

        exports = Array.isArray || function (val)
        {
            return objToStr(val) === '[object Array]';
        };

        return exports;
    })({});

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function (exports)
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |value|*|The value to check|
         * |return|boolean|True if value is correctly classified, else false|
         */

        exports = function (val)
        {
            return objToStr(val) === '[object Number]';
        };

        return exports;
    })({});

    /* ------------------------------ indent ------------------------------ */

    var indent = _.indent = (function (exports)
    {
        /* Indent each line in a string.
         *
         * |Name  |Type  |Desc                |
         * |----------------------------------|
         * |str   |string|String to indent    |
         * |[char]|string|Character to prepend|
         * |[len] |number|Indent length       |
         * |return|string|Indented string     |
         *
         * ```javascript
         * indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
         * ```
         */

        var regLineBegin = /^(?!\s*$)/mg;

        function exports(str, char, len)
        {
            if (isNum(char))
            {
                len = char;
                char = ' ';
            }
            if (isUndef(len)) len = 4;
            if (isUndef(char)) char = ' ';

            char = repeat(char, len);

            return str.replace(regLineBegin, char);
        }

        return exports;
    })({});

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike = _.isArrLike = (function (exports)
    {
        // TODO

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        exports = function (val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX;
        };

        return exports;
    })({});

    /* ------------------------------ each ------------------------------ */

    var each = _.each = (function (exports)
    {
        /* Iterates over elements of collection and invokes iteratee for each element.
         *
         * |Name    |Type         |Desc                          |
         * |-----------------------------------------------------|
         * |obj     |object\|array|Collection to iterate over    |
         * |iteratee|function     |Function invoked per iteration|
         * |[ctx]   |*            |Function context              |
         *
         * ```javascript
         * each({'a': 1, 'b': 2}, function (val, key) {});
         * ```
         */

        exports = function (obj, iteratee, ctx)
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

        return exports;
    })({});

    /* ------------------------------ createAssigner ------------------------------ */

    var createAssigner = _.createAssigner = (function (exports)
    {
        /* Used to create extend, extendOwn and defaults.
         *
         * |Name    |Type    |Desc                          |
         * |------------------------------------------------|
         * |keysFn  |function|Function to get object keys   |
         * |defaults|boolean |No override when set to true  |
         * |return  |function|The result function, extend...|
         */

        exports = function (keysFn, defaults)
        {
            return function (obj)
            {
                each(arguments, function (src, idx)
                {
                    if (idx === 0) return;

                    var keys = keysFn(src);

                    each(keys, function (key)
                    {
                        if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                    });
                });

                return obj;
            };
        };

        return exports;
    })({});

    /* ------------------------------ defaults ------------------------------ */

    var defaults = _.defaults = (function (exports)
    {
        /* Fill in undefined properties in object with the first value present in the following list of defaults objects.
         *
         * |Name  |Type  |Desc              |
         * |--------------------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        exports = createAssigner(allKeys, true);

        return exports;
    })({});

    /* ------------------------------ extendOwn ------------------------------ */

    var extendOwn = _.extendOwn = (function (exports)
    {
        /* Like extend, but only copies own properties over to the destination object.
         *
         * |Name  |Type  |Desc              |
         * |--------------------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        exports = createAssigner(keys);

        return exports;
    })({});

    /* ------------------------------ isFn ------------------------------ */

    var isFn = _.isFn = (function (exports)
    {
        /* Check if value is a function.
         *
         * |Name  |Type   |Desc                       |
         * |------------------------------------------|
         * |val   |*      |The value to check         |
         * |return|boolean|True if value is a function|
         *
         * Generator function is also classified as true.
         *
         * ```javascript
         * isFn(function() {}); // -> true
         * isFn(function*() {}); // -> true
         * ```
         */

        exports = function (val)
        {
            var objStr = objToStr(val);

            return objStr === '[object Function]' || objStr === '[object GeneratorFunction]';
        };

        return exports;
    })({});

    /* ------------------------------ isMatch ------------------------------ */

    var isMatch = _.isMatch = (function (exports)
    {
        /* Check if keys and values in src are contained in obj.
         *
         * |Name  |Type  |Desc                               |
         * |-------------------------------------------------|
         * |obj   |object |Object to inspect                 |
         * |src   |object |Object of property values to match|
         * |return|boolean|True if object is match           |
         *
         * ```javascript
         * isMatch({a: 1, b: 2}, {a: 1}); // -> true
         * ```
         */

        exports = function (obj, src)
        {
            var _keys = keys(src),
                len = _keys.length;

            if (obj == null) return !len;

            obj = Object(obj);

            for (var i = 0; i < len; i++)
            {
                var key = _keys[i];
                if (src[key] !== obj[key] || !(key in obj)) return false;
            }

            return true;
        };

        return exports;
    })({});

    /* ------------------------------ isObj ------------------------------ */

    var isObj = _.isObj = (function (exports)
    {
        /* Check if value is the language type of Object.
         *
         * |Name  |Type   |Desc                      |
         * |-----------------------------------------|
         * |val   |*      |The value to check        |
         * |return|boolean|True if value is an object|
         *
         * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
         *
         * ```javascript
         * isObj({}); // -> true
         * isObj([]); // -> true
         * ```
         */

        exports = function (val)
        {
            var type = typeof val;

            return !!val && (type === 'function' || type === 'object');
        };

        return exports;
    })({});

    /* ------------------------------ isStr ------------------------------ */

    var isStr = _.isStr = (function (exports)
    {
        /* Check if value is a string primitive.
         *
         * |Name  |Type   |Desc                               |
         * |--------------------------------------------------|
         * |val   |*      |The value to check                 |
         * |return|boolean|True if value is a string primitive|
         *
         * ```javascript
         * isStr('eris'); // -> true
         * ```
         */

        exports = function (val)
        {
            return objToStr(val) === '[object String]';
        };

        return exports;
    })({});

    /* ------------------------------ last ------------------------------ */

    var last = _.last = (function (exports)
    {
        /* Get the last element of array.
         *
         * |Name  |Type |Desc                     |
         * |--------------------------------------|
         * |arr   |array|The array to query       |
         * |return|*    |The last element of array|
         *
         * ```javascript
         * last([1, 2]); // -> 2
         * ```
         */

        exports = function (arr)
        {
            var len = arr ? arr.length : 0;

            if (len) return arr[len - 1];
        };

        return exports;
    })({});

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim = _.ltrim = (function (exports)
    {
        /* Remove chars or white-spaces from beginning of string.
         *
         * |Name  |Type         |Desc                  |
         * |-------------------------------------------|
         * |str   |string       |The string to trim    |
         * |chars |string\|array|The characters to trim|
         * |return|string       |The trimmed string    |
         *
         * ```javascript
         * ltrim(' abc  '); // -> 'abc  '
         * ltrim('_abc_', '_'); // -> 'abc_'
         * ltrim('_abc_', ['a', '_']); // -> 'bc_'
         * ```
         */

        var regSpace = /^\s+/;

        exports = function (str, chars)
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

        return exports;
    })({});

    /* ------------------------------ matcher ------------------------------ */

    var matcher = _.matcher = (function (exports)
    {
        // TODO

        exports = function (attrs)
        {
            attrs = extendOwn({}, attrs);

            return function (obj)
            {
                return isMatch(obj, attrs);
            };
        };

        return exports;
    })({});

    /* ------------------------------ optimizeCb ------------------------------ */

    var optimizeCb = _.optimizeCb = (function (exports)
    {
        exports = function (func, ctx, argCount)
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

        return exports;
    })({});

    /* ------------------------------ safeCb ------------------------------ */

    var safeCb = _.safeCb = (function (exports)
    {
        /* function
         * safeCb: Create callback based on input value.
         */

        exports = function (val, ctx, argCount)
        {
            if (val == null) return identity;

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

        return exports;
    })({});

    /* ------------------------------ map ------------------------------ */

    var map = _.map = (function (exports)
    {
        /* Create an array of values by running each element in collection through iteratee.
         *
         * |Name    |Type         |Desc                          |
         * |-----------------------------------------------------|
         * |obj     |array\|object|Collection to iterate over    |
         * |iteratee|function     |Function invoked per iteration|
         * |[ctx]   |*            |Function context              |
         * |return  |array        |New mapped array              |
         *
         * ```javascript
         * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
         * ```
         */

        exports = function (obj, iteratee, ctx)
        {
            iteratee = safeCb(iteratee, ctx);

            var _keys = !isArrLike(obj) && keys(obj),
                len = (_keys || obj).length,
                results = Array(len);

            for (var i = 0; i < len; i++)
            {
                var curKey = _keys ? _keys[i] : i;
                results[i] = iteratee(obj[curKey], curKey, obj);
            }

            return results;
        };

        return exports;
    })({});

    /* ------------------------------ restArgs ------------------------------ */

    var restArgs = _.restArgs = (function (exports)
    {
        /* This accumulates the arguments passed into an array, after a given index.
         *
         * |Name|Type|Desc|
         * |--------------|
         * |function|function|Function that needs rest parameters|
         * |startIndex|number|The start index to accumulates|
         * |return|function|Generated function with rest parameters|
         *
         * ```javascript
         * var paramArr = _.restArgs(function (rest) { return rest });
         * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
         * ```
         */

        exports = function (fn, startIdx)
        {
            startIdx = startIdx == null ? fn.length - 1 : +startIdx;

            return function ()
            {
                var len = Math.max(arguments.length - startIdx, 0),
                    rest = new Array(len),
                    i;

                for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

                // Call runs faster than apply.
                switch (startIdx)
                {
                    case 0: return fn.call(this, rest);
                    case 1: return fn.call(this, arguments[0], rest);
                    case 2: return fn.call(this, arguments[0], arguments[1], rest);
                }

                var args = new Array(startIdx + 1);

                for (i = 0; i < startIdx; i++) args[i] = arguments[i];

                args[startIdx] = rest;

                return fn.apply(this, args);
            };
        };

        return exports;
    })({});

    /* ------------------------------ toArr ------------------------------ */

    var toArr = _.toArr = (function (exports)
    {
        /* Convert value to an array.
         *
         * |Name  |Type |Desc            |
         * |-----------------------------|
         * |val   |*    |Value to convert|
         * |return|array|Converted array |
         *
         * ```javascript
         * toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
         * toArr('abc'); // -> ['abc']
         * toArr(1); // -> []
         * toArr(null); // -> []
         * ```
         */

        exports = function (val)
        {
            if (!val) return [];

            if (isArr(val)) return val;

            if (isArrLike(val) && !isStr(val)) return map(val);

            return [val];
        };

        return exports;
    })({});

    /* ------------------------------ partial ------------------------------ */

    var partial = _.partial = (function (exports)
    {
        /* Partially apply a function by filling in given arguments.
         *
         * |Name    |Type    |Desc                                    |
         * |----------------------------------------------------------|
         * |fn      |function|Function to partially apply arguments to|
         * |partials|...*    |Arguments to be partially applied       |
         * |return  |function|New partially applied function          |
         *
         * ```javascript
         * var sub5 = partial(function (a, b) { return b - a }, 5);
         * sub(20); // -> 15
         * ```
         */

        exports = restArgs(function (fn, partials)
        {
            return function ()
            {
                var args = [];

                args = args.concat(partials);
                args = args.concat(toArr(arguments));

                return fn.apply(this, args);
            };
        });

        return exports;
    })({});

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim = _.rtrim = (function (exports)
    {
        /* Remove chars or white-spaces from end of string.
         *
         * |Name  |Type         |Desc                  |
         * |-------------------------------------------|
         * |str   |string       |The string to trim    |
         * |chars |string\|array|The characters to trim|
         * |return|string       |The trimmed string    |
         *
         * ```javascript
         * rtrim(' abc  '); // -> ' abc'
         * rtrim('_abc_', '_'); // -> '_abc'
         * rtrim('_abc_', ['c', '_']); // -> '_ab'
         * ```
         */

        var regSpace = /\s+$/;

        exports = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var end = str.length - 1,
                charLen = chars.length,
                found = true,
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

        return exports;
    })({});

    /* ------------------------------ trim ------------------------------ */

    var trim = _.trim = (function (exports)
    {
        /* Remove chars or white-spaces from beginning end of string.
         *
         * |Name  |Type         |Desc                  |
         * |-------------------------------------------|
         * |str   |string       |The string to trim    |
         * |chars |string\|array|The characters to trim|
         * |return|string       |The trimmed string    |
         *
         * ```javascript
         * trim(' abc  '); // -> 'abc'
         * trim('_abc_', '_'); // -> 'abc'
         * trim('_abc_', ['a', 'c', '_']); // -> 'b'
         * ```
         */

        var regSpace = /^\s+|\s+$/g;

        exports = function (str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            return ltrim(rtrim(str, chars), chars);
        };

        return exports;
    })({});

    /* ------------------------------ extractBlockCmts ------------------------------ */

    var extractBlockCmts = _.extractBlockCmts = (function (exports)
    {
        /* Extract block comments from source code.
         */

        var regBlockCmt = /(\/\*[\s\S]*?\*\/)/mg;

        exports = function (str)
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

        return exports;
    })({});

    return _;
})();