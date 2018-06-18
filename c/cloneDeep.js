/* Recursively clone value.
 *
 * |Name  |Type|Desc             |
 * |------|----|-----------------|
 * |val   |*   |Value to clone   |
 * |return|*   |Deep cloned Value|
 *
 * ```javascript
 * var obj = [{a: 1}, {a: 2}];
 * var obj2 = cloneDeep(obj);
 * console.log(obj[0] === obj2[1]); // -> false
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isObj isFn isArr mapObj');

function exports(obj) {
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
}
