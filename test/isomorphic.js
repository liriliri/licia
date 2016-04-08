// Built by eustia.
(function(root, factory)
{
    if (typeof define === 'function' && define.amd)
    {
        define([], factory);
    } else if (typeof module === 'object' && module.exports)
    {
        module.exports = factory();
    } else { root._ = factory() }
}(this, function ()
{
    var _ = {};

    if (typeof window === 'object' && window._) _ = window._;

    /* ------------------------------ inherits ------------------------------ */

    var inherits;

    _.inherits = (function ()
    {
        // TODO

        /* function
         * inherits: Inherit the prototype methods from one constructor into another.
         * Class(function): Child Class.
         * SuperClass(function): Super Class.
         */

        var objCreate = Object.create;

        function noop() {}

        inherits = function (Class, SuperClass)
        {
            if (objCreate) return Class.prototype = objCreate(SuperClass.prototype);

            noop.prototype  = SuperClass.prototype;
            Class.prototype = new noop();
        };

        return inherits;
    })();

    /* ------------------------------ has ------------------------------ */

    var has;

    _.has = (function ()
    {
        /* function
         * has: Checks if key is a direct property.
         * object(object): The object to query.
         * key(string): The path to check.
         * return(boolean): Returns true if key is a direct property, else false.
         */

        var hasOwnProp = Object.prototype.hasOwnProperty;

        has = function (obj, key)
        {
            return hasOwnProp.call(obj, key);
        };

        return has;
    })();

    /* ------------------------------ slice ------------------------------ */

    var slice;

    _.slice = (function ()
    {
        // TODO

        var arrProto = Array.prototype;

        slice = function (arr, start, end)
        {
            return arrProto.slice.call(arr, start, end);
        };

        return slice;
    })();

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef;

    _.isUndef = (function ()
    {
        /* function
         *
         * isUndef: Checks if value is undefined.
         * value(*): The value to check.
         * return(boolean): Returns true if value is undefined, else false.
         *
         * ```javascript
         * _.isUndef(void 0) // -> true
         * _.isUndef(null) // -> false
         * ```
         *
         * Just a shortcut for **x === undefined**, doesn't matter that much whether you
         * use it or not.
         */

        isUndef = function (value) { return value === void 0 };

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

    /* ------------------------------ _optimizeCb ------------------------------ */

    var _optimizeCb;

    _._optimizeCb = (function ()
    {

        _optimizeCb = function (func, ctx, argCount)
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

        return _optimizeCb;
    })();

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys;

    _.allKeys = (function ()
    {
        /* function
         * allKeys: Retrieve all the names of object's own and inherited properties.
         * object(object): The object to query.
         * return(array): Returns the array of all property names.
         *
         * ```javascript
         * var obj = Object.create({ a: 0 });
         * obj.b = 1;
         * _.allKeys(obj) // -> ['a', 'b']
         * ```
         *
         * > Members of Object's prototype won't be retrieved.
         */

        allKeys = function (obj)
        {
            var ret = [], key;

            for (key in obj) ret.push(key);

            return ret;
        };

        return allKeys;
    })();

    /* ------------------------------ extend ------------------------------ */

    var extend;

    _.extend = (function ()
    {
        // TODO

        extend = _createAssigner(allKeys);

        return extend;
    })();

    /* ------------------------------ restArgs ------------------------------ */

    var restArgs;

    _.restArgs = (function ()
    {
        /* function
         * restArgs: This accumulates the arguments passed into an array, after a given index.
         * function(function): Function that needs rest parameters.
         * startIndex(number): The start index to accumulates.
         * return(function): Generated function with rest parameters.
         *
         * ```javascript
         * var paramArr = _.restArgs(function (rest) { return rest });
         * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
         * ```
         */

        restArgs = function (fn, startIdx)
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

        return restArgs;
    })();

    /* ------------------------------ bind ------------------------------ */

    var bind;

    _.bind = (function ()
    {
        /* function
         * bind: Create a function bound to a given object.
         * function(function): The function to bind.
         * context(*): This binding of given function.
         * [rest](...*): Optional arguments.
         * return(function): Returns the new bound function.
         *
         * ```javascript
         * var fn = _.bind(function (msg)
         * {
         *     console.log(this.name + ':' + msg);
         * }, {name: 'eustia'}, 'I am a utility library.');
         * fn(); // -> 'eustia: I am a utility library.'
         * ```
         */

        bind = restArgs(function (fn, ctx, rest)
        {
            return restArgs(function (callArgs)
            {
                return fn.apply(ctx, rest.concat(callArgs));
            });
        });

        return bind;
    })();

    /* ------------------------------ keys ------------------------------ */

    var keys;

    _.keys = (function ()
    {
        /* function
         * keys: Creates an array of the own enumerable property names of object.
         * object(object): The object to query.
         * return(array): Returns the array of property names.
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

    /* ------------------------------ endWith ------------------------------ */

    var endWith;

    _.endWith = (function ()
    {
        // TODO

        /* function
         * endWith: Checks if string ends with the given target string.
         * string(string): The string to search.
         * suffix(string): String suffix.
         * return(boolean):  Returns true if string ends with target, else false.
         */

        endWith = function (str, suffix)
        {
            var idx = str.length - suffix.length;

            return idx >= 0 && str.indexOf(suffix, idx) === idx;
        };

        return endWith;
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
        /* function
         * objToStr: Alias of Object.prototype.objToString.
         * value(*): The source value.
         * return(string): String representation of the given value.
         */

        var ObjToStr = Object.prototype.toString;

        objToStr = function (val)
        {
            return ObjToStr.call(val);
        };

        return objToStr;
    })();

    /* ------------------------------ isArr ------------------------------ */

    var isArr;

    _.isArr = (function ()
    {
        // TODO

        /* function
         * isArr: Check if value is classified as an Array Object
         * value(*): The value to check.
         * return(boolean): Returns true if value is correctly classified, else false.
         */

        var nativeIsArr = Array.isArray;

        isArr = nativeIsArr || function (val)
        {
            return objToStr(val) === '[object Array]';
        };

        return isArr;
    })();

    /* ------------------------------ isNum ------------------------------ */

    var isNum;

    _.isNum = (function ()
    {
        // TODO

        /* function
         * isNum: Checks if value is classified as a Number primitive or object.
         * value(*): The value to check.
         * return(boolean): Returns true if value is correctly classified, else false.
         */

        isNum = function (value) { return objToStr(value) === '[object Number]' };

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

    /* ------------------------------ invert ------------------------------ */

    var invert;

    _.invert = (function ()
    {
        // TODO

        /* function
         * invert: Creates an object composed of the inverted keys and values of object.
         * object(object): The object to invert.
         * return(object): Returns the new inverted object.
         * If object contains duplicate values, subsequent values overwrite property
         * assignments of previous values unless multiValue is true.
         */

        invert = function (obj)
        {
            var ret = {};

            each(obj, function (val, key) { ret[val] = key });

            return ret;
        };

        return invert;
    })();

    /* ------------------------------ isBool ------------------------------ */

    var isBool;

    _.isBool = (function ()
    {
        // TODO

        /* function
         * isBool: Checks if value is classified as a boolean primitive or object.
         * val(*): The value to check.
         * return(boolean): Returns true if value is correctly classified, else false.
         */

        isBool = function (val) { return val === true || val === false };

        return isBool;
    })();

    /* ------------------------------ isFn ------------------------------ */

    var isFn;

    _.isFn = (function ()
    {
        /* function
         * isFn: Checks if value is classified as a Function.
         * value(*): The value to check.
         * return(boolean): True if value is a function, else false.
         */

        isFn = function (val)
        {
            return objToStr(val) === '[object Function]';
        };

        return isFn;
    })();

    /* ------------------------------ isInt ------------------------------ */

    var isInt;

    _.isInt = (function ()
    {
        // TODO

        /* function
         * isInt: Checks if value is classified as a Integer.
         * value(*): The value to check.
         * return(boolean): Returns true if value is correctly classified, else false.
         */

        isInt = function (val) { return isNum(val) && (val % 1 === 0) };

        return isInt;
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

    /* ------------------------------ isStr ------------------------------ */

    var isStr;

    _.isStr = (function ()
    {
        // TODO

        /* function
         * isStr: Checks if value is classified as a String primitive or object.
         * value(*): The value to check.
         * return(boolean): Returns true if value is correctly classified, else false.
         */

        isStr = function (value) { return objToStr(value) === '[object String]' };

        return isStr;
    })();

    /* ------------------------------ last ------------------------------ */

    var last;

    _.last = (function ()
    {
        // TODO

        /* function
         * last: Gets the last element of array.
         * array(array): The array to query.
         * return(*): Returns the last element of array.
         */

        last = function (arr)
        {
            var len = arr ? arr.length : 0;

            return len ? arr[len - 1] : undefined;
        };

        return last;
    })();

    /* ------------------------------ repeat ------------------------------ */

    var repeat;

    _.repeat = (function ()
    {
        // TODO

        /* function
         * repeat: Repeat string n-times.
         * string(string): The string to repeat.
         * n(number): Repeat times.
         * return(string): Repeated string.
         */

        repeat = function (str, n)
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

        return repeat;
    })();

    /* ------------------------------ lpad ------------------------------ */

    var lpad;

    _.lpad = (function ()
    {
        // TODO

        /* function
         * lpad: Pads string on the left side if it's shorter than length.
         * string(string): The string to pad.
         * length(number): The padding length.
         * chars(string): The string used as padding.
         */

        lpad = function (str, len, chars)
        {
            var strLen = str.length;

            return strLen < len ? repeat(chars, len - strLen) + str : str;
        };

        return lpad;
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

            if (isFn(val)) return _optimizeCb(val, ctx, argCount);

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

    /* ------------------------------ toArr ------------------------------ */

    var toArr;

    _.toArr = (function ()
    {

        toArr = function (obj)
        {
            if (isArr(obj)) return obj;

            return isArrLike(obj) && !isStr(obj)
                   ? map(obj, function (val) { return val })
                   : [obj];
        };

        return toArr;
    })();

    /* ------------------------------ Class ------------------------------ */

    var Class;

    _.Class = (function ()
    {
        // TODO

        /* function
         *
         * Class: Create JavaScript class.
         * methods(object): Public methods.
         * statics(object): Static methods.
         * return(function): Return function used to create instances.
         */

        var regCallSuper = /callSuper/;

        function makeClass(parent, methods, statics)
        {
            statics = statics || {};

            var ctor = function ()
            {
                var args = toArr(arguments);

                if (has(ctor.prototype, 'initialize') &&
                    !regCallSuper.test(this.initialize.toString()) &&
                    this.callSuper)
                {
                    args.unshift('initialize');
                    this.callSuper.apply(this, args);
                    args.shift();
                }

                return this.initialize
                       ? this.initialize.apply(this, args) || this
                       : this;
            };

            inherits(ctor, parent);
            ctor.superclass = ctor.prototype.superclass = parent;

            ctor.extend   = function (methods, statics) { return makeClass(ctor, methods, statics) };
            ctor.inherits = function (Class) { inherits(Class, ctor) };
            ctor.methods  = function (methods) { extend(ctor.prototype, methods); return ctor };
            ctor.statics  = function (statics) { extend(ctor, statics); return ctor };

            ctor.methods(methods).statics(statics);

            return ctor;
        }

        Class = function (methods, statics) { return Base.extend(methods, statics) };

        var Base = Class.Base = makeClass(Object, {
            className: 'Base',
            callSuper: function (name)
            {
                var superMethod = this.superclass.prototype[name];

                if (!superMethod) return;

                return superMethod.apply(this, toArr(arguments).slice(1));
            },
            objToString: function ()
            {
                return this.className;
            }
        });

        return Class;
    })();

    /* ------------------------------ Emitter ------------------------------ */

    var Emitter;

    _.Emitter = (function ()
    {

        Emitter = Class({
            initialize: function ()
            {
                this._events = this._events || {};
            },
            on: function (event, listener)
            {
                this._events[event] = this._events[event] || [];
                this._events[event].push(listener);

                return this;
            },
            off: function (event, listener)
            {
                if (!has(this._events, event)) return;

                this._events[event].splice(this._events[event].indexOf(listener), 1);

                return this;
            },
            once: function (event, listener)
            {
                var fired = false;

                function g()
                {
                    this.off(event, g);
                    if (!fired)
                    {
                        fired = true;
                        listener.apply(this, arguments);
                    }
                }

                this.on(event, g);

                return this;
            },
            emit: function (event)
            {
                if (!has(this._events, event)) return;

                var args = slice(arguments, 1);

                each(this._events[event], function (val)
                {
                    val.apply(this, args);
                }, this);

                return this;
            }
        }, {
            mixin: function (obj)
            {
                each(['on', 'off', 'once', 'emit'], function (val)
                {
                    obj[val] = Emitter.prototype[val];
                });

                obj._events = obj._events || {};
            }
        });

        return Emitter;
    })();

    /* ------------------------------ some ------------------------------ */

    var some;

    _.some = (function ()
    {
        // TODO

        some = function (obj, predicate, ctx)
        {
            predicate = safeCb(predicate, ctx);

            var _keys = !isArrLike(obj) && keys(obj),
                len   = (_keys || obj).length;

            for (var i = 0; i < len; i++)
            {
                var key = _keys ? _keys[i] : i;
                if (predicate(obj[key], key, obj)) return true;
            }

            return false;
        };

        return some;
    })();

    /* ------------------------------ State ------------------------------ */

    var State;

    _.State = (function ()
    {
        // TODO

        function buildEvent(name, event)
        {
            var from = event.from,
                to   = event.to;

            if (!isArr(from)) from = [from];

            return function ()
            {
                var args = slice(arguments, 1);
                args.unshift(name);
                if (some(from, function (val) {return this.current === val}, this))
                {
                    this.current = to;
                    this.emit.apply(this, args);
                }
            };
        }

        State = Emitter.extend({
            className: 'State',
            initialize: function (initial, events)
            {
                this.current = initial;

                var self = this;

                each(events, function (event, key)
                {
                    self[key] = buildEvent(key, event);
                });
            },
            is: function (state) { return this.current === state }
        });

        return State;
    })();

    /* ------------------------------ pad ------------------------------ */

    var pad;

    _.pad = (function ()
    {
        // TODO

        /* function
         * pad: Pads string on the left and right sides if it's shorter than length.
         * string(string): The string to pad.
         * length(number): The padding length.
         * chars(string): The string used as padding.
         */

        pad = function (str, len, chars)
        {
            var padLen = len - str.length;

            return repeat(chars, Math.ceil(padLen / 2)) + str +
                   repeat(chars, Math.floor(padLen /2));
        };

        return pad;
    })();

    /* ------------------------------ random ------------------------------ */

    var random;

    _.random = (function ()
    {
        // TODO

        /* function
         * random: Produces a random number between min and max (inclusive).
         * min(number): The minimum possible value.
         * max(number): The maximum possible value.
         * return(number): Returns the random number.
         */

        random = function (min, max)
        {
            if (max == null)
            {
                max = min;
                min = 0;
            }

            return min + Math.floor(Math.random() * (max - min + 1));
        };

        return random;
    })();

    /* ------------------------------ rpad ------------------------------ */

    var rpad;

    _.rpad = (function ()
    {
        // TODO

        /* function
         *
         * rpad: Pads string on the right side if it's shorter than length.
         * string(string): The string to pad.
         * length(number): Padding length.
         * chars(string): String used as padding.
         * return(string): Resulted string.
         */

        rpad = function (str, len, chars)
        {
            var strLen = str.length;

            return strLen < len ? str + repeat(chars, len - strLen): str;
        };

        return rpad;
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

    /* ------------------------------ startWith ------------------------------ */

    var startWith;

    _.startWith = (function ()
    {
        // TODO

        /* function
         * startWith: Checks if string starts with the given target string.
         * string(string): The string to search.
         * prefix(string): String prefix.
         * return(boolean): Returns true if string starts with prefix, else false.
         */

        startWith = function (str, prefix) { return str.indexOf(prefix) === 0 };

        return startWith;
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

    /* ------------------------------ values ------------------------------ */

    var values;

    _.values = (function ()
    {
        /* function
         * values: Creates an array of the own enumerable property values of object.
         * object(object): The object to query.
         * return(array): The array of property values.
         *
         * ```javascript
         * values({one: 1, two: 2}); // -> [1, 2]
         * ```
         */

        values = function (obj)
        {
            var ret = [];

            each(obj, function (val) { ret.push(val) });

            return ret;
        };

        return values;
    })();

    return _;
}));