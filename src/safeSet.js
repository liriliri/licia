/* Set value at path of object.
 *
 * If a portion of path doesn't exist, it's created.
 *
 * |Name|Desc                   |
 * |----|-----------------------|
 * |obj |Object to modify       |
 * |path|Path of property to set|
 * |val |Value to set           |
 */

/* example
 * const obj = {};
 * safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
 * safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
 * safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function safeSet(
 *     obj: any,
 *     path: string | string[],
 *     val: any
 * ): void;
 */

_('castPath isUndef');

exports = function(obj, path, val) {
    path = castPath(path, obj);

    const lastProp = path.pop();
    let prop;

    prop = path.shift();
    while (!isUndef(prop)) {
        if (
            prop === '__proto__' ||
            prop === 'constructor' ||
            prop === 'prototype'
        ) {
            return;
        }
        if (!obj[prop]) obj[prop] = {};
        obj = obj[prop];
        prop = path.shift();
    }

    obj[lastProp] = val;
};
