/* Recursively clone value.
 *
 * |Name  |Desc             |
 * |------|-----------------|
 * |val   |Value to clone   |
 * |return|Deep cloned Value|
 */

/* example
 * const obj = [{a: 1}, {a: 2}];
 * const obj2 = cloneDeep(obj);
 * console.log(obj[0] === obj2[1]); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function cloneDeep<T>(val: T): T;
 */

_('isObj isFn isArr mapObj');

exports = function(obj) {
    if (isArr(obj)) {
        return obj.map(function(val) {
            return exports(val);
        });
    }

    if (isObj(obj) && !isFn(obj)) {
        return mapObj(obj, function(val) {
            return exports(val);
        });
    }

    return obj;
};
