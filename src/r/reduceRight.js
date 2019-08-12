/* Right-associative version of reduce.
 */

/* example
 * reduceRight([[1], [2], [3]], function (a, b) { return a.concat(b) }, []); // -> [3, 2, 1]
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function reduceRight<T, TResult>(
 *     list: types.Collection<T>,
 *     iterator: types.MemoIterator<T, TResult>,
 *     memo?: TResult,
 *     context?: any
 * ): TResult;
 */

/* eslint-disable no-unused-vars */
_('reduce types');

exports = reduce.create(-1);
