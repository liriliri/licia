/* Copy all of the properties in the source objects over to the destination object.
 *
 * |Name  |Type  |Desc                  |
 * |------------------------------------|
 * |obj   |object|The destination object|
 * |*src  |object|The sources objects   |
 * |return|object|The destination object|
 *
 * ```javascript
 * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 * ```
 */

_('createAssigner allKeys');

extend = createAssigner(allKeys);