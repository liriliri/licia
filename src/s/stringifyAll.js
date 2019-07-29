/* Stringify object into json with types.
 *
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |obj   |*     |Object to stringify|
 * |return|string|Stringified object |
 */

/* example
 * stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function stringifyAll(obj: any): string;
 */

_('escapeJsStr type toStr endWith toSrc keys each Class getProto');

exports = function(obj, { visitor = new Visitor() } = {}) {
    let json = '';
    const options = {
        visitor
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
    } else {
        json = '{';
        const parts = [];

        const visitedObj = visitor.get(obj);
        let id;
        if (visitedObj) {
            id = visitedObj.id;
        } else {
            id = visitor.set(obj);
        }

        parts.push(`"id":${id}`);
        parts.push(`"type":"${t}"`);
        if (endWith(t, 'Function')) {
            parts.push(`"value":${wrapStr(toSrc(obj))}`);
        } else if (t === 'RegExp') {
            parts.push(`"value":${wrapStr(obj)}`);
        }

        if (!visitedObj) {
            const enumerableKeys = keys(obj);
            if (enumerableKeys.length) {
                let enumerable = `"enumerable":{`;
                const enumerableParts = [];
                each(keys(obj), key => {
                    let val;
                    try {
                        val = obj[key];
                    } catch (e) {
                        val = e.message;
                    }
                    enumerableParts.push(
                        `${wrapKey(key)}:${exports(val, options)}`
                    );
                });
                enumerable += enumerableParts.join(',') + '}';
                parts.push(enumerable);
            }

            const prototype = getProto(obj);
            if (prototype) {
                const proto = `"proto":${exports(prototype, options)}`;
                parts.push(proto);
            }
        }

        json += parts.join(',') + '}';
    }

    return json;
};

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
