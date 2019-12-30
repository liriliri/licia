/* Sort keys of an object.
 *
 * |Name   |Type  |Desc                   |
 * |-------|------|-----------------------|
 * |obj    |object|Object to sort         |
 * |options|object|Sort options           |
 * |return |object|Object with sorted keys|
 *
 * Available options:
 *
 * |Name        |Type    |Desc                 |
 * |------------|--------|---------------------|
 * |deep=false  |boolean |Sort keys recursively|
 * |[comparator]|function|Comparator           |
 */

/* example
 * sortKeys({b: {d: 2, c: 1}, a: 0}, {
 *     deep: true
 * }); // -> {a: 0, b: {c: 1, d: 2}}
 */

/* module
 * env: all
 * since: 1.17.0
 */

/* typescript
 * export declare function sortKeys(
 *     obj: object,
 *     options?: {
 *         deep?: boolean,
 *         comparator?: Function
 *     }
 * ): object;
 */

_('isSorted defaults keys isArr isObj');

exports = function(obj, options = {}) {
    defaults(options, defOpts);
    const { deep, comparator } = options;

    const visited = [];
    const visitedResult = [];

    function sort(obj) {
        const idx = visited.indexOf(obj);
        if (idx > -1) {
            return visitedResult[idx];
        }

        let result;

        if (isArr(obj)) {
            result = [];
            visited.push(obj);
            visitedResult.push(result);

            for (let i = 0, len = obj.length; i < len; i++) {
                const value = obj[i];
                if (deep && isObj(value)) {
                    result[i] = sort(value);
                } else {
                    result[i] = value;
                }
            }
        } else {
            result = {};
            visited.push(obj);
            visitedResult.push(result);

            const _keys = keys(obj).sort(comparator);

            for (let i = 0, len = _keys.length; i < len; i++) {
                const key = _keys[i];
                const value = obj[key];
                if (deep && isObj(value)) {
                    result[key] = sort(value);
                } else {
                    result[key] = value;
                }
            }
        }

        return result;
    }

    return sort(obj);
};

const defOpts = {
    deep: false,
    comparator: isSorted.defComparator
};
