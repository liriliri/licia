/* Extract a list of property values.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |obj   |Collection to iterate over     |
 * |key   |Property path                  |
 * |return|New array of specified property|
 */

/* example
 * const stooges = [
 *     { name: 'moe', age: 40 },
 *     { name: 'larry', age: 50 },
 *     { name: 'curly', age: 60 }
 * ];
 * pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
 */

/* module
 * env: all
 */

/* typescript
 * export declare function pluck(object: any, key: string | string[]): any[];
 */

_('map property');

exports = function(obj, key) {
    return map(obj, property(key));
};
