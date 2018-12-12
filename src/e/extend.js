/* Copy all of the properties in the source objects over to the destination object.
 *
 * |Name       |Type  |Desc              |
 * |-----------|------|------------------|
 * |destination|object|Destination object|
 * |...sources |object|Sources objects   |
 * |return     |object|Destination object|
 */

/* example
 * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function extend(destination: any, ...sources: any[]): any;
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys);
