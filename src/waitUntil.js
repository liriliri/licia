/* Wait until function returns a truthy value.
 *
 * |Name        |Desc              |
 * |------------|------------------|
 * |condition   |Condition function|
 * |timeout=0   |Timeout           |
 * |interval=250|Wait interval     |
 */

/* example
 * let a = 5;
 * setTimeout(() => (a = 10), 500);
 * waitUntil(() => a === 10).then(() => {
 *     console.log(a); // -> 10
 * });
 */

/* module
 * env: all
 * since: 1.4.3
 */

/* typescript
 * export declare function waitUntil(
 *     condition: types.AnyFn,
 *     timeout?: number,
 *     interval?: number
 * ): Promise<any>;
 */

_('now types');

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
                    reject(Error(`Wait timed out after ${timeout} ms`));
                } else {
                    setTimeout(pollCondition, interval);
                }
            }, reject);
        };
        pollCondition();
    });
};
