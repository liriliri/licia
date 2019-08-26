/* Find the first value that passes a truth test in a collection.
 *
 * |Name     |Type        |Desc                             |
 * |---------|------------|---------------------------------|
 * |object   |array object|Collection to iterate over       |
 * |iterator |function    |Function invoked per iteration   |
 * |[context]|*           |Predicate context                |
 * |return   |*           |First value that passes predicate|
 */

/* example
 * find([{
 *     name: 'john',
 *     age: 24
 * }, {
 *     name: 'jane',
 *     age: 23
 * }], function (val) {
 *     return val.age === 23;
 * }); // -> {name: 'jane', age: 23}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function find<T>(
 *     object: types.List<T>,
 *     iterator: types.ListIterator<T, boolean>,
 *     context?: any
 * ): T | undefined;
 * export declare function find<T>(
 *     object: types.Dictionary<T>,
 *     iterator: types.ObjectIterator<T, boolean>,
 *     context?: any
 * ): T | undefined;
 */

/* eslint-disable no-unused-vars */
_('findKey findIdx isArrLike isUndef types');

exports = function(obj, predicate, ctx) {
    const keyFinder = isArrLike(obj) ? findIdx : findKey;

    const key = keyFinder(obj, predicate, ctx);

    if (!isUndef(key) && key !== -1) return obj[key];
};
