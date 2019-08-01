/* Get prototype of an object.
 *
 * |Name  |Type|Desc                                         |
 * |------|----|---------------------------------------------|
 * |obj   |*   |Target object                                |
 * |return|*   |Prototype of given object, null if not exists|
 */

/* example
 * const a = {};
 * getProto(Object.create(a)); // -> a
 */

/* module
 * env: all
 * test: all
 * since: 1.5.5
 */

/* typescript
 * export declare function getProto(obj: any): any;
 */

_('isObj isFn');

const getPrototypeOf = Object.getPrototypeOf;
const ObjectCtr = {}.constructor;

exports = function(obj) {
    if (!isObj(obj)) return null;

    if (getPrototypeOf) return getPrototypeOf(obj);

    const proto = obj.__proto__;
    if (proto || proto === null) return proto;
    if (isFn(obj.constructor)) return obj.constructor.prototype;
    if (obj instanceof ObjectCtr) return ObjectCtr.prototype;

    return null;
};
