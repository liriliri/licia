/* Like extend, but only copies own properties over to the destination object.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |obj   |object|Destination object|
 * |*src  |object|Sources objects   |
 * |return|object|Destination object|
 *
 * ```javascript
 * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('keys createAssigner');

exports = createAssigner(keys);