/* Like extend, but only copies own properties over to the destination object.
 *
 * |Name       |Desc              |
 * |-----------|------------------|
 * |destination|Destination object|
 * |...sources |Sources objects   |
 * |return     |Destination object|
 */

/* example
 * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 */

/* typescript
 * export declare function extendOwn(destination: any, ...sources: any[]): any;
 */

_('keys createAssigner');

exports = createAssigner(keys);
