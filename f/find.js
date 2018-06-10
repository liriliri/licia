/* Find the first value that passes a truth test in a collection.
 *
 * |Name     |Type        |Desc                             |
 * |---------|------------|---------------------------------|
 * |obj      |array object|Collection to iterate over       |
 * |predicate|function    |Function invoked per iteration   |
 * |[ctx]    |*           |Predicate context                |
 * |return   |*           |First value that passes predicate|
 * 
 * ```javascript
 * find([{
 *     name: 'john',
 *     age: 24
 * }, {
 *     name: 'jane',
 *     age: 23
 * }], function (val) 
 * {
 *     return val.age === 23;
 * }); // -> {name: 'jane', age: 23}
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('findKey findIdx isArrLike isUndef');

function exports(obj, predicate, ctx) {
    var keyFinder = isArrLike(obj) ? findIdx : findKey;

    var key = keyFinder(obj, predicate, ctx);

    if (!isUndef(key) && key !== -1) return obj[key];
}
