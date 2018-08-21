/* Array of strings merge into array of objects.
 *
 * |Name  |Type          |Desc                  |
 * |------|--------------|----------------------|
 * |...arr|array         |array                 |
 * |return|array/boolean |Merged array or false |
 *
 * ```javascript
 *   arrToCombine(['a', 'b', 'c'], [1, 2, 3]); // [{a: 1}, {b: 2}, {c: 3}]
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isUndef isArr isArrLike reduce');

function exports() {

  var arr = arguments,
    keys = arr[0],
    values = arr[1];

  if (!isArr(keys) || !isArrLike(keys)) {
    return false
  }

  if (!isArr(values) || !isArrLike(values)) {
    return false
  }

  if (isUndef(keys) || !keys.length) {
    return false
  }

  // number of elements does not match
  if (keys.length !== values.length) {
    return false
  }

  return keys.reduce(function (acc, val, idx) {
    acc[idx] = {[val]: values[idx]};
    return acc;
  }, []);
}
