/* This accumulates the arguments passed into an array, after a given index.
 *
 * |Name      |Desc                                   |
 * |----------|---------------------------------------|
 * |function  |Function that needs rest parameters    |
 * |startIndex|The start index to accumulates         |
 * |return    |Generated function with rest parameters|
 */

/* example
 * const paramArr = restArgs(function(rest) {
 *     return rest;
 * });
 * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
 */

/* module
 * env: all
 */

/* typescript
 * export declare function restArgs(
 *     fn: types.AnyFn,
 *     startIndex?: number
 * ): types.AnyFn;
 */

_('types');

exports = function(fn, startIdx) {
    startIdx = startIdx == null ? fn.length - 1 : +startIdx;

    return function() {
        const len = Math.max(arguments.length - startIdx, 0);
        const rest = new Array(len);
        let i;

        for (i = 0; i < len; i++) rest[i] = arguments[i + startIdx];

        // Call runs faster than apply.
        switch (startIdx) {
            case 0:
                return fn.call(this, rest);
            case 1:
                return fn.call(this, arguments[0], rest);
            case 2:
                return fn.call(this, arguments[0], arguments[1], rest);
        }

        const args = new Array(startIdx + 1);

        for (i = 0; i < startIdx; i++) args[i] = arguments[i];

        args[startIdx] = rest;

        return fn.apply(this, args);
    };
};
