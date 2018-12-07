/* Return the first key where the predicate truth test passes.
 *
 * |Name     |Type    |Desc                          |
 * |---------|--------|------------------------------|
 * |obj      |object  |Object to search              |
 * |predicate|function|Function invoked per iteration|
 * |[ctx]    |*       |Predicate context             |
 * |return   |string  |Key of matched element        |
 */

/* example
 * findKey({a: 1, b: 2}, function (val) {
 *     return val === 1;
 * }); // -> a
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function findKey(
 *     obj: any,
 *     predicate: Function,
 *     ctx?: any
 * ): string | void;
 */

_('safeCb keys');

exports = function(obj, predicate, ctx) {
    predicate = safeCb(predicate, ctx);

    var _keys = keys(obj),
        key;

    for (var i = 0, len = _keys.length; i < len; i++) {
        key = _keys[i];
        if (predicate(obj[key], key, obj)) return key;
    }
};
