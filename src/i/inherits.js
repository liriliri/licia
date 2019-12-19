/* Inherit the prototype methods from one constructor into another.
 *
 * |Name      |Type    |Desc       |
 * |----------|--------|-----------|
 * |Class     |function|Child Class|
 * |SuperClass|function|Super Class|
 */

/* example
 * function People(name) {
 *     this._name = name;
 * }
 * People.prototype = {
 *     getName: function () {
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
 * export declare function inherits(Class: Function, SuperClass: Function): void;
 */

_('create');

exports = function(Class, SuperClass) {
    Class.prototype = create(SuperClass.prototype);
};
