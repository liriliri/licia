/* Return a predicate function that checks if attrs are contained in an object.
 *
 * |Name  |Type    |Desc                              |
 * |------|--------|----------------------------------|
 * |attrs |object  |Object of property values to match|
 * |return|function|New predicate function            |
 */

/* example
 * const filter = require('licia/filter');
 *
 * const objects = [
 *     {a: 1, b: 2, c: 3 },
 *     {a: 4, b: 5, c: 6 }
 * ];
 * filter(objects, matcher({a: 4, c: 6 }));
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function matcher(attrs: any): Function;
 */

_('extendOwn isMatch');

exports = function(attrs) {
    attrs = extendOwn({}, attrs);

    return function(obj) {
        return isMatch(obj, attrs);
    };
};
