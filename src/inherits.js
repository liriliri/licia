/* Inherit the prototype methods from one constructor into another.
 *
 * |Name      |Desc       |
 * |----------|-----------|
 * |Class     |Child Class|
 * |SuperClass|Super Class|
 */

/* example
 * function People(name) {
 *     this._name = name;
 * }
 * People.prototype = {
 *     getName: function() {
 *         return this._name;
 *     }
 * };
 * function Student(name) {
 *     this._name = name;
 * }
 * inherits(Student, People);
 * const s = new Student('RedHood');
 * s.getName(); // -> 'RedHood'
 */

/* module
 * env: all
 */

/* typescript
 * export declare function inherits(
 *     Class: types.AnyFn,
 *     SuperClass: types.AnyFn
 * ): void;
 */

_('create types');

exports = function(Class, SuperClass) {
    Class.prototype = create(SuperClass.prototype);
};
