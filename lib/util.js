// Built by eustia.
"use strict";

var _ = {};

/* ------------------------------ inherits ------------------------------ */

var inherits = _.inherits = (function () {
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
    var hasOwnProp = Object.prototype.hasOwnProperty;

    function exports(obj, key) {
        return hasOwnProp.call(obj, key);
    }

    return exports;
})();

/* ------------------------------ slice ------------------------------ */

var slice = _.slice = (function () {
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
    function exports(val) {
        var type = typeof val;

        return !!val && (type === 'function' || type === 'object');
    }

    return exports;
})();

/* ------------------------------ nextTick ------------------------------ */

var nextTick = _.nextTick = (function (exports) {
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
    function exports() {}

    return exports;
})();

/* ------------------------------ allKeys ------------------------------ */

var allKeys = _.allKeys = (function () {
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
    function exports(fn, startIdx) {
        startIdx = startIdx == null ? fn.length - 1 : +startIdx;

        return function() {
            var len = Math.max(arguments.length - startIdx, 0),
                rest = new Array(len),
                i;

            for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

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
    exports = restArgs(function(fn, ctx, rest) {
        return restArgs(function(callArgs) {
            return fn.apply(ctx, rest.concat(callArgs));
        });
    });

    return exports;
})({});

/* ------------------------------ idxOf ------------------------------ */

var idxOf = _.idxOf = (function () {
    function exports(arr, val, fromIdx) {
        return Array.prototype.indexOf.call(arr, val, fromIdx);
    }

    return exports;
})();

/* ------------------------------ isUndef ------------------------------ */

var isUndef = _.isUndef = (function () {
    function exports(val) {
        return val === void 0;
    }

    return exports;
})();

/* ------------------------------ optimizeCb ------------------------------ */

var optimizeCb = _.optimizeCb = (function () {
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
    function exports(val) {
        return val;
    }

    return exports;
})();

/* ------------------------------ repeat ------------------------------ */

var repeat = _.repeat = (function (exports) {
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
    var ObjToStr = Object.prototype.toString;

    function exports(val) {
        return ObjToStr.call(val);
    }

    return exports;
})();

/* ------------------------------ isArr ------------------------------ */

var isArr = _.isArr = (function (exports) {
    exports =
        Array.isArray ||
        function(val) {
            return objToStr(val) === '[object Array]';
        };

    return exports;
})({});

/* ------------------------------ castPath ------------------------------ */

var castPath = _.castPath = (function () {
    function exports(str, obj) {
        if (isArr(str)) return str;
        if (obj && has(obj, str)) return [str];

        var ret = [];

        str.replace(regPropName, function(match, number, quote, str) {
            ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
        });

        return ret;
    }

    var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        regEscapeChar = /\\(\\)?/g;

    return exports;
})();

/* ------------------------------ safeGet ------------------------------ */

var safeGet = _.safeGet = (function () {
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
    exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

    return exports;
})({});

/* ------------------------------ isNum ------------------------------ */

var isNum = _.isNum = (function () {
    function exports(val) {
        return objToStr(val) === '[object Number]';
    }

    return exports;
})();

/* ------------------------------ indent ------------------------------ */
_.indent = (function () {
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
    exports =
        typeof window === 'object' &&
        typeof document === 'object' &&
        document.nodeType === 9;

    return exports;
})({});

/* ------------------------------ root ------------------------------ */

var root = _.root = (function (exports) {
    exports = isBrowser ? window : global;

    return exports;
})({});

/* ------------------------------ detectMocha ------------------------------ */

var detectMocha = _.detectMocha = (function () {
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

/* ------------------------------ defaults ------------------------------ */
_.defaults = (function (exports) {
    exports = createAssigner(allKeys, true);

    return exports;
})({});

/* ------------------------------ extend ------------------------------ */

var extend = _.extend = (function (exports) {
    exports = createAssigner(allKeys);

    return exports;
})({});

/* ------------------------------ clone ------------------------------ */
_.clone = (function () {
    function exports(obj) {
        if (!isObj(obj)) return obj;

        return isArr(obj) ? obj.slice() : extend({}, obj);
    }

    return exports;
})();

/* ------------------------------ values ------------------------------ */

var values = _.values = (function () {
    function exports(obj) {
        var ret = [];

        each(obj, function(val) {
            ret.push(val);
        });

        return ret;
    }

    return exports;
})();

/* ------------------------------ contain ------------------------------ */
_.contain = (function () {
    function exports(arr, val) {
        if (!isArrLike(arr)) arr = values(arr);

        return idxOf(arr, val) >= 0;
    }

    return exports;
})();

/* ------------------------------ extendOwn ------------------------------ */

var extendOwn = _.extendOwn = (function (exports) {
    exports = createAssigner(keys);

    return exports;
})({});

/* ------------------------------ isMatch ------------------------------ */

var isMatch = _.isMatch = (function () {
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
    function exports(val) {
        return objToStr(val) === '[object String]';
    }

    return exports;
})();

/* ------------------------------ last ------------------------------ */
_.last = (function () {
    function exports(arr) {
        var len = arr ? arr.length : 0;

        if (len) return arr[len - 1];
    }

    return exports;
})();

/* ------------------------------ ltrim ------------------------------ */

var ltrim = _.ltrim = (function () {
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

/* ------------------------------ mkdir ------------------------------ */
_.mkdir = (function () {
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
    exports = partial(before, 2);

    return exports;
})({});

/* ------------------------------ Emitter ------------------------------ */

var Emitter = _.Emitter = (function (exports) {
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

/* ------------------------------ fs ------------------------------ */
_.fs = (function (exports) {
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

/* ------------------------------ rmdir ------------------------------ */
_.rmdir = (function () {
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
    function exports(val) {
        return val == null ? '' : val.toString();
    }

    return exports;
})();

/* ------------------------------ rpad ------------------------------ */
_.rpad = (function () {
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
    var regSpace = /^\s+|\s+$/g;

    function exports(str, chars) {
        if (chars == null) return str.replace(regSpace, '');

        return ltrim(rtrim(str, chars), chars);
    }

    return exports;
})();

/* ------------------------------ extractBlockCmts ------------------------------ */
_.extractBlockCmts = (function () {
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

/* ------------------------------ startWith ------------------------------ */
_.startWith = (function () {
    function exports(str, prefix) {
        return str.indexOf(prefix) === 0;
    }

    return exports;
})();

/* ------------------------------ waterfall ------------------------------ */
_.waterfall = (function () {
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