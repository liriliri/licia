/* Create JavaScript class.
 *
 * |Name     |Type    |Desc                             |
 * |---------|--------|---------------------------------|
 * |methods  |object  |Public methods                   |
 * |[statics]|object  |Static methods                   |
 * |return   |function|Function used to create instances|
 *
 * ```javascript
 * var People = Class({
 *     initialize: function (name, age)
 *     {
 *         this.name = name;
 *         this.age = age;
 *     },
 *     introduce: function ()
 *     {
 *         return 'I am ' + this.name + ', ' + this.age + ' years old.'.
 *     }
 * });
 *
 * var Student = People.extend({
 *     initialize: function (name, age, school)
 *     {
 *         this.callSuper(People, 'initialize', arguments);
 *
 *         this.school = school;
 *     },
 *     introduce: function ()
 *     {
 *         return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.'.
 *     }
 * }, {
 *     is: function (obj)
 *     {
 *         return obj instanceof Student;
 *     }
 * });
 *
 * var a = new Student('allen', 17, 'Hogwarts');
 * a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
 * Student.is(a); // -> true
 * ```
 */

_('extend toArr inherits has');

function exports(methods, statics)
{
    return Base.extend(methods, statics);
}

var regCallSuper = /callSuper/;

function makeClass(parent, methods, statics)
{
    statics = statics || {};

    var ctor = function ()
    {
        var args = toArr(arguments);

        return this.initialize
               ? this.initialize.apply(this, args) || this
               : this;
    };

    inherits(ctor, parent);
    ctor.prototype.superclass = parent;

    ctor.extend = function (methods, statics)
    {
        return makeClass(ctor, methods, statics);
    };
    ctor.inherits = function (Class)
    {
        inherits(Class, ctor);
    };
    ctor.methods = function (methods)
    {
        extend(ctor.prototype, methods);
        return ctor;
    };
    ctor.statics = function (statics)
    {
        extend(ctor, statics);
        return ctor;
    };

    ctor.methods(methods).statics(statics);

    return ctor;
}

var Base = exports.Base = makeClass(Object, {
    className: 'Base',
    callSuper: function (parent, name, args)
    {
        var superMethod = parent.prototype[name];

        if (!superMethod) return;

        return superMethod.apply(this, args);
    },
    toString: function ()
    {
        return this.className;
    }
});