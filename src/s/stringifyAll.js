/* Stringify object into json with types.
 * 
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |obj   |*     |Object to stringify|
 * |return|string|Stringified object |
 */

/* example
 * stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function"}'
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function stringifyAll(obj: any): string;
 */

_('escapeJsStr type toStr endWith toSrc keys each');

exports = function(obj) {
    let json = '';

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
    } else {
        json = '{';
        const parts = [];
        parts.push(`"type":"${t}"`);
        if (endWith(t, 'Function')) {
            parts.push(`"value":${wrapStr(toSrc(obj))}`);
        } else if (t === 'RegExp') {
            parts.push(`"value":${wrapStr(obj)}`);
        }

        const enumerableKeys = keys(obj);
        if (enumerableKeys.length) {
            let enumerable = `"enumerable":{`;
            const enumerableParts = [];
            each(keys(obj), key => {
                enumerableParts.push(`${wrapKey(key)}:${exports(obj[key])}`);
            });
            enumerable += enumerableParts.join(',') + '}';
            parts.push(enumerable);
        }

        const prototype = Object.getPrototypeOf(obj);
        if (prototype) {
            const proto = `"proto":${exports(prototype)}`;
            parts.push(proto);
        }

        json += parts.join(',') + '}';
    }

    return json;
};

function wrapKey(key) {
    return `"${escapeJsStr(key)}"`;
}

function wrapStr(str) {
    return `"${escapeJsStr(toStr(str))}"`;
}
