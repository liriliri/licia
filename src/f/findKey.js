/* Return the first key where the predicate truth test passes.
 *
 * |Name     |Desc                          |
 * |---------|------------------------------|
 * |obj      |Object to search              |
 * |predicate|Function invoked per iteration|
 * |ctx      |Predicate context             |
 * |return   |Key of matched element        |
 */

/* example
 * findKey({a: 1, b: 2}, function (val) {
 *     return val === 1;
 * }); // -> a
 */

/* module
 * env: all
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

    const _keys = keys(obj);
    let key;

    for (let i = 0, len = _keys.length; i < len; i++) {
        key = _keys[i];
        if (predicate(obj[key], key, obj)) return key;
    }
};
