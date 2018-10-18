/* Check if value is a native function.
 * 
 * |Name  |Type   |Desc                              |
 * |------|-------|----------------------------------|
 * |val   |*      |Value to check                    |
 * |return|boolean|True if value is a native function|
 */

/* example
 * isNative(function () {}); // -> false
 * isNative(Math.min); // -> true
 */

/* module
 * env: all
 * test: all
 */

_('isObj isFn toSrc');

function exports(val) {
    if (!isObj(val)) return false;

    if (isFn(val)) return regIsNative.test(toSrc(val));

    // Detect host constructors (Safari > 4; really typed array specific)
    return regIsHostCtor.test(toSrc(val));
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var regIsNative = new RegExp(
    '^' +
        toSrc(hasOwnProperty)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
            ) +
        '$'
);

var regIsHostCtor = /^\[object .+?Constructor\]$/;
