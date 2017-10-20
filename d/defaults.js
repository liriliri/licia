/* Fill in undefined properties in object with the first value present in the following list of defaults objects.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |obj   |object|Destination object|
 * |*src  |object|Sources objects   |
 * |return|object|Destination object|
 *
 * ```javascript
 * defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys, true);