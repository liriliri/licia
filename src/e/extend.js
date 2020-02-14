/* Copy all of the properties in the source objects over to the destination object.
 *
 * |Name       |Desc              |
 * |-----------|------------------|
 * |destination|Destination object|
 * |...sources |Sources objects   |
 * |return     |Destination object|
 */

/* example
 * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function extend(destination: any, ...sources: any[]): any;
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys);
