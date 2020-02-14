/* Check if value is a native function.
 *
 * |Name  |Desc                              |
 * |------|----------------------------------|
 * |val   |Value to check                    |
 * |return|True if value is a native function|
 */

/* example
 * isNative(function () {}); // -> false
 * isNative(Math.min); // -> true
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isNative(val: any): boolean;
 */

_('isObj isFn toSrc');

exports = function(val) {
    if (!isObj(val)) return false;

    if (isFn(val)) return regIsNative.test(toSrc(val));

    // Detect host constructors (Safari > 4; really typed array specific)
    return regIsHostCtor.test(toSrc(val));
};

const hasOwnProperty = Object.prototype.hasOwnProperty;

const regIsNative = new RegExp(
    '^' +
        toSrc(hasOwnProperty)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
            ) +
        '$'
);

const regIsHostCtor = /^\[object .+?Constructor\]$/;
