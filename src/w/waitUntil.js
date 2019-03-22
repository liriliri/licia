/* Wait until function returns a truthy value.
 *
 * |Name          |Type    |Desc              |
 * |--------------|--------|------------------|
 * |condition     |function|Condition function|
 * |[timeout=0]   |number  |Timeout           |
 * |[interval=250]|number  |Wait interval     |
 */

/* example
 * let a = 5;
 * setTimeout(() => a = 10, 500);
 * waitUntil(() => a === 10).then(() => {
 *     console.log(a); // -> 10
 * });
 */

/* module
 * env: all
 * test: all
 */

/* typescript
 * export declare function waitUntil(
 *     condition: Function,
 *     timeout?: number,
 *     interval?: number
 * ): Promise<any>;
 */

_('now');

exports = function(condition, timeout = 0, interval = 250) {
    function evalCondition() {
        return new Promise((resolve, reject) => {
            try {
                resolve(condition());
            } catch (e) {
                reject(e);
            }
        });
    }

    return new Promise((resolve, reject) => {
        const startTime = now();
        const pollCondition = () => {
            evalCondition().then(val => {
                const elapsed = now() - startTime;
                if (val) {
                    resolve(val);
                } else if (timeout && elapsed >= timeout) {
                    reject(Error(`Wait timed out after ${elapsed} ms`));
                } else {
                    setTimeout(pollCondition, interval);
                }
            }, reject);
        };
        pollCondition();
    });
};
