// Built by eustia.
module.exports = (function ()
{
    var _ = {};

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys = _.allKeys = (function ()
    {
        /* Retrieve all the names of object's own and inherited properties.
         *
         * |Name  |Type  |Desc                       |
         * |------|------|---------------------------|
         * |obj   |object|Object to query            |
         * |return|array |Array of all property names|
         *
         * > Members of Object's prototype won't be retrieved.
         *
         * ```javascript
         * var obj = Object.create({zero: 0});
         * obj.one = 1;
         * allKeys(obj) // -> ['zero', 'one']
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(obj)
        {
            var ret = [], key;

            for (key in obj) ret.push(key);

            return ret;
        }

        return exports;
    })();

    /* ------------------------------ isObj ------------------------------ */

    var isObj = _.isObj = (function ()
    {
        /* Check if value is the language type of Object.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is an object|
         *
         * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
         *
         * ```javascript
         * isObj({}); // -> true
         * isObj([]); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            var type = typeof val;

            return !!val && (type === 'function' || type === 'object');
        }

        return exports;
    })();

    /* ------------------------------ idxOf ------------------------------ */

    var idxOf = _.idxOf = (function ()
    {
        /* Get the index at which the first occurrence of value.
         *
         * |Name       |Type  |Desc                |
         * |-----------|------|--------------------|
         * |arr        |array |Array to search     |
         * |val        |*     |Value to search for |
         * |[fromIdx=0]|number|Index to search from|
         *
         * ```javascript
         * idxOf([1, 2, 1, 2], 2, 2); // -> 3
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(arr, val, fromIdx)
        {
            return Array.prototype.indexOf.call(arr, val, fromIdx);
        }

        return exports;
    })();

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef = _.isUndef = (function ()
    {
        /* Check if value is undefined.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is undefined|
         *
         * ```javascript
         * isUndef(void 0); // -> true
         * isUndef(null); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            return val === void 0;
        }

        return exports;
    })();

    /* ------------------------------ optimizeCb ------------------------------ */

    var optimizeCb = _.optimizeCb = (function ()
    {
        /* Used for function context binding.
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isUndef 
         */

        function exports(fn, ctx, argCount)
        {
            if (isUndef(ctx)) return fn;

            switch (argCount == null ? 3 : argCount)
            {
                case 1: return function (val)
                {
                    return fn.call(ctx, val);
                };
                case 3: return function (val, idx, collection)
                {
                    return fn.call(ctx, val, idx, collection);
                };
                case 4: return function (accumulator, val, idx, collection)
                {
                    return fn.call(ctx, accumulator, val, idx, collection);
                }
            }

            return function ()
            {
                return fn.apply(ctx, arguments);
            };
        }

        return exports;
    })();

    /* ------------------------------ has ------------------------------ */

    var has = _.has = (function ()
    {
        /* Checks if key is a direct property.
         *
         * |Name  |Type   |Desc                            |
         * |------|-------|--------------------------------|
         * |obj   |object |Object to query                 |
         * |key   |string |Path to check                   |
         * |return|boolean|True if key is a direct property|
         *
         * ```javascript
         * has({one: 1}, 'one'); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        function exports(obj, key)
        {
            return hasOwnProp.call(obj, key);
        }

        return exports;
    })();

    /* ------------------------------ keys ------------------------------ */

    var keys = _.keys = (function (exports)
    {
        /* Create an array of the own enumerable property names of object.
         *
         * |Name  |Type  |Desc                   |
         * |------|------|-----------------------|
         * |obj   |object|Object to query        |
         * |return|array |Array of property names|
         * 
         * ```javascript
         * keys({a: 1}); // -> ['a']
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * has 
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

    var identity = _.identity = (function ()
    {
        /* Return the first argument given.
         *
         * |Name  |Type|Desc       |
         * |------|----|-----------|
         * |val   |*   |Any value  |
         * |return|*   |Given value|
         *
         * ```javascript
         * identity('a'); // -> 'a'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            return val;
        }

        return exports;
    })();

    /* ------------------------------ repeat ------------------------------ */

    var repeat = _.repeat = (function (exports)
    {
        /* Repeat string n-times.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to repeat|
         * |n     |number|Repeat times    |
         * |return|string|Repeated string |
         *
         * ```javascript
         * repeat('a', 3); // -> 'aaa'
         * repeat('ab', 2); // -> 'abab'
         * repeat('*', 0); // -> ''
         * ```
         */

        /* module
         * env: all
         * test: all
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

    var objToStr = _.objToStr = (function ()
    {
        /* Alias of Object.prototype.toString.
         *
         * |Name  |Type  |Desc                                |
         * |------|------|------------------------------------|
         * |value |*     |Source value                        |
         * |return|string|String representation of given value|
         * 
         * ```javascript
         * objToStr(5); // -> '[object Number]'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var ObjToStr = Object.prototype.toString;

        function exports(val)
        {
            return ObjToStr.call(val);
        }

        return exports;
    })();

    /* ------------------------------ isArr ------------------------------ */

    var isArr = _.isArr = (function (exports)
    {
        /* Check if value is an `Array` object.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |val   |*      |The value to check                |
         * |return|boolean|True if value is an `Array` object|
         *
         * ```javascript
         * isArr([]); // -> true
         * isArr({}); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * objToStr 
         */

        exports = Array.isArray || function (val)
        {
            return objToStr(val) === '[object Array]';
        };

        return exports;
    })({});

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function ()
    {
        /* Checks if value is classified as a Number primitive or object.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |value |*      |Value to check                       |
         * |return|boolean|True if value is correctly classified|
         * 
         * ```javascript
         * isNum(5); // -> true
         * isNum(5.1); // -> true
         * isNum({}); // -> false
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * objToStr 
         */

        function exports(val)
        {
            return objToStr(val) === '[object Number]';
        }

        return exports;
    })();

    /* ------------------------------ indent ------------------------------ */

    _.indent = (function ()
    {
        /* Indent each line in a string.
         *
         * |Name  |Type  |Desc                |
         * |------|------|--------------------|
         * |str   |string|String to indent    |
         * |[char]|string|Character to prepend|
         * |[len] |number|Indent length       |
         * |return|string|Indented string     |
         *
         * ```javascript
         * indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isNum isUndef repeat 
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
    })();

    /* ------------------------------ isFn ------------------------------ */

    var isFn = _.isFn = (function ()
    {
        /* Check if value is a function.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |val   |*      |Value to check             |
         * |return|boolean|True if value is a function|
         *
         * Generator function is also classified as true.
         *
         * ```javascript
         * isFn(function() {}); // -> true
         * isFn(function*() {}); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * objToStr 
         */

        function exports(val)
        {
            var objStr = objToStr(val);

            return objStr === '[object Function]' || objStr === '[object GeneratorFunction]';
        }

        return exports;
    })();

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike = _.isArrLike = (function ()
    {
        /* Check if value is array-like.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |value |*      |Value to check             |
         * |return|boolean|True if value is array like|
         *
         * > Function returns false.
         *
         * ```javascript
         * isArrLike('test'); // -> true
         * isArrLike(document.body.children); // -> true;
         * isArrLike([1, 2, 3]); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isNum has isFn 
         */

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        function exports(val)
        {
            if (!has(val, 'length')) return false;

            var len = val.length;

            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
        }

        return exports;
    })();

    /* ------------------------------ each ------------------------------ */

    var each = _.each = (function ()
    {
        /* Iterates over elements of collection and invokes iteratee for each element.
         *
         * |Name    |Type        |Desc                          |
         * |--------|------------|------------------------------|
         * |obj     |object array|Collection to iterate over    |
         * |iteratee|function    |Function invoked per iteration|
         * |[ctx]   |*           |Function context              |
         *
         * ```javascript
         * each({'a': 1, 'b': 2}, function (val, key) {});
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isArrLike keys optimizeCb 
         */

        function exports(obj, iteratee, ctx)
        {
            iteratee = optimizeCb(iteratee, ctx);

            var i, len;

            if (isArrLike(obj))
            {
                for (i = 0, len = obj.length; i < len; i++) iteratee(obj[i], i, obj);
            } else
            {
                var _keys = keys(obj);
                for (i = 0, len = _keys.length; i < len; i++)
                {
                    iteratee(obj[_keys[i]], _keys[i], obj);
                }
            }

            return obj;
        }

        return exports;
    })();

    /* ------------------------------ createAssigner ------------------------------ */

    var createAssigner = _.createAssigner = (function ()
    {
        /* Used to create extend, extendOwn and defaults.
         *
         * |Name    |Type    |Desc                          |
         * |--------|--------|------------------------------|
         * |keysFn  |function|Function to get object keys   |
         * |defaults|boolean |No override when set to true  |
         * |return  |function|Result function, extend...    |
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isUndef each 
         */

        function exports(keysFn, defaults)
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
        }

        return exports;
    })();

    /* ------------------------------ defaults ------------------------------ */

    _.defaults = (function (exports)
    {
        /* Fill in undefined properties in object with the first value present in the following list of defaults objects.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * createAssigner allKeys 
         */

        exports = createAssigner(allKeys, true);

        return exports;
    })({});

    /* ------------------------------ extend ------------------------------ */

    var extend = _.extend = (function (exports)
    {
        /* Copy all of the properties in the source objects over to the destination object.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |...src|object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * createAssigner allKeys 
         */

        exports = createAssigner(allKeys);

        return exports;
    })({});

    /* ------------------------------ clone ------------------------------ */

    _.clone = (function ()
    {
        /* Create a shallow-copied clone of the provided plain object.
         *
         * Any nested objects or arrays will be copied by reference, not duplicated.
         *
         * |Name  |Type|Desc          |
         * |------|----|--------------|
         * |val   |*   |Value to clone|
         * |return|*   |Cloned value  |
         *
         * ```javascript
         * clone({name: 'eustia'}); // -> {name: 'eustia'}
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isObj isArr extend 
         */

        function exports(obj)
        {
            if (!isObj(obj)) return obj;

            return isArr(obj) ? obj.slice() : extend({}, obj);
        }

        return exports;
    })();

    /* ------------------------------ extendOwn ------------------------------ */

    var extendOwn = _.extendOwn = (function (exports)
    {
        /* Like extend, but only copies own properties over to the destination object.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |obj   |object|Destination object|
         * |*src  |object|Sources objects   |
         * |return|object|Destination object|
         *
         * ```javascript
         * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * keys createAssigner 
         */

        exports = createAssigner(keys);

        return exports;
    })({});

    /* ------------------------------ values ------------------------------ */

    var values = _.values = (function ()
    {
        /* Create an array of the own enumerable property values of object.
         *
         * |Name  |Type  |Desc                    |
         * |------|------|------------------------|
         * |obj   |object|Object to query         |
         * |return|array |Array of property values|
         *
         * ```javascript
         * values({one: 1, two: 2}); // -> [1, 2]
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * each 
         */

        function exports(obj)
        {
            var ret = [];

            each(obj, function (val) { ret.push(val) });

            return ret;
        }

        return exports;
    })();

    /* ------------------------------ contain ------------------------------ */

    _.contain = (function ()
    {
        /* Check if the value is present in the list.
         *
         * |Name  |Type        |Desc                                |
         * |------|------------|------------------------------------|
         * |array |array object|Target list                         |
         * |value |*           |Value to check                      |
         * |return|boolean     |True if value is present in the list|
         *
         * ```javascript
         * contain([1, 2, 3], 1); // -> true
         * contain({a: 1, b: 2}, 1); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * idxOf isArrLike values 
         */

        function exports(arr, val)
        {
            if (!isArrLike(arr)) arr = values(arr);

            return idxOf(arr, val) >= 0;
        }

        return exports;
    })();

    /* ------------------------------ isMatch ------------------------------ */

    var isMatch = _.isMatch = (function ()
    {
        /* Check if keys and values in src are contained in obj.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |obj   |object |Object to inspect                 |
         * |src   |object |Object of property values to match|
         * |return|boolean|True if object is match           |
         *
         * ```javascript
         * isMatch({a: 1, b: 2}, {a: 1}); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * keys 
         */

        function exports(obj, src)
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
        }

        return exports;
    })();

    /* ------------------------------ isStr ------------------------------ */

    var isStr = _.isStr = (function ()
    {
        /* Check if value is a string primitive.
         *
         * |Name  |Type   |Desc                               |
         * |------|-------|-----------------------------------|
         * |val   |*      |Value to check                     |
         * |return|boolean|True if value is a string primitive|
         *
         * ```javascript
         * isStr('eris'); // -> true
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * objToStr 
         */

        function exports(val)
        {
            return objToStr(val) === '[object String]';
        }

        return exports;
    })();

    /* ------------------------------ last ------------------------------ */

    _.last = (function ()
    {
        /* Get the last element of array.
         *
         * |Name  |Type |Desc                     |
         * |------|-----|-------------------------|
         * |arr   |array|The array to query       |
         * |return|*    |The last element of array|
         *
         * ```javascript
         * last([1, 2]); // -> 2
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(arr)
        {
            var len = arr ? arr.length : 0;

            if (len) return arr[len - 1];
        }

        return exports;
    })();

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim = _.ltrim = (function ()
    {
        /* Remove chars or white-spaces from beginning of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * ltrim(' abc  '); // -> 'abc  '
         * ltrim('_abc_', '_'); // -> 'abc_'
         * ltrim('_abc_', ['a', '_']); // -> 'bc_'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var regSpace = /^\s+/;

        function exports(str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            var start = 0,
                len = str.length,
                charLen = chars.length,
                found = true,
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

            return start >= len ? '' : str.substr(start, len);
        }

        return exports;
    })();

    /* ------------------------------ matcher ------------------------------ */

    var matcher = _.matcher = (function ()
    {
        /* Return a predicate function that checks if attrs are contained in an object.
         *
         * |Name  |Type    |Desc                              |
         * |------|--------|----------------------------------|
         * |attrs |object  |Object of property values to match|
         * |return|function|New predicate function            |
         *
         * ```javascript
         * var objects = [
         *     {a: 1, b: 2, c: 3 },
         *     {a: 4, b: 5, c: 6 }
         * ];
         * filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * extendOwn isMatch 
         */

        function exports(attrs)
        {
            attrs = extendOwn({}, attrs);

            return function (obj)
            {
                return isMatch(obj, attrs);
            };
        }

        return exports;
    })();

    /* ------------------------------ safeCb ------------------------------ */

    var safeCb = _.safeCb = (function (exports)
    {
        /* Create callback based on input value.
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isFn isObj optimizeCb matcher identity 
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

    var map = _.map = (function ()
    {
        /* Create an array of values by running each element in collection through iteratee.
         *
         * |Name    |Type        |Desc                          |
         * |--------|------------|------------------------------|
         * |obj     |array object|Collection to iterate over    |
         * |iteratee|function    |Function invoked per iteration|
         * |[ctx]   |*           |Function context              |
         * |return  |array       |New mapped array              |
         *
         * ```javascript
         * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * safeCb keys isArrLike 
         */

        function exports(obj, iteratee, ctx)
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
        }

        return exports;
    })();

    /* ------------------------------ noop ------------------------------ */

    var noop = _.noop = (function ()
    {
        /* A no-operation function.
         *
         * ```javascript
         * noop(); // Does nothing
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports() {}

        return exports;
    })();

    /* ------------------------------ mkdir ------------------------------ */

    _.mkdir = (function ()
    {
        /* Recursively create directories.
         *
         * |Name       |Type    |Desc               |
         * |-----------|--------|-------------------|
         * |dir        |string  |Directory to create|
         * |[mode=0777]|number  |Directory mode     |
         * |callback   |function|Callback           |
         *
         * ```javascript
         * mkdir('/tmp/foo/bar/baz', function (err)
         * {
         *     if (err) console.log(err);
         *     else console.log('Done');
         * });
         * ```
         */

        /* module
         * env: node
         * test: node
         */

        /* dependencies
         * isFn noop 
         */

        var fs = require('fs'),
            path = require('path');

        var _0777 = parseInt('0777', 8);

        function exports(p, mode, cb)
        {
            if (isFn(mode))
            {
                cb = mode;
                mode = _0777;
            }
            cb = cb || noop;
            p = path.resolve(p);

            fs.mkdir(p, mode, function (err)
            {
                if (!err) return cb();

                switch (err.code)
                {
                    case 'ENOENT':
                        exports(path.dirname(p), mode, function (err)
                        {
                            if (err) return cb(err);

                            exports(p, mode, cb)
                        });
                        break;
                    default:
                        fs.stat(p, function (errStat, stat)
                        {
                            if (errStat || !stat.isDirectory()) return cb(errStat);

                            cb();
                        });
                }
            });
        }

        return exports;
    })();

    /* ------------------------------ nextTick ------------------------------ */

    var nextTick = _.nextTick = (function (exports)
    {
        /* Next tick for both node and browser.
         *
         * |Name|Type    |Desc            |
         * |----|--------|----------------|
         * |cb  |function|Function to call|
         *
         * Use process.nextTick if available.
         *
         * Otherwise setImmediate or setTimeout is used as fallback.
         *
         * ```javascript
         * nextTick(function ()
         * {
         *     // Do something...
         * });
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        if (typeof process === 'object' && process.nextTick)
        {
            exports = process.nextTick;
        } else if (typeof setImmediate === 'function')
        {
            exports = function (cb) { setImmediate(ensureCallable(cb)) }
        } else
        {
            exports = function (cb) { setTimeout(ensureCallable(cb), 0) };
        }

        function ensureCallable(fn)
        {
            if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');

            return fn;
        }

        return exports;
    })({});

    /* ------------------------------ parallel ------------------------------ */

    _.parallel = (function ()
    {
        /* Run an array of functions in parallel.
         *
         * |Name |Type    |Desc                   |
         * |-----|--------|-----------------------|
         * |tasks|array   |Array of functions     |
         * |[cb] |function|Callback once completed|
         *
         * ```javascript
         * parallel([
         *     function(cb)
         *     {
         *         setTimeout(function () { cb(null, 'one') }, 200);
         *     },
         *     function(cb)
         *     {
         *         setTimeout(function () { cb(null, 'two') }, 100);
         *     }
         * ], function (err, results)
         * {
         *     // results -> ['one', 'two']
         * });
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * noop each nextTick 
         */

        function exports(tasks, cb)
        {
            cb = cb || noop;

            var results = [],
                pending = tasks.length;

            if (!pending) return done(null);

            each(tasks, function (task, i)
            {
                task(function (err, result) { taskCb(i, err, result) });
            });

            function taskCb(i, err, result)
            {
                results[i] = result;
                if (--pending === 0 || err) done(err);
            }

            function done(err)
            {
                nextTick(function ()
                {
                    cb(err, results);
                    cb = noop;
                });
            }
        }

        return exports;
    })();

    /* ------------------------------ restArgs ------------------------------ */

    var restArgs = _.restArgs = (function ()
    {
        /* This accumulates the arguments passed into an array, after a given index.
         *
         * |Name      |Type    |Desc                                   |
         * |----------|--------|---------------------------------------|
         * |function  |function|Function that needs rest parameters    |
         * |startIndex|number  |The start index to accumulates         |
         * |return    |function|Generated function with rest parameters|
         *
         * ```javascript
         * var paramArr = _.restArgs(function (rest) { return rest });
         * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(fn, startIdx)
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
        }

        return exports;
    })();

    /* ------------------------------ toArr ------------------------------ */

    var toArr = _.toArr = (function ()
    {
        /* Convert value to an array.
         *
         * |Name  |Type |Desc            |
         * |------|-----|----------------|
         * |val   |*    |Value to convert|
         * |return|array|Converted array |
         *
         * ```javascript
         * toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
         * toArr('abc'); // -> ['abc']
         * toArr(1); // -> [1]
         * toArr(null); // -> []
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * isArrLike map isArr isStr 
         */

        function exports(val)
        {
            if (!val) return [];

            if (isArr(val)) return val;

            if (isArrLike(val) && !isStr(val)) return map(val);

            return [val];
        }

        return exports;
    })();

    /* ------------------------------ partial ------------------------------ */

    _.partial = (function (exports)
    {
        /* Partially apply a function by filling in given arguments.
         *
         * |Name       |Type    |Desc                                    |
         * |-----------|--------|----------------------------------------|
         * |fn         |function|Function to partially apply arguments to|
         * |...partials|*       |Arguments to be partially applied       |
         * |return     |function|New partially applied function          |
         *
         * ```javascript
         * var sub5 = partial(function (a, b) { return b - a }, 5);
         * sub(20); // -> 15
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * restArgs toArr 
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

    /* ------------------------------ toStr ------------------------------ */

    var toStr = _.toStr = (function ()
    {
        /* Convert value to a string.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |val   |*     |Value to convert|
         * |return|string|Resulted string |
         *
         * ```javascript
         * toStr(null); // -> ''
         * toStr(1); // -> '1'
         * toStr(false); // -> 'false'
         * toStr([1, 2, 3]); // -> '1,2,3'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        function exports(val)
        {
            return val == null ? '' : val.toString();
        }

        return exports;
    })();

    /* ------------------------------ rpad ------------------------------ */

    _.rpad = (function ()
    {
        /* Pad string on the right side if it's shorter than length.
         *
         * |Name  |Type  |Desc                  |
         * |------|------|----------------------|
         * |str   |string|String to pad         |
         * |len   |number|Padding length        |
         * |chars |string|String used as padding|
         * |return|string|Resulted string       |
         *
         * ```javascript
         * rpad('a', 5); // -> 'a    '
         * rpad('a', 5, '-'); // -> 'a----'
         * rpad('abc', 3, '-'); // -> 'abc'
         * rpad('abc', 5, 'ab'); // -> 'abcab'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * repeat toStr 
         */

        function exports(str, len, chars)
        {
            str = toStr(str);

            var strLen = str.length;

            chars = chars || ' ';

            if (strLen < len) str = (str + repeat(chars, len - strLen)).slice(0, len);

            return str;
        }

        return exports;
    })();

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim = _.rtrim = (function ()
    {
        /* Remove chars or white-spaces from end of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * rtrim(' abc  '); // -> ' abc'
         * rtrim('_abc_', '_'); // -> '_abc'
         * rtrim('_abc_', ['c', '_']); // -> '_ab'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        var regSpace = /\s+$/;

        function exports(str, chars)
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
        }

        return exports;
    })();

    /* ------------------------------ trim ------------------------------ */

    var trim = _.trim = (function ()
    {
        /* Remove chars or white-spaces from beginning end of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         *
         * ```javascript
         * trim(' abc  '); // -> 'abc'
         * trim('_abc_', '_'); // -> 'abc'
         * trim('_abc_', ['a', 'c', '_']); // -> 'b'
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * ltrim rtrim 
         */

        var regSpace = /^\s+|\s+$/g;

        function exports(str, chars)
        {
            if (chars == null) return str.replace(regSpace, '');

            return ltrim(rtrim(str, chars), chars);
        }

        return exports;
    })();

    /* ------------------------------ extractBlockCmts ------------------------------ */

    _.extractBlockCmts = (function ()
    {
        /* Extract block comments from source code.
         *
         * |Name  |Type  |Desc             |
         * |------|------|-----------------|
         * |str   |string|String to extract|
         * |return|array |Block comments   |
         *
         * ```javascript
         * extractBlockCmts('\/*eris*\/'); // -> ['eris']
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * map trim 
         */

        var regBlockCmt = /(\/\*[\s\S]*?\*\/)/mg;

        function exports(str)
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
        }

        return exports;
    })();

    /* ------------------------------ waterfall ------------------------------ */

    _.waterfall = (function ()
    {
        /* Run an array of functions in series.
         *
         * |Name |Type    |Desc                   |
         * |-----|--------|-----------------------|
         * |tasks|array   |Array of functions     |
         * |[cb] |function|Callback once completed|
         *
         * ```javascript
         * waterfall([
         *     function (cb)
         *     {
         *         cb(null, 'one');
         *     },
         *     function (arg1, cb)
         *     {
         *         // arg1 -> 'one'
         *         cb(null, 'done');
         *     }
         * ], function (err, result)
         * {
         *     // result -> 'done'
         * });
         * ```
         */

        /* module
         * env: all
         * test: all
         */

        /* dependencies
         * noop nextTick restArgs 
         */

        function exports(tasks, cb)
        {
            cb = cb || noop;

            var current = 0;

            var taskCb = restArgs(function (err, args)
            {
                if (++current >= tasks.length || err)
                {
                    args.unshift(err);
                    nextTick(function () { cb.apply(null, args) });
                } else
                {
                    args.push(taskCb);
                    tasks[current].apply(null, args);
                }
            });

            if (tasks.length)
            {
                tasks[0](taskCb);
            } else
            {
                nextTick(function () { cb(null) });
            }
        }

        return exports;
    })();

    return _;
})();