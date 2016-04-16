// TODO

/* function
 * inherits: Inherit the prototype methods from one constructor into another.
 * Class(function): Child Class.
 * SuperClass(function): Super Class.
 */

var objCreate = Object.create;

function noop() {}

exports = function (Class, SuperClass)
{
    if (objCreate) return Class.prototype = objCreate(SuperClass.prototype);

    noop.prototype  = SuperClass.prototype;
    Class.prototype = new noop();
};