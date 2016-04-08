/* This accumulates the arguments passed into an array, after a given index.
 *
 * |Name|Type|Desc|
 * |--------------|
 * |function|function|Function that needs rest parameters|
 * |startIndex|number|The start index to accumulates|
 * |return|function|Generated function with rest parameters|
 *
 * ```javascript
 * var paramArr = _.restArgs(function (rest) { return rest });
 * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
 * ```
 */

restArgs = function (fn, startIdx)
{
    startIdx = startIdx == null ? fn.length - 1 : +startIdx;

    return function ()
    {
        var len = Math.max(arguments.length - startIdx, 0),
            rest = new Array(len),
            i;

        for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

        // Call runs faster than apply.
        switch (startIdx)
        {
            case 0: return fn.call(this, rest);
            case 1: return fn.call(this, arguments[0], rest);
            case 2: return fn.call(this, arguments[0], arguments[1], rest);
        }

        var args = new Array(startIdx + 1);

        for (i = 0; i < startIdx; i++) args[i] = arguments[i];

        args[startIdx] = rest;

        return fn.apply(this, args);
    };
};