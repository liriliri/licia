/* Insertion sort implementation.
 *
 * |Name |Type    |Desc         |
 * |-----|--------|-------------|
 * |arr  |array   |Array to sort|
 * |[cmp]|function|Comparator   |
 * 
 * ```javascript
 * insertionSort([2, 1]); // -> [1, 2]
 * ```
 */

/* module
 * env: all
 * test: all
 */ 

_('swap'); 

function exports(arr, cmp) 
{
    cmp = cmp || comparator;

    var tmp;

    for (var i = 1, len = arr.length; i < len; i++) 
    {
        for (var j = i; j > 0; j--) 
        {
            if (cmp(arr[j], arr[j - 1]) < 0) 
            {
                swap(arr, j, j - 1);
            }
        }
    }

    return arr;
} 

function comparator(a, b) 
{
    return a - b;
}
