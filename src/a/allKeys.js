/* Retrieve all the names of object's own and inherited properties.
 *
 * |Name   |Desc                       |
 * |-------|---------------------------|
 * |obj    |Object to query            |
 * |options|Options                    |
 * |return |Array of all property names|
 *
 * Available options:
 *
 * |Name              |Desc                     |
 * |------------------|-------------------------|
 * |prototype=true    |Include prototype keys   |
 * |unenumerable=false|Include unenumerable keys|
 * |symbol=false      |Include symbol keys      |
 *
 * Members of Object's prototype won't be retrieved.
 */

/* example
 * const obj = Object.create({zero: 0});
 * obj.one = 1;
 * allKeys(obj) // -> ['zero', 'one']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace allKeys {
 *     interface IOptions {
 *         prototype?: boolean;
 *         unenumerable?: boolean;
 *     }
 * }
 * export declare function allKeys(
 *     obj: any,
 *     options: { symbol: true } & allKeys.IOptions
 * ): Array<string | Symbol>;
 * export declare function allKeys(
 *     obj: any,
 *     options?: ({ symbol: false } & allKeys.IOptions) | allKeys.IOptions
 * ): string[];
 */

_('keys getProto unique');

const getOwnPropertyNames = Object.getOwnPropertyNames;
const getOwnPropertySymbols = Object.getOwnPropertySymbols;

exports = function(
    obj,
    { prototype = true, unenumerable = false, symbol = false } = {}
) {
    let ret = [];

    if ((unenumerable || symbol) && getOwnPropertyNames) {
        let getKeys = keys;
        if (unenumerable && getOwnPropertyNames) getKeys = getOwnPropertyNames;
        do {
            ret = ret.concat(getKeys(obj));
            if (symbol && getOwnPropertySymbols) {
                ret = ret.concat(getOwnPropertySymbols(obj));
            }
        } while (
            prototype &&
            (obj = getProto(obj)) &&
            obj !== Object.prototype
        );
        ret = unique(ret);
    } else {
        if (prototype) {
            for (const key in obj) ret.push(key);
        } else {
            ret = keys(obj);
        }
    }

    return ret;
};
