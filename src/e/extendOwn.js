/* Like extend, but only copies own properties over to the destination object.
 *
 * |Name       |Type  |Desc              |
 * |-----------|------|------------------|
 * |destination|object|Destination object|
 * |...sources |object|Sources objects   |
 * |return     |object|Destination object|
 */

/* example
 * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function extendOwn(destination: any, ...sources: any[]): any;
 */ 

_('keys createAssigner');

exports = createAssigner(keys);
