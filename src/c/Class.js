/* Create JavaScript class.
 *
 * |Name     |Type    |Desc                             |
 * |---------|--------|---------------------------------|
 * |methods  |object  |Public methods                   |
 * |[statics]|object  |Static methods                   |
 * |return   |function|Function used to create instances|
 */

/* example
 * const People = Class({
 *     initialize: function People(name, age) {
 *         this.name = name;
 *         this.age = age;
 *     },
 *     introduce: function () {
 *         return 'I am ' + this.name + ', ' + this.age + ' years old.';
 *     }
 * });
 *
 * const Student = People.extend({
 *     initialize: function Student(name, age, school) {
 *         this.callSuper(People, 'initialize', arguments);
 *
 *         this.school = school;
 *     },
 *     introduce: function () {
 *         return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
 *     }
 * }, {
 *     is: function (obj) {
 *         return obj instanceof Student;
 *     }
 * });
 *
 * const a = new Student('allen', 17, 'Hogwarts');
 * a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
 * Student.is(a); // -> true
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare namespace Class {
 *     class Base {
 *         toString(): string;
 *     }
 *     class IConstructor extends Base {
 *         constructor(...args: any[]);
 *         static extend(methods: any, statics: any): IConstructor;
 *         static inherits(Class: Function): void;
 *         static methods(methods: any): IConstructor;
 *         static statics(statics: any): IConstructor;
 *         [method: string]: any;
 *     }
 * }
 * export declare function Class(methods: any, statics?: any): Class.IConstructor;
 */

_('extend toArr inherits safeGet isMiniProgram');

exports = function(methods, statics) {
    return Base.extend(methods, statics);
};

function makeClass(parent, methods, statics) {
    statics = statics || {};
    const className =
        methods.className || safeGet(methods, 'initialize.name') || '';
    delete methods.className;

    let ctor;
    if (isMiniProgram) {
        ctor = function() {
            const args = toArr(arguments);
            return this.initialize
                ? this.initialize.apply(this, args) || this
                : this;
        };
    } else {
        ctor = new Function(
            'toArr',
            'return function ' +
                className +
                '()' +
                '{' +
                'var args = toArr(arguments);' +
                'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                '};'
        )(toArr);
    }

    inherits(ctor, parent);
    ctor.prototype.constructor = ctor;

    ctor.extend = function(methods, statics) {
        return makeClass(ctor, methods, statics);
    };
    ctor.inherits = function(Class) {
        inherits(ctor, Class);
    };
    ctor.methods = function(methods) {
        extend(ctor.prototype, methods);
        return ctor;
    };
    ctor.statics = function(statics) {
        extend(ctor, statics);
        return ctor;
    };

    ctor.methods(methods).statics(statics);

    return ctor;
}

const Base = (exports.Base = makeClass(Object, {
    className: 'Base',
    callSuper(parent, name, args) {
        const superMethod = parent.prototype[name];

        return superMethod.apply(this, args);
    },
    toString() {
        return this.constructor.name;
    }
}));
