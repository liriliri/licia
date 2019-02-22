/* Resolve a promise after a specified timeout.
 *
 * |Name   |Type   |Desc         |
 * |-------|-------|-------------|
 * |timeout|number |Sleep timeout|
 */

/* example
 * ;(async function () {
 *     await sleep(2000);
 * })();
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function sleep(timeout: number): Promise<void>;
 */

exports = function(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
