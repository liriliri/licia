/* Copy all of the properties in the source objects over to the destination object.
 *
 * |Name  |Type  |Desc              |
 * |------|------|------------------|
 * |obj   |object|Destination object|
 * |...src|object|Sources objects   |
 * |return|object|Destination object|
 */

/* example
 * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
 */

/* module
 * env: all
 * test: all
 */

_('createAssigner allKeys');

exports = createAssigner(allKeys);
