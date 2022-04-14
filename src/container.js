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

_('cgroup perfNow sleep memoize');

const cpuNum = memoize(function() {
    return cgroup.cpuset.cpus().effective.length;
});

exports = {
    cpuNum,
    cpuUsage() {
        const now = perfNow() * 1000;
        const usage = cgroup.cpu.stat().usage;
        return new Promise(resolve => {
            sleep(50).then(() => {
                const delta = cgroup.cpu.stat().usage - usage;
                const totalTime = perfNow() * 1000 - now;
                resolve(delta / totalTime);
            });
        });
    }
};
