/* Get container stats inside container.
 */

/* example
 * container.cpuNum();
 */

/* module
 * env: node
 * test: manual
 * since: 1.35.0
 */

/* typescript
 * export declare const container: {
 *     cpuNum(): number;
 *     cpuUsage(period?: number): Promise<number>;
 *     cpuLoad(period?: number): Promise<number>;
 * };
 */

_('cgroup perfNow sleep memoize each isEmpty sum isNaN');

const os = require('os');

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

let lastCpuLoad = 0;

function cpuLoad(period = 0) {
    const cpus = cgroup.cpuset.cpus().effective;

    return Promise.all([cpuUsage(period), realCpuLoads(cpus, period)]).then(
        res => {
            const realCpuLoads = res[1];
            let cpuLoad = sum.apply(null, realCpuLoads) / cpus.length;

            const max = cgroup.cpu.max();
            if (max !== Infinity) {
                const cpuUsage = res[0];
                const quotaLoad = cpuUsage / max;
                if (quotaLoad > cpuLoad) {
                    cpuLoad = quotaLoad;
                }
            }

            if (isNaN(cpuLoad)) {
                return lastCpuLoad;
            }
            lastCpuLoad = cpuLoad;
            return cpuLoad;
        }
    );
}

let lastAllCpus = [];

function realCpuLoads(cpus, period = 0) {
    const cpuLoads = [];
    if (!period && isEmpty(lastAllCpus)) {
        period = DEFAULT_PERIOD;
    }
    let allCpus = lastAllCpus;
    if (period) {
        allCpus = os.cpus();
    }

    return new Promise(function(resolve) {
        sleep(period).then(() => {
            lastAllCpus = os.cpus();
            each(cpus, (cpu, idx) => {
                cpuLoads[idx] = calculateCpuLoad(
                    allCpus[cpu],
                    lastAllCpus[cpu]
                );
            });
            resolve(cpuLoads);
        });
    });
}

function calculateCpuLoad(lastCpu, cpu) {
    const lastTimes = lastCpu.times;
    const times = cpu.times;
    const lastLoad =
        lastTimes.user + lastTimes.sys + lastTimes.nice + lastTimes.irq;
    const lastTick = lastLoad + lastTimes.idle;
    const load = times.user + times.sys + times.nice + times.irq;
    const tick = load + times.idle;

    return (load - lastLoad) / (tick - lastTick);
}

exports = {
    cpuNum,
    cpuUsage,
    cpuLoad
};
