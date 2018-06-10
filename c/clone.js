/* Create a shallow-copied clone of the provided plain object.
 *
 * Any nested objects or arrays will be copied by reference, not duplicated.
 *
 * |Name  |Type|Desc          |
 * |------|----|--------------|
 * |val   |*   |Value to clone|
 * |return|*   |Cloned value  |
 *
 * ```javascript
 * clone({name: 'eustia'}); // -> {name: 'eustia'}
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isObj isArr extend');

function exports(obj) {
    if (!isObj(obj)) return obj;

    return isArr(obj) ? obj.slice() : extend({}, obj);
}
