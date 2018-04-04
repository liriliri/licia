/* Split array into groups the length of given size.
 *
 * |Name  |Type  |Desc                |
 * |------|------|--------------------|
 * |arr   |array |Array to process    |
 * |size=1|number|Length of each chunk|
 * 
 * ```javascript
 * chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
 * chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
 * ```
 */

/* module
 * env: all
 * test: all
 */

function exports(arr, size) 
{
    var ret = [];
       
    size = size || 1;

    for (var i = 0, len = Math.ceil(arr.length / size); i < len; i++) 
    {
        var start = i * size,
            end = start + size;
        
        ret.push(arr.slice(start, end));
    }

    return ret;
}