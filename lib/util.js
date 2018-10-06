// Built by eustia.
"use strict";

var _ = {};

/* ------------------------------ inherits ------------------------------ */

var inherits = _.inherits = (function () {
    /* Inherit the prototype methods from one constructor into another.
     *
     * |Name      |Type    |Desc       |
     * |----------|--------|-----------|
     * |Class     |function|Child Class|
     * |SuperClass|function|Super Class|
     *
     * ```javascript
     * function People(name)
     * {
     *     this._name = name;
     * }
     * People.prototype = {
     *     getName: function ()
     *     {
     *         return this._name;
     *     }
     * };
     * function Student(name)
     * {
     *     this._name = name;
     * }
     * inherits(Student, People);
     * var s = new Student('RedHood');
     * s.getName(); // -> 'RedHood'
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    function exports(Class, SuperClass) {
        if (objCreate) return (Class.prototype = objCreate(SuperClass.prototype));

        noop.prototype = SuperClass.prototype;
        Class.prototype = new noop();
    }

    var objCreate = Object.create;

    function noop() {}

    return exports;
})();

/* ------------------------------ has ------------------------------ */

var has = _.has = (function () {
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

    /* typescript
     * export declare function has(obj: {}, key: string): boolean
     */

    var hasOwnProp = Object.prototype.hasOwnProperty;

    function exports(obj, key) {
        return hasOwnProp.call(obj, key);
    }

    return exports;
})();

/* ------------------------------ slice ------------------------------ */

var slice = _.slice = (function () {
    /* Create slice of source array or array-like object.
     *
     * |Name              |Type  |Desc                      |
     * |------------------|------|--------------------------|
     * |array             |array |Array to slice            |
     * |[start=0]         |number|Start position            |
     * |[end=array.length]|number|End position, not included|
     *
     * ```javascript
     * slice([1, 2, 3, 4], 1, 2); // -> [2]
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    function exports(arr, start, end) {
        var len = arr.length;

        if (start == null) {
            start = 0;
        } else if (start < 0) {
            start = Math.max(len + start, 0);
        } else {
            start = Math.min(start, len);
        }

        if (end == null) {
            end = len;
        } else if (end < 0) {
            end = Math.max(len + end, 0);
        } else {
            end = Math.min(end, len);
        }

        var ret = [];
        while (start < end) ret.push(arr[start++]);

        return ret;
    }

    return exports;
})();

/* ------------------------------ isObj ------------------------------ */

var isObj = _.isObj = (function () {
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

    /* typescript
     * export declare function isObj(val: any): boolean
     */

    function exports(val) {
        var type = typeof val;

        return !!val && (type === 'function' || type === 'object');
    }

    return exports;
})();

/* ------------------------------ nextTick ------------------------------ */

var nextTick = _.nextTick = (function (exports) {
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

    /* typescript
     * export declare function nextTick(cb: (...args: any[]) => void): void
     */

    if (typeof process === 'object' && process.nextTick) {
        exports = process.nextTick;
    } else if (typeof setImmediate === 'function') {
        exports = function(cb) {
            setImmediate(ensureCallable(cb));
        };
    } else {
        exports = function(cb) {
            setTimeout(ensureCallable(cb), 0);
        };
    }

    function ensureCallable(fn) {
        if (typeof fn !== 'function')
            throw new TypeError(fn + ' is not a function');

        return fn;
    }

    return exports;
})({});

/* ------------------------------ noop ------------------------------ */

var noop = _.noop = (function () {
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

    /* typescript
     * export declare function noop(): void
     */

    function exports() {}

    return exports;
})();

/* ------------------------------ allKeys ------------------------------ */

var allKeys = _.allKeys = (function () {
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

    function exports(obj) {
        var ret = [],
            key;

        for (key in obj) ret.push(key);

        return ret;
    }

    return exports;
})();

/* ------------------------------ before ------------------------------ */

var before = _.before = (function () {
    /* Create a function that invokes less than n times.
     *
     * |Name  |Type    |Desc                                            |
     * |------|--------|------------------------------------------------|
     * |n     |number  |Number of calls at which fn is no longer invoked|
     * |fn    |function|Function to restrict                            |
     * |return|function|New restricted function                         |
     *
     * Subsequent calls to the created function return the result of the last fn invocation.
     *
     * ```javascript
     * $(element).on('click', before(5, function() {}));
     * // -> allow function to be call 4 times at last.
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    function exports(n, fn) {
        var memo;

        return function() {
            if (--n > 0) memo = fn.apply(this, arguments);
            if (n <= 1) fn = null;

            return memo;
        };
    }

    return exports;
})();

/* ------------------------------ restArgs ------------------------------ */

var restArgs = _.restArgs = (function () {
    /* This accumulates the arguments passed into an array, after a given index.
     *
     * |Name      |Type    |Desc                                   |
     * |----------|--------|---------------------------------------|
     * |function  |function|Function that needs rest parameters    |
     * |startIndex|number  |The start index to accumulates         |
     * |return    |function|Generated function with rest parameters|
     *
     * ```javascript
     * var paramArr = restArgs(function (rest) { return rest });
     * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    function exports(fn, startIdx) {
        startIdx = startIdx == null ? fn.length - 1 : +startIdx;

        return function() {
            var len = Math.max(arguments.length - startIdx, 0),
                rest = new Array(len),
                i;

            for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

            // Call runs faster than apply.
            switch (startIdx) {
                case 0:
                    return fn.call(this, rest);
                case 1:
                    return fn.call(this, arguments[0], rest);
                case 2:
                    return fn.call(this, arguments[0], arguments[1], rest);
            }

            var args = new Array(startIdx + 1);

            for (i = 0; i < startIdx; i++) args[i] = arguments[i];

            args[startIdx] = rest;

            return fn.apply(this, args);
        };
    }

    return exports;
})();

/* ------------------------------ bind ------------------------------ */

var bind = _.bind = (function (exports) {
    /* Create a function bound to a given object.
     *
     * |Name     |Type    |Desc                    |
     * |---------|--------|------------------------|
     * |fn       |function|Function to bind        |
     * |ctx      |*       |This binding of given fn|
     * |[...rest]|*       |Optional arguments      |
     * |return   |function|New bound function      |
     *
     * ```javascript
     * var fn = bind(function (msg)
     * {
     *     console.log(this.name + ':' + msg);
     * }, {name: 'eustia'}, 'I am a utility library.');
     * fn(); // -> 'eustia: I am a utility library.'
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * restArgs 
     */

    exports = restArgs(function(fn, ctx, rest) {
        return restArgs(function(callArgs) {
            return fn.apply(ctx, rest.concat(callArgs));
        });
    });

    return exports;
})({});

/* ------------------------------ idxOf ------------------------------ */

var idxOf = _.idxOf = (function () {
    /* Get the index at which the first occurrence of value.
     *
     * |Name     |Type  |Desc                |
     * |---------|------|--------------------|
     * |arr      |array |Array to search     |
     * |val      |*     |Value to search for |
     * |fromIdx=0|number|Index to search from|
     *
     * ```javascript
     * idxOf([1, 2, 1, 2], 2, 2); // -> 3
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    function exports(arr, val, fromIdx) {
        return Array.prototype.indexOf.call(arr, val, fromIdx);
    }

    return exports;
})();

/* ------------------------------ isUndef ------------------------------ */

var isUndef = _.isUndef = (function () {
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

    /* typescript
     * export declare function isUndef(val: any): boolean
     */

    function exports(val) {
        return val === void 0;
    }

    return exports;
})();

/* ------------------------------ optimizeCb ------------------------------ */

var optimizeCb = _.optimizeCb = (function () {
    /* Used for function context binding.
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * isUndef 
     */

    function exports(fn, ctx, argCount) {
        if (isUndef(ctx)) return fn;

        switch (argCount == null ? 3 : argCount) {
            case 1:
                return function(val) {
                    return fn.call(ctx, val);
                };
            case 3:
                return function(val, idx, collection) {
                    return fn.call(ctx, val, idx, collection);
                };
            case 4:
                return function(accumulator, val, idx, collection) {
                    return fn.call(ctx, accumulator, val, idx, collection);
                };
        }

        return function() {
            return fn.apply(ctx, arguments);
        };
    }

    return exports;
})();

/* ------------------------------ identity ------------------------------ */

var identity = _.identity = (function () {
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

    function exports(val) {
        return val;
    }

    return exports;
})();

/* ------------------------------ repeat ------------------------------ */

var repeat = _.repeat = (function (exports) {
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

    exports = function(str, n) {
        var ret = '';

        if (n < 1) return '';

        while (n > 0) {
            if (n & 1) ret += str;
            n >>= 1;
            str += str;
        }

        return ret;
    };

    return exports;
})({});

/* ------------------------------ objToStr ------------------------------ */

var objToStr = _.objToStr = (function () {
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

    function exports(val) {
        return ObjToStr.call(val);
    }

    return exports;
})();

/* ------------------------------ isArr ------------------------------ */

var isArr = _.isArr = (function (exports) {
    /* Check if value is an `Array` object.
     *
     * |Name  |Type   |Desc                              |
     * |------|-------|----------------------------------|
     * |val   |*      |Value to check                    |
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

    /* typescript
     * export declare function isArr(val: any): boolean
     */

    /* dependencies
     * objToStr 
     */

    exports =
        Array.isArray ||
        function(val) {
            return objToStr(val) === '[object Array]';
        };

    return exports;
})({});

/* ------------------------------ castPath ------------------------------ */

var castPath = _.castPath = (function () {
    /* Cast value into a property path array.
     *
     * |Name  |Type  |Desc               |
     * |------|------|-------------------|
     * |str   |*     |Value to inspect   |
     * |[obj] |object|Object to query    |
     * |return|array |Property path array|
     * 
     * ```javascript
     * castPath('a.b.c'); // -> ['a', 'b', 'c']
     * castPath(['a']); // -> ['a']
     * castPath('a[0].b'); // -> ['a', '0', 'b']
     * castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * has isArr 
     */

    function exports(str, obj) {
        if (isArr(str)) return str;
        if (obj && has(obj, str)) return [str];

        var ret = [];

        str.replace(regPropName, function(match, number, quote, str) {
            ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
        });

        return ret;
    }

    // Lodash _stringToPath
    var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        regEscapeChar = /\\(\\)?/g;

    return exports;
})();

/* ------------------------------ safeGet ------------------------------ */

var safeGet = _.safeGet = (function () {
    /* Get object property, don't throw undefined error.
     *
     * |Name  |Type        |Desc                     |
     * |------|------------|-------------------------|
     * |obj   |object      |Object to query          |
     * |path  |array string|Path of property to get  |
     * |return|*           |Target value or undefined|
     *
     * ```javascript
     * var obj = {a: {aa: {aaa: 1}}};
     * safeGet(obj, 'a.aa.aaa'); // -> 1
     * safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
     * safeGet(obj, 'a.b'); // -> undefined
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * isUndef castPath 
     */

    function exports(obj, path) {
        path = castPath(path, obj);

        var prop;

        prop = path.shift();
        while (!isUndef(prop)) {
            obj = obj[prop];
            if (obj == null) return;
            prop = path.shift();
        }

        return obj;
    }

    return exports;
})();

/* ------------------------------ isFn ------------------------------ */

var isFn = _.isFn = (function () {
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

    /* typescript
     * export declare function isFn(val: any): boolean
     */

    /* dependencies
     * objToStr 
     */

    function exports(val) {
        var objStr = objToStr(val);

        return (
            objStr === '[object Function]' ||
            objStr === '[object GeneratorFunction]'
        );
    }

    return exports;
})();

/* ------------------------------ isMiniProgram ------------------------------ */

var isMiniProgram = _.isMiniProgram = (function (exports) {
    /* Check if running in wechat mini program.
     *
     * ```javascript
     * console.log(isMiniProgram); // -> true if running in mini program.
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * isFn 
     */

    /* eslint-disable no-undef */
    exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

    return exports;
})({});

/* ------------------------------ isNum ------------------------------ */

var isNum = _.isNum = (function () {
    /* Check if value is classified as a Number primitive or object.
     *
     * |Name  |Type   |Desc                                 |
     * |------|-------|-------------------------------------|
     * |val   |*      |Value to check                       |
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

    function exports(val) {
        return objToStr(val) === '[object Number]';
    }

    return exports;
})();

/* ------------------------------ indent ------------------------------ */_.indent = (function () {
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

    /* typescript
     * export declare function indent(str: string, char?: string, len?: number): string
     */

    /* dependencies
     * isNum isUndef repeat 
     */

    var regLineBegin = /^(?!\s*$)/gm;

    function exports(str, char, len) {
        if (isNum(char)) {
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

/* ------------------------------ isArrLike ------------------------------ */

var isArrLike = _.isArrLike = (function () {
    /* Check if value is array-like.
     *
     * |Name  |Type   |Desc                       |
     * |------|-------|---------------------------|
     * |val   |*      |Value to check             |
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
     * isNum isFn 
     */

    var MAX_ARR_IDX = Math.pow(2, 53) - 1;

    function exports(val) {
        if (!val) return false;

        var len = val.length;

        return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
    }

    return exports;
})();

/* ------------------------------ isBrowser ------------------------------ */

var isBrowser = _.isBrowser = (function (exports) {
    /* Check if running in a browser.
     *
     * ```javascript
     * console.log(isBrowser); // -> true if running in a browser
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    exports =
        typeof window === 'object' &&
        typeof document === 'object' &&
        document.nodeType === 9;

    return exports;
})({});

/* ------------------------------ root ------------------------------ */

var root = _.root = (function (exports) {
    /* Root object reference, `global` in nodeJs, `window` in browser. */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * isBrowser 
     */

    exports = isBrowser ? window : global;

    return exports;
})({});

/* ------------------------------ detectMocha ------------------------------ */

var detectMocha = _.detectMocha = (function () {
    /* Detect if mocha is running.
     *
     * ```javascript
     * detectMocha(); // -> True if mocha is running.
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * root 
     */

    function exports() {
        for (var i = 0, len = methods.length; i < len; i++) {
            var method = methods[i];

            if (typeof root[method] !== 'function') return false;
        }

        return true;
    }

    var methods = ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it'];

    return exports;
})();

/* ------------------------------ keys ------------------------------ */

var keys = _.keys = (function (exports) {
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
     * has detectMocha 
     */

    if (Object.keys && !detectMocha()) {
        exports = Object.keys;
    } else {
        exports = function(obj) {
            var ret = [],
                key;

            for (key in obj) {
                if (has(obj, key)) ret.push(key);
            }

            return ret;
        };
    }

    return exports;
})({});

/* ------------------------------ each ------------------------------ */

var each = _.each = (function () {
    /* Iterate over elements of collection and invokes iteratee for each element.
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

    /* typescript
     * export declare function each(
     *     obj: {} | any[], 
     *     iteratee: (val: any, key?: string | number, obj?: {} | any[]) => void, 
     *     ctx?: any
     * ): void
     */

    /* dependencies
     * isArrLike keys optimizeCb 
     */

    function exports(obj, iteratee, ctx) {
        iteratee = optimizeCb(iteratee, ctx);

        var i, len;

        if (isArrLike(obj)) {
            for (i = 0, len = obj.length; i < len; i++) iteratee(obj[i], i, obj);
        } else {
            var _keys = keys(obj);
            for (i = 0, len = _keys.length; i < len; i++) {
                iteratee(obj[_keys[i]], _keys[i], obj);
            }
        }

        return obj;
    }

    return exports;
})();

/* ------------------------------ createAssigner ------------------------------ */

var createAssigner = _.createAssigner = (function () {
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

    function exports(keysFn, defaults) {
        return function(obj) {
            each(arguments, function(src, idx) {
                if (idx === 0) return;

                var keys = keysFn(src);

                each(keys, function(key) {
                    if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                });
            });

            return obj;
        };
    }

    return exports;
})();

/* ------------------------------ defaults ------------------------------ */_.defaults = (function (exports) {
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

    /* typescript
     * export declare function defaults(obj: {}, ...src: any[]): {}
     */

    /* dependencies
     * createAssigner allKeys 
     */

    exports = createAssigner(allKeys, true);

    return exports;
})({});

/* ------------------------------ extend ------------------------------ */

var extend = _.extend = (function (exports) {
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

/* ------------------------------ clone ------------------------------ */_.clone = (function () {
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

    function exports(obj) {
        if (!isObj(obj)) return obj;

        return isArr(obj) ? obj.slice() : extend({}, obj);
    }

    return exports;
})();

/* ------------------------------ values ------------------------------ */

var values = _.values = (function () {
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

    function exports(obj) {
        var ret = [];

        each(obj, function(val) {
            ret.push(val);
        });

        return ret;
    }

    return exports;
})();

/* ------------------------------ contain ------------------------------ */_.contain = (function () {
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

    /* typescript
     * export declare function contain(arr: any[], val: any): boolean
     */

    /* dependencies
     * idxOf isArrLike values 
     */

    function exports(arr, val) {
        if (!isArrLike(arr)) arr = values(arr);

        return idxOf(arr, val) >= 0;
    }

    return exports;
})();

/* ------------------------------ extendOwn ------------------------------ */

var extendOwn = _.extendOwn = (function (exports) {
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

/* ------------------------------ isMatch ------------------------------ */

var isMatch = _.isMatch = (function () {
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

    function exports(obj, src) {
        var _keys = keys(src),
            len = _keys.length;

        if (obj == null) return !len;

        obj = Object(obj);

        for (var i = 0; i < len; i++) {
            var key = _keys[i];
            if (src[key] !== obj[key] || !(key in obj)) return false;
        }

        return true;
    }

    return exports;
})();

/* ------------------------------ isStr ------------------------------ */

var isStr = _.isStr = (function () {
    /* Check if value is a string primitive.
     *
     * |Name  |Type   |Desc                               |
     * |------|-------|-----------------------------------|
     * |val   |*      |Value to check                     |
     * |return|boolean|True if value is a string primitive|
     *
     * ```javascript
     * isStr('licia'); // -> true
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* typescript
     * export declare function isStr(val: any): boolean
     */

    /* dependencies
     * objToStr 
     */

    function exports(val) {
        return objToStr(val) === '[object String]';
    }

    return exports;
})();

/* ------------------------------ last ------------------------------ */_.last = (function () {
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

    function exports(arr) {
        var len = arr ? arr.length : 0;

        if (len) return arr[len - 1];
    }

    return exports;
})();

/* ------------------------------ ltrim ------------------------------ */

var ltrim = _.ltrim = (function () {
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

    function exports(str, chars) {
        if (chars == null) return str.replace(regSpace, '');

        var start = 0,
            len = str.length,
            charLen = chars.length,
            found = true,
            i,
            c;

        while (found && start < len) {
            found = false;
            i = -1;
            c = str.charAt(start);

            while (++i < charLen) {
                if (c === chars[i]) {
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

var matcher = _.matcher = (function () {
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

    function exports(attrs) {
        attrs = extendOwn({}, attrs);

        return function(obj) {
            return isMatch(obj, attrs);
        };
    }

    return exports;
})();

/* ------------------------------ safeCb ------------------------------ */

var safeCb = _.safeCb = (function (exports) {
    /* Create callback based on input value.
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * isFn isObj optimizeCb matcher identity 
     */

    exports = function(val, ctx, argCount) {
        if (val == null) return identity;

        if (isFn(val)) return optimizeCb(val, ctx, argCount);

        if (isObj(val)) return matcher(val);

        return function(key) {
            return function(obj) {
                return obj == null ? undefined : obj[key];
            };
        };
    };

    return exports;
})({});

/* ------------------------------ map ------------------------------ */

var map = _.map = (function () {
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

    /* typescript
     * export declare function map(
     *     obj: {} | any[],
     *     iteratee: (val: any, idx?: number | string, obj?: {} | any[]) => boolean,
     *     ctx?: any
     * ): any[]
     */

    /* dependencies
     * safeCb keys isArrLike 
     */

    function exports(obj, iteratee, ctx) {
        iteratee = safeCb(iteratee, ctx);

        var _keys = !isArrLike(obj) && keys(obj),
            len = (_keys || obj).length,
            results = Array(len);

        for (var i = 0; i < len; i++) {
            var curKey = _keys ? _keys[i] : i;
            results[i] = iteratee(obj[curKey], curKey, obj);
        }

        return results;
    }

    return exports;
})();

/* ------------------------------ toArr ------------------------------ */

var toArr = _.toArr = (function () {
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

    /* typescript
     * export declare function toArr(val: any): any[]
     */

    /* dependencies
     * isArrLike map isArr isStr 
     */

    function exports(val) {
        if (!val) return [];

        if (isArr(val)) return val;

        if (isArrLike(val) && !isStr(val)) return map(val);

        return [val];
    }

    return exports;
})();

/* ------------------------------ Class ------------------------------ */

var Class = _.Class = (function () {
    /* Create JavaScript class.
     *
     * |Name     |Type    |Desc                             |
     * |---------|--------|---------------------------------|
     * |methods  |object  |Public methods                   |
     * |[statics]|object  |Static methods                   |
     * |return   |function|Function used to create instances|
     *
     * ```javascript
     * var People = Class({
     *     initialize: function People(name, age)
     *     {
     *         this.name = name;
     *         this.age = age;
     *     },
     *     introduce: function ()
     *     {
     *         return 'I am ' + this.name + ', ' + this.age + ' years old.';
     *     }
     * });
     *
     * var Student = People.extend({
     *     initialize: function Student(name, age, school)
     *     {
     *         this.callSuper(People, 'initialize', arguments);
     *
     *         this.school = school;
     *     },
     *     introduce: function ()
     *     {
     *         return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
     *     }
     * }, {
     *     is: function (obj)
     *     {
     *         return obj instanceof Student;
     *     }
     * });
     *
     * var a = new Student('allen', 17, 'Hogwarts');
     * a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
     * Student.is(a); // -> true
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * extend toArr inherits safeGet isMiniProgram 
     */

    function exports(methods, statics) {
        return Base.extend(methods, statics);
    }

    function makeClass(parent, methods, statics) {
        statics = statics || {};
        var className =
            methods.className || safeGet(methods, 'initialize.name') || '';
        delete methods.className;

        var ctor;
        if (isMiniProgram) {
            ctor = function() {
                var args = toArr(arguments);
                return this.initialize
                    ? this.initialize.apply(this, args) || this
                    : this;
            };
        } else {
            ctor = new Function(
                'toArr',
                'return function ' +
                    className +
                    '()' +
                    '{' +
                    'var args = toArr(arguments);' +
                    'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                    '};'
            )(toArr);
        }

        inherits(ctor, parent);
        ctor.prototype.constructor = ctor;

        ctor.extend = function(methods, statics) {
            return makeClass(ctor, methods, statics);
        };
        ctor.inherits = function(Class) {
            inherits(ctor, Class);
        };
        ctor.methods = function(methods) {
            extend(ctor.prototype, methods);
            return ctor;
        };
        ctor.statics = function(statics) {
            extend(ctor, statics);
            return ctor;
        };

        ctor.methods(methods).statics(statics);

        return ctor;
    }

    var Base = (exports.Base = makeClass(Object, {
        className: 'Base',
        callSuper: function(parent, name, args) {
            var superMethod = parent.prototype[name];

            return superMethod.apply(this, args);
        },
        toString: function() {
            return this.constructor.name;
        }
    }));

    return exports;
})();

/* ------------------------------ some ------------------------------ */

var some = _.some = (function () {
    /* Check if predicate return truthy for any element.
     *
     * |Name     |Type        |Desc                                          |
     * |---------|------------|----------------------------------------------|
     * |obj      |array object|Collection to iterate over                    |
     * |predicate|function    |Function to invoked per iteration             |
     * |ctx      |*           |Predicate context                             |
     * |return   |boolean     |True if any element passes the predicate check|
     *
     * ```javascript
     * some([2, 5], function (val)
     * {
     *     return val % 2 === 0;
     * }); // -> true
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * safeCb isArrLike keys 
     */

    function exports(obj, predicate, ctx) {
        predicate = safeCb(predicate, ctx);

        var _keys = !isArrLike(obj) && keys(obj),
            len = (_keys || obj).length;

        for (var i = 0; i < len; i++) {
            var key = _keys ? _keys[i] : i;
            if (predicate(obj[key], key, obj)) return true;
        }

        return false;
    }

    return exports;
})();

/* ------------------------------ mkdir ------------------------------ */_.mkdir = (function () {
    /* Recursively create directories.
     *
     * |Name       |Type    |Desc               |
     * |-----------|--------|-------------------|
     * |dir        |string  |Directory to create|
     * |[mode=0777]|number  |Directory mode     |
     * |[callback] |function|Callback           |
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

    /* typescript
     * export declare function mkdir(
     *     dir: string, 
     *     mode?: number, 
     *     cb?: (err: Error) => void
     * ): void
     */

    /* dependencies
     * isFn noop 
     */

    var fs = require('fs'),
        path = require('path');

    var _0777 = parseInt('0777', 8);

    function exports(p, mode, cb) {
        if (isFn(mode)) {
            cb = mode;
            mode = _0777;
        }
        cb = cb || noop;
        p = path.resolve(p);

        fs.mkdir(p, mode, function(err) {
            if (!err) return cb();

            switch (err.code) {
                case 'ENOENT':
                    exports(path.dirname(p), mode, function(err) {
                        if (err) return cb(err);

                        exports(p, mode, cb);
                    });
                    break;
                default:
                    fs.stat(p, function(errStat, stat) {
                        if (errStat || !stat.isDirectory()) return cb(errStat);

                        cb();
                    });
            }
        });
    }

    return exports;
})();

/* ------------------------------ partial ------------------------------ */

var partial = _.partial = (function (exports) {
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

    exports = restArgs(function(fn, partials) {
        return function() {
            var args = [];

            args = args.concat(partials);
            args = args.concat(toArr(arguments));

            return fn.apply(this, args);
        };
    });

    return exports;
})({});

/* ------------------------------ once ------------------------------ */

var once = _.once = (function (exports) {
    /* Create a function that invokes once.
     *
     * |Name  |Type    |Desc                   |
     * |------|--------|-----------------------|
     * |fn    |function|Function to restrict   |
     * |return|function|New restricted function|
     *
     * ```javascript
     * function init() {};
     * var initOnce = once(init);
     * initOnce();
     * initOnce(); // -> init is invoked once
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * partial before 
     */

    exports = partial(before, 2);

    return exports;
})({});

/* ------------------------------ Emitter ------------------------------ */

var Emitter = _.Emitter = (function (exports) {
    /* Event emitter class which provides observer pattern.
     *
     * ### on
     *
     * Bind event.
     *
     * ### off
     *
     * Unbind event.
     *
     * ### once
     *
     * Bind event that trigger once.
     *
     * |Name    |Type    |Desc          |
     * |--------|--------|--------------|
     * |event   |string  |Event name    |
     * |listener|function|Event listener|
     *
     * ### emit
     *
     * Emit event.
     *
     * |Name   |Type  |Desc                        |
     * |-------|------|----------------------------|
     * |event  |string|Event name                  |
     * |...args|*     |Arguments passed to listener|
     *
     * ### mixin
     *
     * [static] Mixin object class methods.
     *
     * |Name|Type  |Desc           |
     * |----|------|---------------|
     * |obj |object|Object to mixin|
     *
     * ```javascript
     * var event = new Emitter();
     * event.on('test', function () { console.log('test') });
     * event.emit('test'); // Logs out 'test'.
     * Emitter.mixin({});
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * Class has each slice once 
     */

    exports = Class(
        {
            initialize: function Emitter() {
                this._events = this._events || {};
            },
            on: function(event, listener) {
                this._events[event] = this._events[event] || [];
                this._events[event].push(listener);

                return this;
            },
            off: function(event, listener) {
                if (!has(this._events, event)) return;

                this._events[event].splice(
                    this._events[event].indexOf(listener),
                    1
                );

                return this;
            },
            once: function(event, listener) {
                this.on(event, once(listener));

                return this;
            },
            emit: function(event) {
                if (!has(this._events, event)) return;

                var args = slice(arguments, 1);

                each(
                    this._events[event],
                    function(val) {
                        val.apply(this, args);
                    },
                    this
                );

                return this;
            }
        },
        {
            mixin: function(obj) {
                each(['on', 'off', 'once', 'emit'], function(val) {
                    obj[val] = exports.prototype[val];
                });

                obj._events = obj._events || {};
            }
        }
    );

    return exports;
})({});

/* ------------------------------ State ------------------------------ */

var State = _.State = (function (exports) {
    /* Simple state machine.
     *
     * Extend from Emitter.
     *
     * ### constructor
     *
     * |Name   |Type  |Desc                  |
     * |-------|------|----------------------|
     * |initial|string|Initial state         |
     * |events |string|Events to change state|
     *
     * ### is
     *
     * Check current state.
     *
     * |Name  |Type   |Desc                                    |
     * |------|-------|----------------------------------------|
     * |value |string |State to check                          |
     * |return|boolean|True if current state equals given value|
     *
     * ```javascript
     * var state = new State('empty', {
     *     load: {from: 'empty', to: 'pause'},
     *     play: {from: 'pause', to: 'play'},
     *     pause: {from: ['play', 'empty'], to: 'pause'},
     *     unload: {from: ['play', 'pause'], to: 'empty'}
     * });
     *
     * state.is('empty'); // -> true
     * state.load();
     * state.is('pause'); // -> true
     * state.on('play', function (src)
     * {
     *     console.log(src); // -> 'eustia'
     * });
     * state.on('error', function (err, event)
     * {
     *     // Error handler
     * });
     * state.play('eustia');
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * Emitter each some toArr 
     */

    exports = Emitter.extend({
        className: 'State',
        initialize: function(initial, events) {
            this.callSuper(Emitter, 'initialize');

            this.current = initial;

            var self = this;

            each(events, function(event, key) {
                self[key] = buildEvent(key, event);
            });
        },
        is: function(state) {
            return this.current === state;
        }
    });

    function buildEvent(name, event) {
        var from = toArr(event.from),
            to = event.to;

        return function() {
            var args = toArr(arguments);
            args.unshift(name);

            var hasEvent = some(
                from,
                function(val) {
                    return this.current === val;
                },
                this
            );

            if (hasEvent) {
                this.current = to;
                this.emit.apply(this, args);
            } else {
                this.emit(
                    'error',
                    new Error(this.current + ' => ' + to + ' error'),
                    name
                );
            }
        };
    }

    return exports;
})({});

/* ------------------------------ Promise ------------------------------ */

var Promise = _.Promise = (function (exports) {
    /* Lightweight Promise implementation.
     *
     * [Promises spec](https://github.com/promises-aplus/promises-spec)
     * 
     * ```javascript
     * function get(url) 
     * {
     *     return new Promise(function (resolve, reject)
     *     {
     *         var req = new XMLHttpRequest();
     *         req.open('GET', url);
     *         req.onload = function () 
     *         {
     *             req.status == 200 ? resolve(req.reponse) : reject(Error(req.statusText));
     *         };
     *         req.onerror = function () { reject(Error('Network Error')) };
     *         req.send();
     *     });
     * }
     * 
     * get('test.json').then(function (result) 
     * {
     *     // Do something...
     * });
     * ```
     */

    /* module
     * env: all
     * test: manual
     */

    /* dependencies
     * Class isObj isFn State bind nextTick noop 
     */

    var Promise = (exports = Class(
        {
            initialize: function Promise(fn) {
                if (!isObj(this))
                    throw new TypeError('Promises must be constructed via new');
                if (!isFn(fn)) throw new TypeError(fn + ' is not a function');

                var self = this;

                this._state = new State('pending', {
                    fulfill: { from: 'pending', to: 'fulfilled' },
                    reject: { from: 'pending', to: 'rejected' },
                    adopt: { from: 'pending', to: 'adopted' }
                })
                    .on('fulfill', assignVal)
                    .on('reject', assignVal)
                    .on('adopt', assignVal);

                function assignVal(val) {
                    self._value = val;
                }

                this._handled = false;
                this._value = undefined;
                this._deferreds = [];

                doResolve(fn, this);
            },
            catch: function(onRejected) {
                return this.then(null, onRejected);
            },
            then: function(onFulfilled, onRejected) {
                var promise = new Promise(noop);

                handle(this, new Handler(onFulfilled, onRejected, promise));

                return promise;
            }
        },
        {
            all: function(arr) {
                var args = toArr(arr);

                return new Promise(function(resolve, reject) {
                    if (args.length === 0) return resolve([]);

                    var remaining = args.length;

                    function res(i, val) {
                        try {
                            if (val && (isObj(val) || isFn(val))) {
                                var then = val.then;
                                if (isFn(then)) {
                                    then.call(
                                        val,
                                        function(val) {
                                            res(i, val);
                                        },
                                        reject
                                    );

                                    return;
                                }
                            }

                            args[i] = val;

                            if (--remaining === 0) resolve(args);
                        } catch (e) {
                            reject(e);
                        }
                    }

                    for (var i = 0; i < args.length; i++) res(i, args[i]);
                });
            },
            resolve: function(val) {
                if (val && isObj(val) && val.constructor === Promise) return val;

                return new Promise(function(resolve) {
                    resolve(val);
                });
            },
            reject: function(val) {
                return new Promise(function(resolve, reject) {
                    reject(val);
                });
            },
            race: function(values) {
                return new Promise(function(resolve, reject) {
                    for (var i = 0, len = values.length; i < len; i++) {
                        values[i].then(resolve, reject);
                    }
                });
            }
        }
    ));

    var Handler = Class({
        initialize: function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled = isFn(onFulfilled) ? onFulfilled : null;
            this.onRejected = isFn(onRejected) ? onRejected : null;
            this.promise = promise;
        }
    });

    function reject(self, err) {
        self._state.reject(err);
        finale(self);
    }

    function resolve(self, val) {
        try {
            if (val === self)
                throw new TypeError('A promise cannot be resolved with itself');
            if (val && (isObj(val) || isFn(val))) {
                var then = val.then;
                if (val instanceof Promise) {
                    self._state.adopt(val);
                    return finale(self);
                }

                if (isFn(then)) return doResolve(bind(then, val), self);
            }

            self._state.fulfill(val);
            finale(self);
        } catch (e) {
            reject(self, e);
        }
    }

    function finale(self) {
        for (var i = 0, len = self._deferreds.length; i < len; i++) {
            handle(self, self._deferreds[i]);
        }

        self._deferreds = null;
    }

    function handle(self, deferred) {
        while (self._state.is('adopted')) self = self._value;

        if (self._state.is('pending')) return self._deferreds.push(deferred);

        self._handled = true;

        nextTick(function() {
            var isFulfilled = self._state.is('fulfilled');

            var cb = isFulfilled ? deferred.onFulfilled : deferred.onRejected;

            if (cb === null)
                return (isFulfilled ? resolve : reject)(
                    deferred.promise,
                    self._value
                );

            var ret;

            try {
                ret = cb(self._value);
            } catch (e) {
                return reject(deferred.promise, e);
            }

            resolve(deferred.promise, ret);
        });
    }

    function doResolve(fn, self) {
        var done = false;

        try {
            fn(
                function(val) {
                    if (done) return;
                    done = true;
                    resolve(self, val);
                },
                function(reason) {
                    if (done) return;
                    done = true;
                    reject(self, reason);
                }
            );
        } catch (e) {
            if (done) return;
            done = true;
            reject(self, e);
        }
    }

    return exports;
})({});

/* ------------------------------ promisify ------------------------------ */

var promisify = _.promisify = (function (exports) {
    /* Convert callback based functions into Promises.
     * 
     * |Name             |Type    |Desc                                  |
     * |-----------------|--------|--------------------------------------|
     * |fn               |function|Callback based function               |
     * |[multiArgs=false]|boolean |If callback has multiple success value|
     * |return           |boolean |Result function                       |
     * 
     * If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.
     * 
     * ```javascript
     * var fs = require('fs');
     * 
     * var readFile = promisify(fs.readFile);
     * readFile('test.js', 'utf-8').then(function (data) 
     * {
     *     // Do something with file content.
     * });
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* dependencies
     * restArgs root Promise 
     */

    exports = function(fn, multiArgs) {
        return restArgs(function(args) {
            return new exports.Promise(function(resolve, reject) {
                args.push(
                    restArgs(function callback(err, values) {
                        if (err) return reject(err);

                        if (!multiArgs) return resolve(values[0]);

                        resolve(values);
                    })
                );

                fn.apply(this, args);
            });
        });
    };

    exports.Promise = root.Promise || Promise;

    return exports;
})({});

/* ------------------------------ fs ------------------------------ */_.fs = (function (exports) {
    /* Promised version of node.js fs module.
     *
     * ```javascript
     * fs.readFile('test.js').then(function (data) 
     * {
     *     // Do something
     * }).catch(function (err) 
     * {
     *     // Handle errors
     * });
     * ```
     */

    /* module
     * env: node
     * test: node
     */

    /* typescript
     * export declare const fs: {
     *     readFile(path: string, encoding: string): Promise<string>
     *     readFile(path: string): Promise<Buffer>
     *     exists(path: string): Promise<boolean>
     *     unlink(path: string): Promise<void>
     *     writeFile(path: string, data: string, options?: string): Promise<void>
     *     readdir(path: string): Promise<string[]>
     *     rmdir(path: string): Promise<void>
     *     [key: string]: any
     * }
     */

    /* dependencies
     * promisify root each Promise toArr 
     */

    var fs = require('fs');

    each(
        [
            'access',
            'appendFile',
            'chmod',
            'chown',
            'close',
            'fchmod',
            'fchown',
            'fdatasync',
            'fstat',
            'fsync',
            'ftruncate',
            'futimes',
            'link',
            'lstat',
            'mkdir',
            'mkdtemp',
            'open',
            'read',
            'readFile',
            'readdir',
            'readlink',
            'realpath',
            'rename',
            'rmdir',
            'stat',
            'symlink',
            'truncate',
            'unlink',
            'utimes',
            'write',
            'writeFile'
        ],
        function(method) {
            exports[method] = promisify(fs[method]);
        }
    );

    exports.exists = function() {
        var args = toArr(arguments);

        return new exports.Promise(function(resolve) {
            args.push(resolve);
            fs.exists.apply(null, args);
        });
    };

    exports.Promise = root.Promise || Promise;

    return exports;
})({});

/* ------------------------------ parallel ------------------------------ */

var parallel = _.parallel = (function () {
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

    function exports(tasks, cb) {
        cb = cb || noop;

        var results = [],
            pending = tasks.length;

        if (!pending) return done(null);

        each(tasks, function(task, i) {
            task(function(err, result) {
                taskCb(i, err, result);
            });
        });

        function taskCb(i, err, result) {
            results[i] = result;
            if (--pending === 0 || err) done(err);
        }

        function done(err) {
            nextTick(function() {
                cb(err, results);
                cb = noop;
            });
        }
    }

    return exports;
})();

/* ------------------------------ rmdir ------------------------------ */_.rmdir = (function () {
    /* Recursively remove directories.
     *
     * |Name    |Type    |Desc               |
     * |--------|--------|-------------------|
     * |dir     |string  |Directory to remove|
     * |callback|function|Callback           |
     * 
     * ```javascript
     * rmdir('/tmp/foo/bar/baz', function (err) 
     * {
     *     if (err) console.log (err);
     *     else console.log('Done');
     * });
     * ```
     */

    /* module
     * env: node
     * test: node
     */

    /* dependencies
     * noop parallel 
     */

    var fs = require('fs'),
        path = require('path');

    function exports(p, cb) {
        cb = cb || noop;
        p = path.resolve(p);

        fs.lstat(p, function(err, stat) {
            if (err) return cb(err);

            var isDir = stat.isDirectory();

            if (!isDir) {
                return fs.unlink(p, function(err) {
                    return err ? cb(err) : cb();
                });
            }

            fs.readdir(p, function(err, files) {
                if (err) return cb(err);

                var len = files.length;

                var cbs = [];
                for (var i = 0; i < len; i++) {
                    cbs.push(
                        (function(file) {
                            return function(cb) {
                                exports(file, cb);
                            };
                        })(path.resolve(p, files[i]))
                    );
                }

                parallel(cbs, function(err) {
                    if (err) return cb(err);

                    fs.rmdir(p, function(err) {
                        return err ? cb(err) : cb();
                    });
                });
            });
        });
    }

    return exports;
})();

/* ------------------------------ toStr ------------------------------ */

var toStr = _.toStr = (function () {
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

    function exports(val) {
        return val == null ? '' : val.toString();
    }

    return exports;
})();

/* ------------------------------ rpad ------------------------------ */_.rpad = (function () {
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

    /* typescript
     * export declare function rpad(str: string, len: number, chars?: string): string
     */

    /* dependencies
     * repeat toStr 
     */

    function exports(str, len, chars) {
        str = toStr(str);

        var strLen = str.length;

        chars = chars || ' ';

        if (strLen < len) str = (str + repeat(chars, len - strLen)).slice(0, len);

        return str;
    }

    return exports;
})();

/* ------------------------------ rtrim ------------------------------ */

var rtrim = _.rtrim = (function () {
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

    function exports(str, chars) {
        if (chars == null) return str.replace(regSpace, '');

        var end = str.length - 1,
            charLen = chars.length,
            found = true,
            i,
            c;

        while (found && end >= 0) {
            found = false;
            i = -1;
            c = str.charAt(end);

            while (++i < charLen) {
                if (c === chars[i]) {
                    found = true;
                    end--;
                    break;
                }
            }
        }

        return end >= 0 ? str.substring(0, end + 1) : '';
    }

    return exports;
})();

/* ------------------------------ trim ------------------------------ */

var trim = _.trim = (function () {
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

    /* typescript
     * export declare function trim(str: string, chars?: string | string[]): string
     */

    /* dependencies
     * ltrim rtrim 
     */

    var regSpace = /^\s+|\s+$/g;

    function exports(str, chars) {
        if (chars == null) return str.replace(regSpace, '');

        return ltrim(rtrim(str, chars), chars);
    }

    return exports;
})();

/* ------------------------------ extractBlockCmts ------------------------------ */_.extractBlockCmts = (function () {
    /* Extract block comments from source code.
     *
     * |Name  |Type  |Desc             |
     * |------|------|-----------------|
     * |str   |string|String to extract|
     * |return|array |Block comments   |
     *
     * ```javascript
     * extractBlockCmts('\/*licia*\/'); // -> ['licia']
     * ```
     */

    /* module
     * env: all
     * test: all
     */

    /* typescript
     * export declare function extractBlockCmts(str: string): string[]
     */

    /* dependencies
     * map trim 
     */

    var regBlockCmt = /(\/\*[\s\S]*?\*\/)/gm;

    function exports(str) {
        var ret = str.match(regBlockCmt);

        if (!ret) return [];

        ret = map(ret, function(comment) {
            return trim(
                map(comment.split('\n'), function(line) {
                    return trim(line).replace(/^\/\*+|\*+\/$|^\*+/g, '');
                }).join('\n')
            );
        });

        return ret;
    }

    return exports;
})();

/* ------------------------------ waterfall ------------------------------ */_.waterfall = (function () {
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

    function exports(tasks, cb) {
        cb = cb || noop;

        var current = 0;

        var taskCb = restArgs(function(err, args) {
            if (++current >= tasks.length || err) {
                args.unshift(err);
                nextTick(function() {
                    cb.apply(null, args);
                });
            } else {
                args.push(taskCb);
                tasks[current].apply(null, args);
            }
        });

        if (tasks.length) {
            tasks[0](taskCb);
        } else {
            nextTick(function() {
                cb();
            });
        }
    }

    return exports;
})();

module.exports = _;