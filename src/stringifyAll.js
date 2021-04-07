/* Stringify object into json with types.
 *
 * |Name   |Desc               |
 * |-------|-------------------|
 * |obj    |Object to stringify|
 * |options|Stringify options  |
 * |return |Stringified object |
 *
 * Available options:
 *
 * |Name              |Desc                     |
 * |------------------|-------------------------|
 * |unenumerable=false|Include unenumerable keys|
 * |symbol=false      |Include symbol keys      |
 * |accessGetter=false|Access getter value      |
 * |timeout=0         |Timeout of stringify     |
 * |depth=0           |Max depth of recursion   |
 * |ignore            |Values to ignore         |
 *
 * When time is out, all remaining values will all be "Timeout".
 *
 * ### parse
 *
 * Parse result string back to object.
 *
 * |Name  |Type           |
 * |------|---------------|
 * |obj   |String to parse|
 * |return|Result object  |
 */

/* example
 * stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
 */

/* module
 * env: all
 * since: 1.5.5
 */

/* typescript
 * export declare namespace stringifyAll {
 *     function parse(str: string): any;
 * }
 * export declare function stringifyAll(
 *     obj: any,
 *     options?: {
 *         unenumerable?: boolean;
 *         symbol?: boolean;
 *         accessGetter?: boolean;
 *         timeout?: number;
 *         depth?: number;
 *         ignore?: any[];
 *     }
 * ): string;
 */

_(
    'escapeJsStr type toStr endWith toSrc keys each Class getProto difference extend isPromise filter now allKeys contain isObj isMiniProgram create startWith safeSet defineProp pick isArrLike'
);

exports = function(
    obj,
    {
        self,
        startTime = now(),
        timeout = 0,
        depth = 0,
        curDepth = 1,
        visitor = new Visitor(),
        unenumerable = false,
        symbol = false,
        accessGetter = false,
        ignore = []
    } = {}
) {
    let json = '';
    const options = {
        visitor,
        unenumerable,
        symbol,
        accessGetter,
        depth,
        curDepth: curDepth + 1,
        timeout,
        startTime,
        ignore
    };

    const t = type(obj, false);

    if (t === 'String') {
        json = wrapStr(obj);
    } else if (t === 'Number') {
        json = toStr(obj);
        if (endWith(json, 'Infinity')) {
            json = `{"value":"${json}","type":"Number"}`;
        }
    } else if (t === 'NaN') {
        json = `{"value":"NaN","type":"Number"}`;
    } else if (t === 'Boolean') {
        json = obj ? 'true' : 'false';
    } else if (t === 'Null') {
        json = 'null';
    } else if (t === 'Undefined') {
        json = '{"type":"Undefined"}';
    } else if (t === 'Symbol') {
        let val = 'Symbol';
        try {
            val = toStr(obj);
            /* eslint-disable no-empty */
        } catch (e) {}
        json = `{"value":${wrapStr(val)},"type":"Symbol"}`;
    } else {
        if (timeout && now() - startTime > timeout) {
            return wrapStr('Timeout');
        }
        if (depth && curDepth > depth) {
            return wrapStr('{...}');
        }
        json = '{';
        const parts = [];

        const visitedObj = visitor.get(obj);
        let id;
        if (visitedObj) {
            id = visitedObj.id;
            parts.push(`"reference":${id}`);
        } else {
            id = visitor.set(obj);
            parts.push(`"id":${id}`);
        }

        parts.push(`"type":"${t}"`);
        if (endWith(t, 'Function')) {
            parts.push(`"value":${wrapStr(toSrc(obj))}`);
        } else if (t === 'RegExp') {
            parts.push(`"value":${wrapStr(obj)}`);
        }

        if (!visitedObj) {
            const enumerableKeys = keys(obj);
            if (enumerableKeys.length) {
                parts.push(
                    iterateObj(
                        'enumerable',
                        enumerableKeys,
                        self || obj,
                        options
                    )
                );
            }

            if (unenumerable) {
                const unenumerableKeys = difference(
                    allKeys(obj, {
                        prototype: false,
                        unenumerable: true
                    }),
                    enumerableKeys
                );
                if (unenumerableKeys.length) {
                    parts.push(
                        iterateObj(
                            'unenumerable',
                            unenumerableKeys,
                            self || obj,
                            options
                        )
                    );
                }
            }

            if (symbol) {
                const symbolKeys = filter(
                    allKeys(obj, {
                        prototype: false,
                        symbol: true
                    }),
                    key => {
                        return typeof key === 'symbol';
                    }
                );
                if (symbolKeys.length) {
                    parts.push(
                        iterateObj('symbol', symbolKeys, self || obj, options)
                    );
                }
            }

            const prototype = getProto(obj);
            if (prototype && !contain(ignore, prototype)) {
                const proto = `"proto":${exports(
                    prototype,
                    extend(options, { self: self || obj })
                )}`;
                parts.push(proto);
            }
        }

        json += parts.join(',') + '}';
    }

    return json;
};

function iterateObj(name, keys, obj, options) {
    const parts = [];
    each(keys, key => {
        let val;
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        const hasGetter = descriptor && descriptor.get;
        const hasSetter = descriptor && descriptor.set;
        if (!options.accessGetter && hasGetter) {
            val = '(...)';
        } else {
            try {
                val = obj[key];
                if (contain(options.ignore, val)) {
                    return;
                }
                if (isPromise(val)) {
                    val.catch(() => {});
                }
            } catch (e) {
                val = e.message;
            }
        }
        parts.push(`${wrapKey(key)}:${exports(val, options)}`);
        if (hasGetter) {
            parts.push(
                `${wrapKey('get ' + toStr(key))}:${exports(
                    descriptor.get,
                    options
                )}`
            );
        }
        if (hasSetter) {
            parts.push(
                `${wrapKey('set ' + toStr(key))}:${exports(
                    descriptor.set,
                    options
                )}`
            );
        }
    });
    return `"${name}":{` + parts.join(',') + '}';
}

function wrapKey(key) {
    return `"${escapeJsonStr(key)}"`;
}

function wrapStr(str) {
    return `"${escapeJsonStr(toStr(str))}"`;
}

function escapeJsonStr(str) {
    return escapeJsStr(str)
        .replace(/\\'/g, "'")
        .replace(/\t/g, '\\t');
}

const Visitor = Class({
    initialize() {
        this.id = 1;
        this.visited = [];
    },
    set(val) {
        const { visited, id } = this;
        const obj = {
            id,
            val
        };
        visited.push(obj);

        this.id++;

        return id;
    },
    get(val) {
        const { visited } = this;

        for (let i = 0, len = visited.length; i < len; i++) {
            const obj = visited[i];
            if (val === obj.val) return obj;
        }

        return false;
    }
});

exports.parse = function(str) {
    const map = {};
    const obj = parse(JSON.parse(str), { map });
    correctReference(map);
    return obj;
};

function correctReference(map) {
    each(map, obj => {
        const enumerableKeys = keys(obj);
        for (let i = 0, len = enumerableKeys.length; i < len; i++) {
            const key = enumerableKeys[i];
            if (isObj(obj[key])) {
                const reference = obj[key].reference;
                if (reference && map[reference]) {
                    obj[key] = map[reference];
                }
            }
        }
        const proto = getProto(obj);
        if (proto && proto.reference) {
            if (map[proto.reference]) {
                Object.setPrototypeOf(obj, map[proto.reference]);
            }
        }
    });
}

function parse(obj, options) {
    const { map } = options;
    if (!isObj(obj)) {
        return obj;
    }

    const { id, type, value, proto, reference } = obj;
    let { enumerable, unenumerable } = obj;
    if (reference) {
        return obj;
    }
    if (type === 'Number') {
        if (value === 'Infinity') {
            return Number.POSITIVE_INFINITY;
        } else if (value === '-Infinity') {
            return Number.NEGATIVE_INFINITY;
        }

        return NaN;
    } else if (type === 'Undefined') {
        return undefined;
    }

    let newObj;
    if (type === 'Function') {
        newObj = function() {};
        newObj.toString = function() {
            return value;
        };
        if (proto) {
            Object.setPrototypeOf(newObj, parse(proto, options));
        }
    } else if (type === 'RegExp') {
        newObj = strToRegExp(value);
    } else {
        if (type !== 'Object') {
            let Fn;
            if (!isMiniProgram) {
                Fn = new Function(type, '');
            } else {
                Fn = function() {};
            }
            if (proto) {
                Fn.prototype = parse(proto, options);
            }
            newObj = new Fn();
        } else {
            if (proto) {
                newObj = create(parse(proto, options));
            } else {
                newObj = create(null);
            }
        }
    }

    const defineProps = {};
    if (enumerable) {
        let len;
        if (isArrLike(enumerable)) {
            len = enumerable.length;
            delete enumerable.length;
        }
        enumerable = pick(enumerable, (value, key) => {
            return !handleGetterSetter(enumerable, value, key);
        });
        each(enumerable, (value, key) => {
            const defineProp = defineProps[key] || {};
            if (!defineProp.get) {
                newObj[key] = parse(value, options);
            }
        });
        if (len) {
            newObj.length = len;
        }
    }
    if (unenumerable) {
        unenumerable = pick(unenumerable, (value, key) => {
            return !handleGetterSetter(unenumerable, value, key);
        });
        each(unenumerable, (value, key) => {
            const defineProp = defineProps[key] || {};
            if (!defineProp.get) {
                value = parse(value, options);
                if (isObj(value) && value.reference) {
                    const reference = value.reference;
                    value = function() {
                        return map[reference];
                    };
                    defineProp.get = value;
                } else {
                    defineProp.value = value;
                }
            }
            defineProp.enumerable = false;
            defineProps[key] = defineProp;
        });
    }
    defineProp(newObj, defineProps);
    function handleGetterSetter(obj, val, key) {
        key = toStr(key);
        let isGetterAndSetter = false;
        each(['get', 'set'], function(type) {
            if (startWith(key, type + ' ')) {
                const realKey = key.replace(type + ' ', '');
                if (obj[realKey]) {
                    val = parse(val, options);
                    if (val === 'Timeout') {
                        val = retTimeout;
                    }
                    safeSet(defineProps, [realKey, type], val);
                    isGetterAndSetter = true;
                }
            }
        });
        return isGetterAndSetter;
    }

    map[id] = newObj;
    return newObj;
}

function retTimeout() {
    return 'Timeout';
}

function strToRegExp(str) {
    const lastSlash = str.lastIndexOf('/');
    return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
}
