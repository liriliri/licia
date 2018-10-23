/* Map for objects.
 *
 * |Name    |Type    |Desc                          |
 * |--------|--------|------------------------------|
 * |obj     |object  |Object to iterate over        |
 * |iteratee|function|Function invoked per iteration|
 * |[ctx]   |*       |Function context              |
 * |return  |object  |New mapped object             |
 */

/* example
 * mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
 */

/* module
 * env: all
 * test: all
 */

_('safeCb keys');

exports = function(obj, iteratee, ctx) {
    iteratee = safeCb(iteratee, ctx);

    var _keys = keys(obj),
        len = _keys.length,
        ret = {};

    for (var i = 0; i < len; i++) {
        var curKey = _keys[i];
        ret[curKey] = iteratee(obj[curKey], curKey, obj);
    }

    return ret;
};
