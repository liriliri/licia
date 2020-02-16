/* Resolve a promise after a specified timeout.
 *
 * |Name   |Desc         |
 * |-------|-------------|
 * |timeout|Sleep timeout|
 */

/* example
 * ;(async function () {
 *     await sleep(2000);
 * })();
 */

/* module
 * env: all
 * since: 1.4.1
 */

/* typescript
 * export declare function sleep(timeout: number): Promise<void>;
 */

exports = function(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
};
