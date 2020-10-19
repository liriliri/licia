/* JSON stringify with support for circular object, function etc.
 *
 * Undefined is treated as null value.
 *
 * |Name  |Desc               |
 * |------|-------------------|
 * |obj   |Object to stringify|
 * |spaces|Indent spaces      |
 * |return|Stringified object |
 */

/* example
 * stringify({ a: function() {} }); // -> '{"a":"[Function function () {}]"}'
 * const obj = { a: 1, b: {} };
 * obj.b = obj;
 * stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function stringify(obj: any, spaces?: number): string;
 */

_('type upperFirst toStr isUndef isFn isRegExp');

exports = function(obj, spaces) {
    return JSON.stringify(obj, serializer(), spaces);
};

function serializer() {
    const stack = [];
    const keys = [];

    return function(key, val) {
        if (stack.length > 0) {
            const pos = stack.indexOf(this);
            if (pos > -1) {
                stack.splice(pos + 1);
                keys.splice(pos, Infinity, key);
            } else {
                stack.push(this);
                keys.push(key);
            }

            const valPos = stack.indexOf(val);
            if (valPos > -1) {
                if (stack[0] === val) {
                    val = '[Circular ~]';
                } else {
                    val =
                        '[Circular ~.' + keys.slice(0, valPos).join('.') + ']';
                }
            }
        } else {
            stack.push(val);
        }

        if (isRegExp(val) || isFn(val)) {
            val = '[' + upperFirst(type(val)) + ' ' + toStr(val) + ']';
        } else if (isUndef(val)) {
            val = null;
        }

        return val;
    };
}
