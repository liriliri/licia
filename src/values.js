/* Create an array of the own enumerable property values of object.
 *
 * |Name  |Desc                    |
 * |------|------------------------|
 * |obj   |Object to query         |
 * |return|Array of property values|
 */

/* example
 * values({ one: 1, two: 2 }); // -> [1, 2]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function values(obj: any): any[];
 */

_('each');

exports = function(obj) {
    const ret = [];

    each(obj, function(val) {
        ret.push(val);
    });

    return ret;
};
