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
 *     cpuLoad(): number;
 * };
 */

_('cgroup perfNow nextTick memoize');

const cpuNum = memoize(function() {
    return cgroup.cpuset.cpus().effective.length;
});

exports = {
    cpuNum,
    cpuUsage() {
        const now = perfNow() * 1000000;
        const usage = cgroup.cpu.stat().usage;
        return new Promise((resolve, reject) => {
            const delta = cgroup.cpu.stat().usage - usage;
            const totalTime = perfNow() * 1000000 - now;
            resolve(delta / totalTime);
        });
    }
};
