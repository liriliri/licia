/* Create an array of the own enumerable property names of object.
 *
 * |Name  |Desc                   |
 * |------|-----------------------|
 * |obj   |Object to query        |
 * |return|Array of property names|
 */

/* example
 * keys({ a: 1 }); // -> ['a']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function keys(obj: any): string[];
 */

_('has detectMocha');

if (Object.keys && !detectMocha()) {
    exports = Object.keys;
} else {
    exports = function(obj) {
        const ret = [];

        for (const key in obj) {
            if (has(obj, key)) ret.push(key);
        }

        return ret;
    };
}
