/* Get container stats inside container.
 */

/* example
 * container.cpuNum();
 */

/* module
 * env: node
 * test: manual
 */

/* typescript
 * export declare const container: {
 *     cpuNum(): number;
 *     cpuLoad(period?: number): number;
 * };
 */

_('cgroup perfNow sleep memoize');

const cpuNum = memoize(function() {
    return cgroup.cpuset.cpus().effective.length;
});

const DEFAULT_PERIOD = 50;

let lastUsage = 0;
let lastNow = 0;

function cpuUsage(period = 0) {
    if (!period && !lastNow) {
        period = DEFAULT_PERIOD;
    }
    let now = lastNow;
    let usage = lastUsage;
    if (period) {
        now = perfNow() * 1000;
        usage = cgroup.cpu.stat().usage;
    }
    return new Promise(resolve => {
        sleep(period).then(() => {
            lastUsage = cgroup.cpu.stat().usage;
            const delta = lastUsage - usage;
            lastNow = perfNow() * 1000;
            const totalTime = lastNow - now;
            resolve(delta / totalTime);
        });
    });
}

exports = {
    cpuNum,
    cpuUsage
};
