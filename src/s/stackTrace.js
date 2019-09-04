/* Get CallSite objects in v8.
 *
 * [Stack trace API](https://v8.dev/docs/stack-trace-api)
 */

/* example
 * stackTrace(); // -> List of CallSite objects
 */

/* module
 * env: node
 * test: node
 * since: 1.5.3
 */

/* typescript
 * export declare function stackTrace(): any[];
 */

// https://github.com/tj/callsite
exports = function() {
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const stack = new Error().stack.slice(1);
    Error.prepareStackTrace = orig;

    return stack;
};
