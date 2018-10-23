/* Turn a list of values into a single value.
 *
 * |Name             |Type        |Desc                          |
 * |-----------------|------------|------------------------------|
 * |obj              |object array|Collection to iterate over    |
 * |iteratee=identity|function    |Function invoked per iteration|
 * |[initial]        |*           |Initial value                 |
 * |[ctx]            |*           |Function context              |
 * |return           |*           |Accumulated value             |
 */

/* example
 * reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
 */

/* module
 * env: all
 * test: all
 */

_('optimizeCb isArrLike isUndef keys');

exports = createReduce(1);
exports.create = createReduce;

function createReduce(dir) {
    return function(obj, iteratee, initial, ctx) {
        iteratee = optimizeCb(iteratee, ctx);

        var i, len, key;

        if (isArrLike(obj)) {
            len = obj.length;
            i = dir > 0 ? 0 : len - 1;
            if (isUndef(initial)) {
                initial = obj[i];
                i += dir;
            }
            for (; i < len && i >= 0; i += dir) {
                initial = iteratee(initial, obj[i], i, obj);
            }
        } else {
            var _keys = keys(obj);
            len = _keys.length;
            i = dir > 0 ? 0 : len - 1;
            if (isUndef(initial)) {
                initial = obj[_keys[i]];
                i += dir;
            }
            for (; i < len && i >= 0; i += dir) {
                key = _keys[i];
                initial = iteratee(initial, obj[key], key, obj);
            }
        }

        return initial;
    };
}
