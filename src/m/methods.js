/* Return a sorted list of the names of every method in an object.
 *
 * |Name  |Desc                    |
 * |------|------------------------|
 * |obj   |Object to check         |
 * |return|Function names in object|
 */

/* example
 * methods(console); // -> ['Console', 'assert', 'dir', ...]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function methods(obj: any): string[];
 */

_('isFn');

exports = function(obj) {
    const ret = [];

    for (const key in obj) {
        if (isFn(obj[key])) ret.push(key);
    }

    return ret.sort();
};
