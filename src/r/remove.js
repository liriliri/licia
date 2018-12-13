/* Remove all elements from array that predicate returns truthy for and return an array of the removed elements.
 *
 * Unlike filter, this method mutates array.
 *
 * |Name     |Type    |Desc                                |
 * |---------|--------|------------------------------------|
 * |obj      |array   |Collection to iterate over          |
 * |predicate|function|Function invoked per iteration      |
 * |[context]|*       |Predicate context                   |
 * |return   |array   |Array of all values that are removed|
 */

/* example
 * var arr = [1, 2, 3, 4, 5];
 * var evens = remove(arr, function (val) { return val % 2 === 0 });
 * console.log(arr); // -> [1, 3, 5]
 * console.log(evens); // -> [2, 4]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function remove(
 *     object: any[], 
 *     predicate: Function, 
 *     context?: any
 * ): any[];
 */

_('safeCb');

exports = function(arr, predicate, ctx) {
    var ret = [];

    predicate = safeCb(predicate, ctx);

    var i = -1,
        len = arr.length;

    while (++i < len) {
        var val = arr[i];

        if (predicate(val, i, arr)) {
            ret.push(val);
            arr.splice(i, 1);
        }
    }

    return ret;
};
