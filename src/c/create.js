/* Create new object using given object as prototype.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |proto |Prototype of new object|
 * |return|Created object         |
 */

/* example
 * const obj = create({ a: 1 });
 * console.log(obj.a); // -> 1
 */

/* module
 * env: all
 * since: 1.16.0
 */

/* typescript
 * export declare function create(proto?: object): any;
 */

_('isObj');

exports = function(proto) {
    if (!isObj(proto)) return {};
    if (objCreate) return objCreate(proto);
    function noop() {}
    noop.prototype = proto;
    return new noop();
};

const objCreate = Object.create;
