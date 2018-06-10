/* JSON stringify with support for circular object, function etc.
 *
 * Undefined is treated as null value.
 *  
 * |Name  |Type  |Desc               |
 * |------|------|-------------------|
 * |obj   |object|Object to stringify|
 * |spaces|number|Indent spaces      |
 * |return|string|Stringified object |
 * 
 * ```javascript
 * stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
 * var obj = {a: 1};
 * obj.b = obj;
 * stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('type upperFirst toStr isUndef isFn isRegExp');

function exports(obj, spaces) {
    return JSON.stringify(obj, serializer(), spaces);
}

function serializer() {
    var stack = [],
        keys = [];

    return function(key, val) {
        if (stack.length > 0) {
            var pos = stack.indexOf(this);
            if (pos > -1) {
                stack.splice(pos + 1);
                keys.splice(pos, Infinity, key);
            } else {
                stack.push(this);
                keys.push(key);
            }

            var valPos = stack.indexOf(val);
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
