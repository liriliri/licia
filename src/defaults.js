/* Fill in undefined properties in object with the first value present in the following list of defaults objects.
 *
 * |Name  |Desc              |
 * |------|------------------|
 * |obj   |Destination object|
 * |...src|Sources objects   |
 * |return|Destination object|
 */

/* example
 * defaults({ name: 'RedHood' }, { name: 'Unknown', age: 24 }); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function defaults(obj: any, ...src: any[]): any;
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys, true);
