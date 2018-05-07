/* Right-associative version of reduce.
 *
 * ```javascript
 * reduceRight([[1], [2], [3]], function (a, b) { return a.concat(b) }, []); // -> [3, 2, 1]
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('reduce'); 

exports = reduce.create(-1);