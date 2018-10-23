/* Shortcut for Object.defineProperty(defineProperties).
 *
 * |Name      |Type  |Desc               |
 * |----------|------|-------------------|
 * |obj       |object|Object to define   |
 * |prop      |string|Property path      |
 * |descriptor|object|Property descriptor|
 * |return    |object|Object itself      |
 * 
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |obj   |object|Object to define    |
 * |prop  |object|Property descriptors|
 * |return|object|Object itself       |
 */

/* example
 * var obj = {b: {c: 3}, d: 4, e: 5};
 * defineProp(obj, 'a', {
 *     get: function () {
 *         return this.e * 2;
 *     }
 * });
 * console.log(obj.a); // -> 10
 * defineProp(obj, 'b.c', {
 *     set: (function (val) {
 *         // this is pointed to obj.b
 *         this.e = val;
 *     }).bind(obj)
 * });
 * obj.b.c = 2;
 * console.log(obj.a); // -> 4;
 * 
 * obj = {a: 1, b: 2, c: 3};
 * defineProp(obj, {
 *     a: {
 *         get: function () {
 *             return this.c;
 *         }
 *     },
 *     b: {
 *         set: function (val) {
 *             this.c = val / 2;   
 *         }
 *     }
 * });
 * console.log(obj.a); // -> 3
 * obj.b = 4;
 * console.log(obj.a); // -> 2
 */

/* module
 * env: all
 * test: all
 */

_('castPath isStr isObj each');

function exports(obj, prop, descriptor) {
    if (isStr(prop)) {
        defineProp(obj, prop, descriptor);
    } else if (isObj(prop)) {
        each(prop, function(descriptor, prop) {
            defineProp(obj, prop, descriptor);
        });
    }

    return obj;
}

function defineProp(obj, prop, descriptor) {
    var path = castPath(prop, obj),
        lastProp = path.pop();

    /* eslint-disable no-cond-assign */
    while ((prop = path.shift())) {
        if (!obj[prop]) obj[prop] = {};
        obj = obj[prop];
    }

    Object.defineProperty(obj, lastProp, descriptor);
}
