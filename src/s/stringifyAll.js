/* Stringify object into json with types.
 *
 * |Name     |Type  |Desc               |
 * |---------|------|-------------------|
 * |obj      |*     |Object to stringify|
 * |[options]|object|Stringify options  |
 * |return   |string|Stringified object |
 *
 * Available options:
 *
 * |Name              |Type   |Desc                     |
 * |------------------|-------|-------------------------|
 * |unenumerable=false|boolean|Include unenumerable keys|
 * |symbol=false      |boolean|Include symbol keys      |
 * |accessGetter=false|boolean|Access getter value      |
 * |timeout=0         |number |Timeout of stringify     |
 * |depth=0           |number |Max depth of recursion   |
 * |[ignore]          |array  |Values to ignore         |
 *
 * When time is out, all remaining values will all be "Timeout".
 */

/* example
 * stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
 */

/* module
 * env: all
 * test: all
 * since: 1.5.5
 */

/* typescript
 * export declare namespace stringifyAll {
 *     interface IOptions {
 *         unenumerable?: boolean;
 *         symbol?: boolean;
 *         accessGetter?: boolean;
 *         timeout?: number;
 *         depth?: number;
 *         ignore?: any[];
 *     }
 * }
 * export declare function stringifyAll(
 *     obj: any,
 *     options?: stringifyAll.IOptions
 * ): string;
 */

_(
    'escapeJsStr type toStr endWith toSrc keys each Class getProto difference extend isPromise filter now allKeys contain'
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
        this.id = 0;
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
