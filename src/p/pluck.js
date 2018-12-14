/* Extract a list of property values.
 *
 * |Name  |Type        |Desc                           |
 * |------|------------|-------------------------------|
 * |obj   |object array|Collection to iterate over     |
 * |key   |string array|Property path                  |
 * |return|array       |New array of specified property|
 */

/* example
 * var stooges = [
 *     {name: 'moe', age: 40},
 *     {name: 'larry', age: 50},
 *     {name: 'curly', age: 60}
 * ];
 * pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function pluck(object: any, key: string | string[]): any[];
 */

_('map property');

exports = function(obj, key) {
    return map(obj, property(key));
};
