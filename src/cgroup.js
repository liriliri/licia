/* Read cgroup metrics inside container.
 */

/* example
 * cgroup.cpu.stat();
 */

/* module
 * env: node
 * test: manual
 */

/* typescript
 * export declare const cgroup: {
 *     cpu: {
 *         stat(): {
 *             usage: number;
 *         };
 *     };
 *     cpuset: {
 *         cpus(): {
 *             effective: number[];
 *         };
 *     };
 *     version(): number;
 * };
 */

_('memoize each trim toNum contain concat range');

const fs = require('fs');

const cpu = {
    stat() {
        let usage = 0;

        if (isV2()) {
            // microseconds
            const data = parseKeyValue(read('cpu.stat'));
            usage = toNum(data['usage_usec']);
        } else {
            // nanoseconds
            usage = Math.round(toNum(read('cpuacct/cpuacct.usage')) / 1000);
        }

        return {
            usage
        };
    }
};

const cpuset = {
    cpus() {
        let effective = [];
        let p = 'cpuset/cpuset.effective_cpus';

        if (isV2()) {
            p = 'cpuset.cpus.effective';
        }

        effective = parseRange(read(p));

        return {
            effective
        };
    }
};

const isV2 = memoize(function() {
    return fs.existsSync(resolve('cgroup.controllers'));
});

function read(p) {
    return fs.readFileSync(resolve(p), 'utf8');
}

/* a 1
 * b 2
 */
function parseKeyValue(data) {
    const ret = {};

    each(data.split('\n'), line => {
        line = trim(line);
        if (line) {
            line = line.split(/\s+/);
            ret[line[0]] = line[1];
        }
    });

    return ret;
}

/* 1-2,4-5 */
function parseRange(data) {
    let ret = [];

    each(data.split(','), r => {
        if (!contain(r, '-')) {
            ret.push(toNum(r));
        } else {
            r = r.split('-');
            ret = concat(ret, range(toNum(r[0]), toNum(r[1]) + 1));
        }
    });

    return ret;
}

function resolve(p) {
    return `/sys/fs/cgroup/${p}`;
}

exports = {
    cpu,
    cpuset,
    version() {
        return isV2() ? 2 : 1;
    }
};
